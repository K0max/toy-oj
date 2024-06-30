import React, { useEffect, useState } from 'react';
import axios from 'axios';

interface Problem {
  title: string;
  level: string;
  total: number;
  ac_rate: string;
}

const ProblemsList: React.FC = () => {
  const [problems, setProblems] = useState<Problem[]>([]);

  useEffect(() => {
    axios.get('/api/problems')
      .then(response => {
        setProblems(response.data);
      })
      .catch(error => {
        console.error('There was an error fetching the problems!', error);
      });
  }, []);

  return (
    <table>
      <thead>
        <tr>
          <th>#</th>
          <th>Title</th>
          <th>Level</th>
          <th>Total</th>
          <th>AC Rate</th>
        </tr>
      </thead>
      <tbody>
        {problems.map((problem, index) => (
          <tr key={index}>
            <td>{index + 1}</td>
            <td>{problem.title}</td>
            <td>{problem.level}</td>
            <td>{problem.total}</td>
            <td>{problem.ac_rate}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default ProblemsList;
