import express from 'express';
import userRoutes from './routes/userRoutes';
import documentRoutes from './routes/documentRoutes'

const app = express();
app.use(express.json());

app.use('/users', userRoutes);
app.use('/documents', documentRoutes);

const PORT = 3333;

app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`);
});
