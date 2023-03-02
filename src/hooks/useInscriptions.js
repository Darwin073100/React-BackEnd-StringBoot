import { useState , useEffect} from 'react';
import { InscriptionsService } from '../service/InscriptionsService';

const service = new InscriptionsService();

const useInscriptions = () => {
  const [inscriptions, setInscriptions] = useState([]);
  const [inscription, setInscription] = useState({});
  const [modalType,setModalType] = useState({save:false, update: false});
  const [modal, setModal] = useState(false);
  const [not, setNot] = useState({});

  useEffect(() =>{
    findAll();
  },[inscription]);

  const findAll = async() =>{
    const res = await service.findAll()
    const data = await res.json();
    setInscriptions(data);
    console.log('peticion');
  }

  const findById = async(id) =>{
    const res = await service.findById(id)
    const item = await res.json();
    setInscription(item);
    console.log('peticion');
  }

  const save = async(data)=>{
    const res = await service.save(data);
    setInscription(await res.json());
    setInscriptions(inscriptions, inscription);
    setInscription({});
    if(res.status === 201){
      notification(true, 'Registro Guardado', 'ntf-green');
    }else{
      notification(true, `¡Ops ha ocurrido un error! ${res.status} `, 'ntf-red');
    }
  }

  const update = async(data)=>{
    const res = await service.update(data);
    const item = await res.json();
    setInscriptions(inscriptions,item);
    setInscription({});
    if(res.status === 200){
      notification(true, 'Registro Actualizado', 'ntf-green');
    }else{
      notification(true, `¡Ops ha ocurrido un error! ${res.status} `, 'ntf-red');
    }
  }

  const deleteById = async(id)=>{
    const res = await service.delete(id);
    setInscription({1:1})
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
    setInscription,
    inscription,
  };

  const modalActions = {
    modal,
    modalSave,
    modalUpdate,
    modalType,
    isModal,
    inscriptions
  }

  return [
    inscriptions,
    actions,
    modalActions,
    atribs,
    not
  ];
}

export { useInscriptions };
