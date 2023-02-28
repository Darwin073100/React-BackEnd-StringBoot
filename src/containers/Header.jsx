import React from 'react';
import { useNavigate } from 'react-router';

const Header = () => {
  const navigate = useNavigate();
  return (
    <>
      <button
          className='btn btn-red'
          onClick={()=> navigate('/')}
        >Home</button>
        <h1 className='h1'>Template Students</h1>
    </>
  );
}

export { Header };
