import React from 'react';
import { Title } from '@containers/Title';
import { Header } from '@containers/Header';
import { Menu } from '@containers/Menu';
import { Body } from '@containers/Body';
import { Container } from '../containers/Container';
import { CardInscription } from '../containers/CardInscripcion';
import { useInscriptions } from '../hooks/useInscriptions';
import { Modal } from '../containers/Modal'
import '@styles/Entities.css';
import { FormInscriptions } from '../containers/FormInscriptions';

const Inscription = () => {
  const [students, actions, modalActions, atribs, not] = useInscriptions();
  return (
    <div className='entity'>
      <Header>
        <Title title='Inscriptions'/>
        {not.value && <span className={not.style}>{not.text}</span>}
      </Header>
      <Body>
        <Menu modalActions={modalActions}/>
        <Container>
        {students.map(item => <CardInscription
            item={item}
            modalActions={modalActions}
            actions={actions}
            atribs={atribs}
            key={item.id}/>)}
        </Container>
      </Body>
      {modalActions.modal &&
        <Modal>
          <FormInscriptions
            modalActions={modalActions}
            actions={actions}
            atribs={atribs}/>
        </Modal>
      }
    </div>
  );
}

export { Inscription };
