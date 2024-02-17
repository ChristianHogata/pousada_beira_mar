import { Request, Response, NextFunction } from 'express';
import modelUser from '../model/model.Users';
import * as bcrypt from 'bcrypt';
import session, { SessionData } from 'express-session';

declare module 'express-session' {
    export interface SessionData {
      user: { [key: string]: any };
    }
}

const ControllerLogin = (router: any)=>{
    //const router = express.Router();

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
 
                return res.status(200).send(req.session.user);
            });
        } 
        else {
        // Se o usuário ou a senha do usuário não estiverem definidos, retorne um erro
        return res.status(400).send('Invalid login or password');
        }  
    });
    
    return router;
}

export default ControllerLogin;