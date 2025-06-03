import { Launch } from '../types/Launch';

export function groupByMonthYear(launches: Launch[]) {
  const groups: { [key: string]: Launch[] } = {};

  for (const launch of launches) {
    const date = new Date(launch.date);
    const month = (date.getMonth() + 1).toString().padStart(2, '0');
    const year = date.getFullYear();
    const key = `${month}/${year}`;

    if (!groups[key]) {
      groups[key] = [];
    }

    groups[key].push(launch);
  }

  return groups;
}
