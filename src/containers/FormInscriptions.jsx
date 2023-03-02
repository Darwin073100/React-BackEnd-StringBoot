import React, { useRef } from 'react';
import { Button } from '../components/Button';
import '@styles/FormStudent.css';

const FormInscriptions = ({modalActions, actions, atribs}) => {
  const form = useRef(null);

  const handleSubmit = (e)=>{
    e.preventDefault();
    const formData = new FormData(form.current);

    let data = {
      idPersona:formData.get('personaId'),
      idCarrera:formData.get('carreraId'),
    }

    if(modalActions.modalType.save == true){
      console.log('save')
      actions.save(data);
    } else if(modalActions.modalType.update == true){
      console.log('update')
      data = {...data,
        id:formData.get('id'),
        fecha:formData.get('fecha')
      };
      actions.update(data);
    }
    close(e);
  }

  const clearInputs = (e)=>{
    e.preventDefault();
    const inputs = document.querySelectorAll('input');
    inputs.forEach(i => i.value='');
  }

  const close = (e)=>{
    e.preventDefault();
    modalActions.isModal();
  }

  const fullInputs =(e)=>{
    e.preventDefault();
    const inputs = document.querySelectorAll('input');
    // Modificamos el formato de la fecha que viene de la API
    let fecha = new Date(atribs.inscription.fecha);
    fecha.setMinutes(fecha.getMinutes() - fecha.getTimezoneOffset());
    console.log(fecha.toISOString().slice(0,16));

    inputs[0].value=atribs.inscription.id;
    inputs[1].value=atribs.inscription.idPersona;
    inputs[2].value=atribs.inscription.idCarrera;
    inputs[3].value=fecha.toISOString().slice(0,16);
  }

  return (
    <form className='form-entity' ref={form}>
      <div className='form'>
        <div className='form-header'>
          <h2>Inscriptions</h2>
        </div>
        <div className='form-body'>
          {modalActions.modalType.save === !true &&
            <input placeholder='Id' type="text" name='id' id='txtId'/>
          }
          <input placeholder='Write id of the person' type="text" name='personaId'/>
          <input placeholder='Write id of the career' type="text" name='carreraId' />
          {modalActions.modalType.save === !true &&
            <input placeholder='Write the date' type="datetime-local" name='fecha'/>
          }
        </div>
        <div className='form-footer'>
          <Button style='btn-blue' text='Ok' event={handleSubmit} />
          {modalActions.modalType.update == true &&
            <Button style='btn-green' text='Llenar' event={fullInputs}/>
          }
          <Button style='btn-yellow' text='Clear Inputs' event={clearInputs}/>
          <Button style='btn-red' text='Close' event={close}/>
        </div>
      </div>
    </form>
  );
}

export { FormInscriptions };
