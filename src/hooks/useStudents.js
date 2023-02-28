import { useState , useEffect} from 'react';
import { StudentsService } from '../service/StudentsService';

const service = new StudentsService();

const useStudents = () => {
  const [students, setStudents] = useState([]);
  const [student, setStudent] = useState({});
  const [modalType,setModalType] = useState({save:false, update: false});
  const [modal, setModal] = useState(false);

  useEffect(() => {
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
  }

  const save = async(data)=>{
    const res = await service.save(data);
    setStudent(await res.json());
    setStudents(students, student);
    setStudent({});
  }

  const update = async(data)=>{
    const res = await service.update(data);
    const item = await res.json();
    setStudents(students,item);
    setStudent({});
  }

  const deleteById = async(id)=>{
    const res = await service.delete(id);
    setStudent({1:1})
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
  ];
}

export { useStudents };
