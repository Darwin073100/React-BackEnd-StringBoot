import { useState , useEffect} from 'react';
import { StudentsService } from '../service/StudentsService';

const service = new StudentsService();

const useStudents = () => {
  const [students, setStudents] = useState([]);
  const [student, setStudent] = useState({});
  const [modalType,setModalType] = useState({save:false, update: false});
  const [modal, setModal] = useState(false);
  const [not, setNot] = useState({});

  useEffect(() =>{
    findAll();
  },[student]);

  const findAll = async() =>{
    const res = await service.findAll()
    const data = await res.json();
    setStudents(data);
    console.log('peticion');
  }

  const findById = async(id) =>{
    const res = await service.findById(id)
    const item = await res.json();
    setStudent(item);
    console.log('peticion');
  }

  const save = async(data)=>{
    if(data.id === ''){
      notification(true, 'Verifica los campos', 'ntf-yellow');
      return
    }

    const res = await service.save(data);
    setStudent(await res.json());
    setStudents(students, student);
    setStudent({});
    if(res.status === 201){
      notification(true, 'Registro Guardado', 'ntf-green');
    }else{
      notification(true, `¡Ops ha ocurrido un error! ${res.status} `, 'ntf-red');
    }
  }

  const update = async(data)=>{
    const res = await service.update(data);
    const item = await res.json();
    setStudents(students,item);
    setStudent({});
    if(res.status === 200){
      notification(true, 'Registro Actualizado', 'ntf-green');
    }else{
      notification(true, `¡Ops ha ocurrido un error! ${res.status} `, 'ntf-red');
    }
  }

  const deleteById = async(id)=>{
    const res = await service.delete(id);
    setStudent({1:1})
    if(res.status === 200){
      notification(true, 'Registro Eliminado', 'ntf-green');
    }else{
      notification(true, `¡Ops ha ocurrido un error! ${res.status} `, 'ntf-red');
    }
  }

  const isModal = ()=>{
    setModal(!modal)
  }

  const modalSave = ()=>{
    setModalType({save: true, update:false});
  }
  const modalUpdate = ()=>{
    setModalType({save: false, update:true});
  }

  const notification = (value, text, style)=>{
    setNot({value: value, text: text, style: style});
    console.log(not)
    setTimeout(()=>(
      setNot({value: false, text: ''}),
      console.log(not)
    ),3000);
  }

  const actions = {
    findAll,
    findById,
    save,
    update,
    deleteById
  }

  const atribs = {
    setStudent,
    student,
  };

  const modalActions = {
    modal,
    modalSave,
    modalUpdate,
    modalType,
    isModal,
    students
  }

  return [
    students,
    actions,
    modalActions,
    atribs,
    not
  ];
}

export { useStudents };
