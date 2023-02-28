import React, { useState } from 'react';
import { Title } from '@containers/Title';
import { Header } from '@containers/Header';
import { Container } from '@containers/Container';
import { Menu } from '@containers/Menu';
import { Body } from '@containers/Body';
import { Card } from '@containers/Card';
import '@styles/Entities.css';

import { useStudents } from '@hooks/useStudents';
import { Modal } from '../containers/Modal';
import FormStudents from '../containers/FormStudents';

const Student = () => {
  const [students, actions, modalActions, atribs] = useStudents();
  return (
    <div className='entity'>
      <Title>
        <Header title='Students'/>
      </Title>
      <Body>
        <Menu modalActions={modalActions}/>
        <Container>
          {students.map(item => <Card item={item} modalActions={modalActions} actions={actions} atribs={atribs}key={item.id}/>)}
        </Container>
      </Body>
      {modalActions.modal && <Modal>
        <FormStudents modalActions={modalActions} actions={actions} atribs={atribs}/>
      </Modal>}
    </div>
  );
}

export { Student };
