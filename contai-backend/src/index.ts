import express from 'express';
import cors from 'cors';
import 'reflect-metadata';
import { AppDataSource } from './data-source';
import launchRoutes from './routes/launch.routes';

const app = express();

// ✅ Adiciona isso
app.use(cors({
  origin: 'http://localhost:3000'  // Permite o React acessar
}));

app.use(express.json());
app.use(launchRoutes);

const PORT = 3001; // porta onde essa api vai rodar

AppDataSource.initialize()
  .then(() => {
    console.log('📦 Database connected');
    app.listen(PORT, () => {
      console.log(`🚀 Server is running on http://localhost:${PORT}`);
    });
  })
  .catch((error) => console.error('❌ Database connection error:', error));
