import React from 'react';
import { useNavigate } from 'react-router-dom';

const Menu = ({modalActions}) => {
  const navigate = useNavigate();

  const handleModal = ()=>{
    modalActions.modalSave()
    modalActions.isModal()
  }

  return (
    <div className='menu'>
      <button className='btn btn-dark' onClick={()=> navigate('/')}>Home</button>
      <button className='btn btn-blue' onClick={()=> navigate('/careers')}>Careers</button>
      <button className='btn btn-blue' onClick={()=> navigate('/inscriptions')}>Inscription</button>
      <button className='btn btn-blue' onClick={()=> navigate('/students')}>Students</button>
      <button className='btn btn-green' onClick={handleModal}>Register</button>
    </div>
  );
}

export { Menu };
