import React, { useRef } from 'react';
import { Button } from '../components/Button';
import '@styles/FormStudent.css';

const FormStudents = ({modalActions, actions, atribs}) => {
  const form = useRef(null);

  const handleSubmit = (e)=>{
    e.preventDefault();
    const formData = new FormData(form.current);

    const data = {
      id:formData.get('id'),
      nombre:formData.get('nombre'),
      apellidos:formData.get('apellidos'),
      email:formData.get('email'),
      address: formData.get('address'),
      edad:formData.get('edad'),
    }

    if(modalActions.modalType.save == true){
      console.log('save')
      actions.save(data);
    } else if(modalActions.modalType.update == true){
      console.log('update')
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

    inputs[0].value=atribs.student.id;
    inputs[1].value=atribs.student.nombre;
    inputs[2].value=atribs.student.apellidos;
    inputs[3].value=atribs.student.email;
    inputs[4].value=atribs.student.address;
    inputs[5].value=atribs.student.edad;
  }

  return (
    <form className='form-entity' ref={form}>
      <div className='form'>
        <div className='form-header'>
          <h2>Students</h2>
        </div>
        <div className='form-body'>
          <input placeholder='Number of control' type="text" name='id' id='txtId'/>
          <input placeholder='Write your name' type="text" name='nombre' id='txtNombre' />
          <input placeholder='Write your last name' type="text" name='apellidos' id='txtApellido' />
          <input placeholder='Write your email' type="email" name='email' id='txtEmail' />
          <input placeholder='Write your address' type="text" name='address' id='txtAddress'/>
          <input placeholder='Write your age' type="number" name='edad' id='txtEdad'/>
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

export { FormStudents };
