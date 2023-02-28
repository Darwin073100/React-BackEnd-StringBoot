import React from 'react';

const Card = ({item}) => {
  return (
    <div className='card'>
      <div className='card-header'>
        <div>
          <h2>{item.nombre}</h2>
          <h3>{item.apellidos}</h3>
        </div>
      </div>
      <div className="card-body">
        <span>{item.id}</span>
        <span>{item.email}</span>
        <span>{item.address}</span>
        <span>{item.edad} Ages</span>
      </div>
      <div className='card-footer'>
        <button className='btn btn-yellow'>Actualizar</button>
        <button className='btn btn-red'>Eliminar</button>
      </div>
    </div>
);
}

export { Card };
