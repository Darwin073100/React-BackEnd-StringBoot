import React from 'react';
import { Title } from '@containers/Title';
import { Header } from '@containers/Header';
import { Container } from '@containers/Container';
import { Menu } from '@containers/Menu';
import { Body } from '@containers/Body';
import { Card } from '@containers/Card';
import '@styles/Entities.css';

import { useStudents } from '@hooks/useStudents';

const Student = () => {
  const [students] = useStudents();
  return (
    <div className='entity'>
      <Title>
        <Header title='Students'/>
      </Title>
      <Body>
        <Menu />
        <Container>
          {students.map(item => <Card item={item} key={item.id}/>)}
        </Container>
      </Body>
    </div>
  );
}

export { Student };
