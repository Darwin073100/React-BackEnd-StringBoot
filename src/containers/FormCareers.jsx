import React, { useRef } from 'react';
import { Button } from '../components/Button';
import '@styles/FormStudent.css';

const FormCareers = ({modalActions, actions, atribs}) => {
  const form = useRef(null);

  const handleSubmit = (e)=>{
    e.preventDefault();
    const formData = new FormData(form.current);

    let data = {
      nombre:formData.get('nombre'),
      alias:formData.get('alias'),
      creditos:formData.get('creditos'),
      servicio: formData.get('servicio'),
      residencia:formData.get('residencia'),
    }

    if(modalActions.modalType.save == true){
      console.log('save')
      actions.save(data);
    } else if(modalActions.modalType.update == true){
      console.log('update')
      data={...data, id:formData.get('id')};
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

    inputs[0].value=atribs.career.id;
    inputs[1].value=atribs.career.nombre;
    inputs[2].value=atribs.career.alias;
    inputs[3].value=atribs.career.creditos;
    inputs[4].value=atribs.career.servicio;
    inputs[5].value=atribs.career.residencia;
  }

  return (
    <form className='form-entity' ref={form}>
      <div className='form'>
        <div className='form-header'>
          <h2>Careers</h2>
        </div>
        <div className='form-body'>
          {modalActions.modalType.save === !true &&
            <input placeholder='Number of control' type="text" name='id' id='txtId'/>
          }
          <input placeholder='Write your name' type="text" name='nombre'/>
          <input placeholder='Write your last name' type="text" name='alias' />
          <input placeholder='Write your creditos' type="number" name='creditos'/>
          <input placeholder='Write your servicio' type="text" name='servicio'/>
          <input placeholder='Write your age' type="text" name='residencia'/>
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

export { FormCareers };
