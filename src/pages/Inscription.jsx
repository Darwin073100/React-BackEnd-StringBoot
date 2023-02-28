import React from 'react';
import { Title } from '@containers/Title';
import { Header } from '../containers/Header';
import { Container } from '../containers/Container';
import { Menu } from '../containers/Menu';
import { Body } from '../containers/Body';
import { Card } from '../containers/Card';
import '@styles/Entities.css';

const Inscription = () => {
  return (
    <div className='entity'>
      <Title>
        <Header title='Inscriptions'/>
      </Title>
    </div>
  );
}

export { Inscription };
