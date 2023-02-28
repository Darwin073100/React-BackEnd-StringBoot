import { useState , useEffect} from 'react';

const API = 'http://192.168.8.3:8090/api/v2';
const useStudents = () => {
  const [students, setStudents] = useState([]);

  const findAll = async() =>{
    const res = await fetch(`${API}/persona`);
    const data = await res.json();
    setStudents(data);
  }

  useEffect(() => {
    findAll();
  },[]);

  return [students];
}

export { useStudents };
