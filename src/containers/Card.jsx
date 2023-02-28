import React from 'react';

const Card = () => {
  return (
    <div className='card'>
      <div className='card-header'>
        <div>
          <h2>Edwin</h2>
          <h3>Garcia Quiterio</h3>
        </div>
      </div>
      <div className="card-body">
        <span>18060002</span>
        <span>edwinegq@outlook.com</span>
        <span>Los Chegües Guerrero Mexico</span>
        <span>22 Años</span>
      </div>
      <div className='card-footer'>
        <button className='btn btn-yellow'>Actualizar</button>
        <button className='btn btn-red'>Eliminar</button>
      </div>
    </div>
);
}

export { Card };
