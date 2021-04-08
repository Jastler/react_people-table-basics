import React from 'react';

export const PerosonRow = ({ person }) => {
  return (
    <tr className="Person" key={person.slug}>
      <td>{person.name}</td>
      <td>{person.sex}</td>
      <td>{person.born}</td>
      <td>{person.died}</td>
      <td>{person.mother.name}</td>
      <td>{person.father.name}</td>
    </tr>
  );
};