import express from 'express';
import path from 'path';
import cookieParser from 'cookie-parser';
import logger from 'morgan';
import mongoose from 'mongoose';
import cors from 'cors';
import indexRouter from './routes/index';
import session from 'express-session';

//MongoDb Connection
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost/PousadaBeiraMar')
  .then(() => console.log('Conexão com o MongoDB estabelecida com sucesso!'))
  .catch((erro: any) => console.log(`Erro ao estabelecer a conexão com o MongoDB: ${erro}`));

const app = express();

app.use(session({
  secret: 'key',
  resave: false,
  saveUninitialized: true,
  cookie: { secure: true }
}));

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(cors());
app.use('/', indexRouter);
app.use('/list', indexRouter);

export default app;
