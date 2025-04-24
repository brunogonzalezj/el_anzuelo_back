import express from 'express';
import morgan from 'morgan';
import cors from 'cors';
import { platosController } from './features/platos/platos.controller';
import { extrasController } from './features/extras/extras.controller';

const app = express();

app.use(express.json());
app.use(morgan('dev'));
app.use(cors());

app.use('/platos', platosController);
app.use('/extras', extrasController);

app.listen(3000, () => {
  console.log('Server is running on port 3000');
});
