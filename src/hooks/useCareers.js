import { useState , useEffect} from 'react';
import { CareersService } from '../service/CareersService';

const service = new CareersService();

const useCareers = () => {
  const [careers, setCareers] = useState([]);
  const [career, setCareer] = useState({});
  const [modalType,setModalType] = useState({save:false, update: false});
  const [modal, setModal] = useState(false);
  const [not, setNot] = useState({});

  useEffect(() =>{
    findAll();
  },[career]);

  const findAll = async() =>{
    const res = await service.findAll()
    const data = await res.json();
    setCareers(data);
    console.log('peticion');
  }

  const findById = async(id) =>{
    const res = await service.findById(id)
    const item = await res.json();
    setCareer(item);
    console.log('peticion');
  }

  const save = async(data)=>{
    if(data.id === ''){
      notification(true, 'Verifica los campos', 'ntf-yellow');
      return
    }

    const res = await service.save(data);
    setCareer(await res.json());
    setCareers(careers, career);
    setCareer({});
    if(res.status === 201){
      notification(true, 'Registro Guardado', 'ntf-green');
    }else{
      notification(true, `¡Ops ha ocurrido un error! ${res.status} `, 'ntf-red');
    }
  }

  const update = async(data)=>{
    const res = await service.update(data);
    const item = await res.json();
    setCareers(careers, item);
    setCareer({});
    if(res.status === 200){
      notification(true, 'Registro Actualizado', 'ntf-green');
    }else{
      notification(true, `¡Ops ha ocurrido un error! ${res.status} `, 'ntf-red');
    }
  }

  const deleteById = async(id)=>{
    const res = await service.delete(id);
    setCareer({1:1})
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
    setCareer,
    career,
  };

  const modalActions = {
    modal,
    modalSave,
    modalUpdate,
    modalType,
    isModal,
    careers
  }

  return [
    careers,
    actions,
    modalActions,
    atribs,
    not
  ];
}

export { useCareers };
