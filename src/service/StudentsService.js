const API = 'http://192.168.8.3:8090/api/v2';

class StudentsService{
  async findAll(){
    const res = await fetch(`${API}/persona`);
    return res;
  }

  async findById(id){
    const res = await fetch(`${API}/persona/${id}`);
    return res;
  }

  save = async(data)=>{
    const res = await fetch(`${API}/persona`, {
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify(data)
    });
    return res;
  }

  update = async(data)=>{
    const res = await fetch(`${API}/persona/${data.id}`, {
      method: 'PUT',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify(data)
    });
    return res;
  }

  delete = async(id)=>{
    const res = await fetch(`${API}/persona/${id}`,{
      method: 'DELETE'
    });
    return res.body;
  }
}

export { StudentsService };
