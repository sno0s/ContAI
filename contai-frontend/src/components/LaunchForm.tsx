import React, { useState } from 'react';
import { Launch, LaunchType } from '../types/Launch';
import { v4 as uuidv4 } from 'uuid';
import api from '../services/api';

interface LaunchFormProps {
  setLaunches: React.Dispatch<React.SetStateAction<Launch[]>>;
}

const LaunchForm: React.FC<LaunchFormProps> = ({ setLaunches }) => {
  const [date, setDate] = useState('');
  const [description, setDescription] = useState('');
  const [amount, setAmount] = useState('');
  const [type, setType] = useState<LaunchType>('credit');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!date || !description || !amount || isNaN(Number(amount)) || Number(amount) <= 0) {
      alert('Please fill out all fields correctly.');
      return;
    }

    const newLaunch = {
      id: uuidv4(),
      date,
      description,
      amount: parseFloat(amount),
      type,
    };

    try {
      const response = await api.post('/launches', newLaunch);
      const savedLaunch = response.data;

      setLaunches(prev => [...prev, savedLaunch]);
      setDate('');
      setDescription('');
      setAmount('');
      setType('credit');
    } catch (error) {
      console.error(error);
      alert('Failed to save launch');
    }
  };

  return (
    <form onSubmit={handleSubmit} style={{ marginBottom: '2rem' }}>
      <h2>Add Launch</h2>

      <div>
        <label>Date:</label><br />
        <input type="date" value={date} onChange={e => setDate(e.target.value)} required />
      </div>

      <div>
        <label>Description:</label><br />
        <input type="text" value={description} onChange={e => setDescription(e.target.value)} required />
      </div>

      <div>
        <label>Amount:</label><br />
        <input type="number" value={amount} onChange={e => setAmount(e.target.value)} required min="0.01" step="0.01" />
      </div>

      <div>
        <label>Type:</label><br />
        <select value={type} onChange={e => setType(e.target.value as LaunchType)}>
          <option value="credit">Credit</option>
          <option value="debit">Debit</option>
        </select>
      </div>

      <button type="submit" style={{ marginTop: '1rem' }}>Add</button>
    </form>
  );
};

export default LaunchForm;
