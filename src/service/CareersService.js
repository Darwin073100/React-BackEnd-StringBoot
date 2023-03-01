const API = 'http://192.168.8.3:8090/api/v2';

class CareersService{
  async findAll(){
    const res = await fetch(`${API}/carrera`);
    return res;
  }

  async findById(id){
    const res = await fetch(`${API}/carrera/${id}`);
    return res;
  }

  save = async(data)=>{
    const res = await fetch(`${API}/carrera`, {
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify(data)
    });
    return res;
  }

  update = async(data)=>{
    const res = await fetch(`${API}/carrera/${data.id}`, {
      method: 'PUT',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify(data)
    });
    return res;
  }

  delete = async(id)=>{
    const res = await fetch(`${API}/carrera/${id}`,{
      method: 'DELETE'
    });
    return res;
  }
}

export { CareersService };
