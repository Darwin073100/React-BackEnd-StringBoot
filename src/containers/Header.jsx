import React from 'react';
import { useNavigate } from 'react-router';

const Header = ({title}) => {

  const navigate = useNavigate();

  return (
    <>
      <button
          className='btn btn-red'
          onClick={()=> navigate(-1)}
        >Home</button>
        <h1 className='h1'>Template {title}</h1>
    </>
  );
}

export { Header };
