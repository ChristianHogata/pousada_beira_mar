import express, { Request, Response, NextFunction } from 'express';
import modelReservation from '../model/model.Reservation';
import modelUser from '../model/model.Users';
import * as bcrypt from 'bcrypt';
import mongoose from 'mongoose';
import { Types } from 'mongoose';

interface User {
  id: string;
}

declare module 'express-session' {
  interface SessionData {
    user: User;
  }
}

const router = express.Router();

/* GET home page. */
router.get('/', (req: Request, res: Response, next: NextFunction) => {
  res.send('respond with a resource1');
});

router.get('/list', async (req: Request, res: Response, next: NextFunction) => {
  const { pousada = '1', initReservationDate, endReservationDate } = req.query;
  
  let startDate = typeof initReservationDate === 'string' ? new Date(initReservationDate) : undefined;
  let endDate = typeof endReservationDate === 'string' ? new Date(endReservationDate) : undefined;

  const rooms = await modelReservation.find({
    pousada: Number(pousada),
    ...(startDate && endDate ? {
      $or: [
        { initReservationDate: { $gt: endDate } },
        { endReservationDate: { $lt: startDate } },
        { initReservationDate: null, endReservationDate: null }
      ]
    } : {})
  });

  console.log(rooms);
  res.send(rooms);
});

router.get('/myReservation', async (req: Request, res: Response, next: NextFunction) => {
  const {idUser} = req.query;
  
  const rooms = await modelReservation.find({user: idUser});

  console.log(idUser);
  res.send(rooms);
});

router.post('/register', async (req: Request, res: Response, next: NextFunction) => {
  // Verifique se já existe um usuário com este e-mail
  const existingUser = await modelUser.findOne({ email: req.body.email });

  if (existingUser) {
    // Se um usuário existente for encontrado, retorne um erro
    return res.status(400).send('E-mail já está cadastrado');
  }

  // Criptografe a senha antes de salvar o usuário
  bcrypt.hash(req.body.senha, 10, async function(err, hash) {
    // Se ocorrer um erro durante a criptografia, retorne um erro
    if (err) {
      return res.status(500).send('Erro ao criptografar a senha');
    }

    // Se nenhum usuário existente for encontrado, crie uma nova instância do seu modelo com os dados do req.body
    const newUser = new modelUser({
      ...req.body,
      senha: hash,  // Substitua a senha em texto simples pela senha criptografada
    });

    try {
      // Salve a nova instância no banco de dados
      await newUser.save();

      // Envie o status HTTP 200
      res.sendStatus(200);
    } catch (error) {
      // Trate qualquer erro que possa ocorrer
      res.sendStatus(500); // Envie o status HTTP 500 se ocorrer um erro
    }
  });
});

router.put('/myReservation/cancel', async (req: Request, res: Response, next: NextFunction) => {
  try {
    const {idRoom} = req.query;

    const updatedRoom = await modelReservation.findOneAndUpdate(
      { _id: idRoom }, // condição
      {$set: { 
        user: null,
        initReservationDate: null,
        endReservationDate: null
      }}, // atualização
      { new: true } // opções
    );

    console.log(idRoom)
    res.sendStatus(200);
  } catch (error) {
    console.error(error);
    res.sendStatus(500); // Envie o status HTTP 500 se ocorrer um erro
  }
});


router.post('/reservation/success', async (req: Request, res: Response, next: NextFunction) => {
  try {
    const idRoom = req.body.idRoom;
    const loggedIn = req.body.loggedIn;

    console.log(idRoom);
    console.log(loggedIn);

    const updatedRoom = await modelReservation.findOneAndUpdate(
      { _id: idRoom }, // condição
      {$set: { 
        user: loggedIn,
        initReservationDate: req.body.initDate,
        endReservationDate: req.body.finishDate
      }},
      { new: true } // opções
    );

    res.send(idRoom);
  } catch (error) {
    console.error(error);
    res.sendStatus(500); // Envie o status HTTP 500 se ocorrer um erro
  }
});

router.post('/login', async (req: Request, res: Response, next: NextFunction) => {
  // Procure um usuário com o login fornecido
  const user = await modelUser.findOne({ email: req.body.login });

  if (!user) {
    // Se nenhum usuário for encontrado, retorne um erro
    return res.status(400).send('Invalid login or password');
  }

  // Se um usuário for encontrado, compare a senha fornecida com a senha hash armazenada
  
  if (user && user.senha) {
    bcrypt.compare(req.body.password, user.senha, function(err, isMatch) {
      if (err) {
        return res.status(500).send('An error occurred');
      }
  
      if (!isMatch) {
        // Se as senhas não corresponderem, retorne um erro
        return res.status(400).send('Invalid login or password');
      }
  
      // Se tudo estiver correto, retorne um status de sucesso
      if (user.email) {
        req.session.user = {
          id: user.id
        };
      }

      res.send(req.session.user);
    });
  } else {
    // Se o usuário ou a senha do usuário não estiverem definidos, retorne um erro
    return res.status(400).send('Invalid login or password');
  }  
});




export default router;
