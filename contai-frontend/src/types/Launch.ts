export type LaunchType = 'credit' | 'debit';

export interface Launch {
  id: string;
  date: string; // formato ISO (ex: 2024-05-31)
  description: string;
  amount: number;
  type: LaunchType;
}

