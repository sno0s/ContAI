import React, { useState, useEffect } from 'react';
import { Launch } from '../types/Launch';
import LaunchForm from '../components/LaunchForm';
import LaunchTable from '../components/LaunchTable';
import api from '../services/api';
// página inicial
const Home: React.FC = () => {
  const [launches, setLaunches] = useState<Launch[]>([]);

// try catch básico para ver se conseguiu se conectar ao backend
  useEffect(() => {
    const fetchLaunches = async () => {
      try {
        const response = await api.get('/launches'); // Rota do seu backend
        setLaunches(response.data);
      } catch (error) {
        console.error(error);
        alert('Failed to load launches');
      }
    };

    fetchLaunches();
  }, []);
// se der tudo certo vai retornar as tabelas que estão no banco de dados
  return (
    <div style={{ padding: '2rem' }}>
      <h1>ContAI - Financial Launches</h1>
      <LaunchForm setLaunches={setLaunches} />
      <LaunchTable launches={launches} />
    </div>
  );
};

export default Home;
