import React from 'react';
import { Title } from '@containers/Title';
import { Header } from '@containers/Header';
import { Menu } from '@containers/Menu';
import { Body } from '@containers/Body';
import '@styles/Entities.css';

const Career = () => {
  return (
    <div className='entity'>
      <Header>
        <Title title='Careers'/>
      </Header>
      <Body>
        <Menu />
      </Body>
    </div>
  );
}

export { Career };
