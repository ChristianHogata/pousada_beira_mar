import express from 'express';
import path from 'path';
import cookieParser from 'cookie-parser';
import logger from 'morgan';
import mongoose from 'mongoose';

import indexRouter from './routes/index';

//MongoDb Connection
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost/meu_banco_de_dados')
  .then(() => console.log('Conexão com o MongoDB estabelecida com sucesso!'))
  .catch((erro: any) => console.log(`Erro ao estabelecer a conexão com o MongoDB: ${erro}`));

const app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);

export default app;
