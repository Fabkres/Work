import React from 'react';

const ResultComponent = ({ category, activities, result }) => {
  return (
    <div>
      <h3>{category}</h3>
      <p>Resultado: {result}</p>
      <ul>
        {activities.map((activity, index) => (
          <li key={index}>{activity}</li>
        ))}
      </ul>
    </div>
  );
};

export default ResultComponent;
