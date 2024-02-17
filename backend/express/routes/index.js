"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const model_Reservation_1 = __importDefault(require("../model/model.Reservation"));
const model_Users_1 = __importDefault(require("../model/model.Users"));
const bcrypt = __importStar(require("bcrypt"));
const router = express_1.default.Router();
/* GET home page. */
router.get('/', (req, res, next) => {
    res.send('respond with a resource1');
});
router.get('/list', (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const { pousada = '1', initReservationDate, endReservationDate } = req.query;
    let startDate = typeof initReservationDate === 'string' ? new Date(initReservationDate) : undefined;
    let endDate = typeof endReservationDate === 'string' ? new Date(endReservationDate) : undefined;
    const rooms = yield model_Reservation_1.default.find(Object.assign({ pousada: Number(pousada) }, (startDate && endDate ? {
        $or: [
            { initReservationDate: { $gt: endDate } },
            { endReservationDate: { $lt: startDate } },
            { initReservationDate: null, endReservationDate: null }
        ]
    } : {})));
    console.log(rooms);
    res.send(rooms);
}));
router.get('/myReservation', (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const { idUser } = req.query;
    const rooms = yield model_Reservation_1.default.find({ user: idUser });
    console.log(idUser);
    res.send(rooms);
}));
router.post('/register', (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    // Verifique se já existe um usuário com este e-mail
    const existingUser = yield model_Users_1.default.findOne({ email: req.body.email });
    if (existingUser) {
        // Se um usuário existente for encontrado, retorne um erro
        return res.status(400).send('E-mail já está cadastrado');
    }
    // Criptografe a senha antes de salvar o usuário
    bcrypt.hash(req.body.senha, 10, function (err, hash) {
        return __awaiter(this, void 0, void 0, function* () {
            // Se ocorrer um erro durante a criptografia, retorne um erro
            if (err) {
                return res.status(500).send('Erro ao criptografar a senha');
            }
            // Se nenhum usuário existente for encontrado, crie uma nova instância do seu modelo com os dados do req.body
            const newUser = new model_Users_1.default(Object.assign(Object.assign({}, req.body), { senha: hash }));
            try {
                // Salve a nova instância no banco de dados
                yield newUser.save();
                // Envie o status HTTP 200
                res.sendStatus(200);
            }
            catch (error) {
                // Trate qualquer erro que possa ocorrer
                res.sendStatus(500); // Envie o status HTTP 500 se ocorrer um erro
            }
        });
    });
}));
router.put('/myReservation/cancel', (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { idRoom } = req.query;
        const updatedRoom = yield model_Reservation_1.default.findOneAndUpdate({ _id: idRoom }, // condição
        { $set: {
                user: null,
                initReservationDate: null,
                endReservationDate: null
            } }, // atualização
        { new: true } // opções
        );
        console.log(idRoom);
        res.sendStatus(200);
    }
    catch (error) {
        console.error(error);
        res.sendStatus(500); // Envie o status HTTP 500 se ocorrer um erro
    }
}));
router.post('/reservation/success', (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const idRoom = req.body.idRoom;
        const loggedIn = req.body.loggedIn;
        console.log(idRoom);
        console.log(loggedIn);
        const updatedRoom = yield model_Reservation_1.default.findOneAndUpdate({ _id: idRoom }, // condição
        { $set: {
                user: loggedIn,
                initReservationDate: req.body.initDate,
                endReservationDate: req.body.finishDate
            } }, { new: true } // opções
        );
        res.send(idRoom);
    }
    catch (error) {
        console.error(error);
        res.sendStatus(500); // Envie o status HTTP 500 se ocorrer um erro
    }
}));
router.post('/login', (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    // Procure um usuário com o login fornecido
    const user = yield model_Users_1.default.findOne({ email: req.body.login });
    if (!user) {
        // Se nenhum usuário for encontrado, retorne um erro
        return res.status(400).send('Invalid login or password');
    }
    // Se um usuário for encontrado, compare a senha fornecida com a senha hash armazenada
    if (user && user.senha) {
        bcrypt.compare(req.body.password, user.senha, function (err, isMatch) {
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
    }
    else {
        // Se o usuário ou a senha do usuário não estiverem definidos, retorne um erro
        return res.status(400).send('Invalid login or password');
    }
}));
exports.default = router;
