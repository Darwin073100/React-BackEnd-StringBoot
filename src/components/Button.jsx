import React from 'react';

const Button = ({style,text,event}) => {
  return (
    <button className={`btn ${style}`} onClick={event}>
      {text}
    </button>
  );
}

export { Button };
