import React from 'react';
import { Title } from '@containers/Title';
import { Header } from '@containers/Header';
import { Menu } from '@containers/Menu';
import { Body } from '@containers/Body';
import { Container } from '../containers/Container';
import { useCareers } from '../hooks/useCareers';
import '@styles/Entities.css';
import { CardCareer } from '../containers/CardCareer';
import { FormCareers } from '../containers/FormCareers';
import { Modal} from '../containers/Modal'

const Career = () => {
  const [students, actions, modalActions, atribs, not] = useCareers();
  return (
    <div className='entity'>
      <Header>
        <Title title='Careers'/>
        {not.value && <span className={not.style}>{not.text}</span>}
      </Header>
      <Body>
        <Menu modalActions={modalActions} />
        <Container>
          {students.map(item => <CardCareer
            item={item}
            modalActions={modalActions}
            actions={actions}
            atribs={atribs}
            key={item.id}/>)
          }
        </Container>
      </Body>
      {modalActions.modal &&
        <Modal>
          <FormCareers
            modalActions={modalActions}
            actions={actions}
            atribs={atribs}/>
        </Modal>
      }
    </div>
  );
}

export { Career };
