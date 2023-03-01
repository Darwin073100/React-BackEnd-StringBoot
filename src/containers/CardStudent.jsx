import React from 'react';
import { Button } from '../components/Button';
import { Column } from '../components/Column';

const CardStudent = ({item, actions, modalActions}) => {
  const handleModal = (e)=>{
    actions.findById(item.id)
    modalActions.modalUpdate()
    modalActions.isModal()
  }

  return (
    <div className='card'>
      <div className='card-header'>
        <div>
          <h2>{item.nombre}</h2>
          <h3>{item.apellidos}</h3>
        </div>
      </div>
      <div className="card-body">
        <Column>{item.id}</Column>
        <Column>{item.email}</Column>
        <Column>{item.address}</Column>
        <Column>{item.edad}</Column>
      </div>
      <div className='card-footer'>
        <Button event={handleModal} style='btn-yellow' text='Update'/>
        <button onClick={()=>actions.deleteById(item.id)} className='btn btn-red'>Delete</button>
      </div>
    </div>
);
}

export { CardStudent };
