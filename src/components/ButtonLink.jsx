import React from 'react';
import { useNavigate } from 'react-router';

const ButtonLink = ({image, path, hin}) => {
  const navigate = useNavigate();
  return (
    <button className="item btn-dark"
      onClick={()=>navigate(path)}
    >
      <img src={image} alt={hin} />
    </button>
  );
}

export { ButtonLink };
