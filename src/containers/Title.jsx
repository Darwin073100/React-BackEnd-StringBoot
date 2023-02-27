import React from 'react';
import '@styles/Title.css';

const Title = ({children}) => {
  return (
    <div className='title'>
      {children}
    </div>
  );
}

export { Title };
