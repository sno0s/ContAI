import React, { useState, useEffect } from 'react';
import { Launch } from '../types/Launch';
import LaunchForm from '../components/LaunchForm';
import LaunchTable from '../components/LaunchTable';
import api from '../services/api';

const Home: React.FC = () => {
  const [launches, setLaunches] = useState<Launch[]>([]);

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

  return (
    <div style={{ padding: '2rem' }}>
      <h1>ContAI - Financial Launches</h1>
      <LaunchForm setLaunches={setLaunches} />
      <LaunchTable launches={launches} />
    </div>
  );
};

export default Home;
