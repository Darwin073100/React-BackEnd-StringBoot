import React from 'react';
import { Title } from '@containers/Title';
import { Header } from '@containers/Header';
import { Container } from '@containers/Container';
import { Menu } from '@containers/Menu';
import { Body } from '@containers/Body';
import { CardStudent } from '@containers/CardStudent';
import { useStudents } from '@hooks/useStudents';
import { Modal } from '@containers/Modal';
import { FormStudents } from '@containers/FormStudents';
import '@styles/Entities.css';

const Student = () => {
  const [students, actions, modalActions, atribs, not] = useStudents();
  return (
    <div className='entity'>
      <Header>
        <Title title='Students'/>
        {not.value && <span className={not.style}>{not.text}</span>}
      </Header>
      <Body>
        <Menu modalActions={modalActions}/>
        <Container>
          {students.map(item => <CardStudent
            item={item}
            modalActions={modalActions}
            actions={actions}
            atribs={atribs}
            key={item.id}/>)}
        </Container>
      </Body>
      {modalActions.modal &&
        <Modal>
          <FormStudents
            modalActions={modalActions}
            actions={actions}
            atribs={atribs}/>
        </Modal>
      }
    </div>
  );
}

export { Student };
