import React from 'react';
import { Launch } from '../types/Launch';
import { groupByMonthYear } from '../utils/dateUtils';

interface LaunchTableProps {
  launches: Launch[];
}

const LaunchTable: React.FC<LaunchTableProps> = ({ launches }) => {
  const grouped = groupByMonthYear(launches);

  return (
    <div>
      <h2>Launches</h2>
      {Object.entries(grouped).map(([monthYear, launches]) => {
        const totalCredit = launches
          .filter(l => l.type === 'credit')
          .reduce((sum, l) => sum + l.amount, 0);
        const totalDebit = launches
          .filter(l => l.type === 'debit')
          .reduce((sum, l) => sum + l.amount, 0);

        return (
          <div key={monthYear} style={{ marginBottom: '2rem' }}>
            <h3>{monthYear}</h3>
            <table border={1} cellPadding={8}>
              <thead>
                <tr>
                  <th>Date</th>
                  <th>Description</th>
                  <th>Amount</th>
                  <th>Type</th>
                </tr>
              </thead>
              <tbody>
                {launches.map(launch => (
                  <tr key={launch.id}>
                    <td>{launch.date}</td>
                    <td>{launch.description}</td>
                    <td>{launch.amount.toFixed(2)}</td>
                    <td>{launch.type}</td>
                  </tr>
                ))}
              </tbody>
              <tfoot>
                <tr>
                  <td colSpan={2}><strong>Monthly Totals</strong></td>
                  <td><strong>+{totalCredit.toFixed(2)}</strong></td>
                  <td><strong>-{totalDebit.toFixed(2)}</strong></td>
                </tr>
              </tfoot>
            </table>
          </div>
        );
      })}
    </div>
  );
};

export default LaunchTable;
