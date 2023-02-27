import React from 'react';
import '@styles/Home.css';
import student from '@assets/persona.svg';

const Home = () => {
  return (
    <div className='home'>
      <div className='title'>
        <h1>Crud to Api Rest in Spring Boot</h1>
      </div>
      <div className='container'>
        <button className="item btn-dark">
          <img src={student} alt="student" />
        </button>
        <button className="item btn-dark">
          <img src={student} alt="student" />
        </button>
        <button className="item btn-dark">
          <img src={student} alt="student" />
        </button>
      </div>
    </div>
  );
}

export { Home };
