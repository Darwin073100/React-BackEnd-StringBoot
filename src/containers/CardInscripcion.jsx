import React from 'react';
import { Button } from '../components/Button';
import { Column } from '../components/Column';

const CardInscription = ({item, actions, modalActions}) => {
  const handleModal = (e)=>{
    actions.findById(item.id)
    modalActions.modalUpdate()
    modalActions.isModal()
  }

  return (
    <div className='card'>
      <div className='card-header'>
        <div>
          <h2>{item.persona?.nombre}</h2>
          <h3>{item.carrera?.alias}</h3>
        </div>
      </div>
      <div className="card-body">
        <Column>{item.id}</Column>
        <Column><strong>studentId: </strong>{item.idPersona}</Column>
        <Column>{item.persona?.nombre} {item.persona?.apellidos}</Column>
        <Column><strong>careerId: </strong>{item.idCarrera}</Column>
        <Column>{item.carrera?.nombre}</Column>
        <Column>{new Date(item.fecha).toLocaleString()}</Column>
      </div>
      <div className='card-footer'>
        <Button event={handleModal} style='btn-yellow' text='Update'/>
        <button onClick={()=>actions.deleteById(item.id)} className='btn btn-red'>Delete</button>
      </div>
    </div>
);
}

export { CardInscription };
