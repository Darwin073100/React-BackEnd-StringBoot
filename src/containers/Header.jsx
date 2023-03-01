import React from 'react';
import '@styles/Header.css';

const Header= ({children}) => {
  return (
    <div className='header'>
      {children}
    </div>
  );
}

export { Header };
