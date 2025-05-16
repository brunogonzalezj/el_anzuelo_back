import express from 'express';
import morgan from 'morgan';
import { usuariosRouter } from './features/usuarios/usuario.route';
import { reservaRouter } from './features/reservas/reserva.route';
import { platoRouter } from './features/platos/plato.route';
import { pedidoRouter } from './features/pedidos/pedido.route';
import { mesaRouter } from './features/mesas/mesa.route';
import { extraRouter } from './features/extras/extra.route';
import { inventarioRouter } from './features/inventario/inventario.route';
import cors from 'cors';

const app = express();

app.use(express.json());
app.use(morgan('dev'));
app.use(cors());


app.use('/api/usuarios', usuariosRouter);
app.use('/api/pedidos', pedidoRouter);
app.use('/api/mesas', mesaRouter);
app.use('/api/reservas', reservaRouter);
app.use('/api/platos', platoRouter);
app.use('/api/extras', extraRouter);
app.use('/api/inventario', inventarioRouter);

app.listen(3000, () => {
  console.log('Server is running on port 3000');
});
