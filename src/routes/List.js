import React from 'react';

const runners = [
  {
    id: 1,
    name: 'Lair',
    city: 'Santa Cruz do Sul',
    gender: 'Male',
    velocity: '34,50'
  },
  {
    id: 2,
    name: 'Melody',
    city: 'Bronx',
    gender: 'Female',
    velocity: '32,50'
  },
  {
    id: 3,
    name: 'Fabiano',
    city: 'Santa Cruz do Sul',
    gender: 'Male',
    velocity: '30,50'
  },
];

function Row({name, city, gender, velocity}) {
  return (
    <tr>
      <td>
        {name}
      </td>
      <td>
        {city}
      </td>
      <td>
        {gender}
      </td>
      <td>
        {velocity}
      </td>
    </tr>
  )
}

function List() {
  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>
              Nome
            </th>
            <th>
              Cidade
            </th>
            <th>
              Gênero
            </th>
            <th>
              Velocidade
            </th>
          </tr>
        </thead>

        <tbody>
          {runners.map((runner) => (
            <Row {...runner} key={runner.id} />
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default List;