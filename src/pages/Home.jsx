import React from 'react';
import { ButtonLink } from '@components/ButtonLink';
import { MenuHome } from '@containers/MenuHome';
import { Title } from '../containers/Title';
import student from '@assets/persona.svg';
import career from '@assets/carrera.svg';
import inscription from '@assets/inscription.svg';
import '@styles/Home.css';

// Asignación de rutas a los links
const links = [
  { image: student, path: '/students', hin: 'Students'},
  { image: career, path: '/careers', hin: 'Careers'},
  { image: inscription, path: '/inscriptions', hin: 'Inscriptions'}
];

const Home = () => {
  return (
    <div className='home'>
      <Title>
        <h1 className='h1'>Crud to Api Rest in Spring Boot</h1>
      </Title>
      <MenuHome>
        {links.map( item => (<ButtonLink
          image={ item.image }
          path={item.path}
          hin={item.hin}
          key={item.path}/>
        ))}
      </MenuHome>
    </div>
  );
}

export { Home };
