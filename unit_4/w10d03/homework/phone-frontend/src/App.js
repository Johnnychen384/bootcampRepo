import logo from './logo.svg';
import './App.css';
import axios from 'axios';
import {useState, useEffect} from 'react'
import Form from './components/Form'
import Edit from './components/Edit'

function App() {
  const [phone, setPhone] = useState([])

  const getphone = () => {
    axios.get('http://localhost:8000/api/phone')
    .then(res => setPhone(res.data))
    .catch(err => console.log(err))
  }

  const handleCreate = (data) => {
    axios.post('http://localhost:8000/api/phone', data)
    .then(res => getphone())
    .catch(err => console.log(err))
  }

  const handleDelete = (id) => {
    axios.delete('http://localhost:8000/api/phone/' + id)
    .then(res => getphone())
    .catch(err => console.log(err))
  }

  const handleEdit = (data) => {
    axios.put('http://localhost:8000/api/phone/' + data.id, data)
    .then(res => getphone())
    .catch(err => console.log(err))
  }


  useEffect(() => {
    getphone()
  }, [])

  return (
    <>
      <Form handleCreate={handleCreate}/>

      {phone.map(p => {
        return (
          <>
            <div key={p.id}>
              <h1>Name: {p.name}</h1>
              <p>Phone Number: {p.number}</p>
              <button onClick={() => handleDelete(p.id)}>Delete</button>
              <details>
                <summary>
                  <Edit handleEdit={handleEdit} p={p}/>
                </summary>
              </details>
             
              
            </div>
            
          
          </>
        )
      })}

    </>
  )
}

export default App;
