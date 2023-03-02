const API = 'http://192.168.8.3:8090/api/v2';

class InscriptionsService{
  async findAll(){
    const res = await fetch(`${API}/inscripcion`);
    return res;
  }

  async findById(id){
    const res = await fetch(`${API}/inscripcion/${id}`);
    return res;
  }

  save = async(data)=>{
    const res = await fetch(`${API}/inscripcion`, {
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify(data)
    });
    return res;
  }

  update = async(data)=>{
    const res = await fetch(`${API}/inscripcion/${data.id}`, {
      method: 'PUT',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify(data)
    });
    return res;
  }

  delete = async(id)=>{
    const res = await fetch(`${API}/inscripcion/${id}`,{
      method: 'DELETE'
    });
    return res;
  }
}

export { InscriptionsService };
