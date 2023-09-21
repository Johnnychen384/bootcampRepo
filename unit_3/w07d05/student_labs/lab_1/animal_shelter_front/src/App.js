import {useState, useEffect} from 'react'
import './App.css';
import Animal from "./components/Animal"
import Add from './components/Add'
import axios from "axios"
import Edit from './components/Edit';

function App() {
  const [animalArray, setAnimalArray] = useState([])

  const allAnimals = () => {
    axios.get('http://localhost:3000/animals').then(res => setAnimalArray(res.data))
  }

  const handleCreate = (data) => {
      axios.post('http://localhost:3000/animals/add', data).then(res => allAnimals())
  }

  const handleDelete = (id) => {
    axios.delete('http://localhost:3000/animals/delete/' + id).then(res => allAnimals())
  }

  const handleEdit = (data) => {
    axios.put('http://localhost:3000/animals/edit/' + data._id, data).then(res => allAnimals())
  }

  useEffect(() => {
    allAnimals()
  }, [])


  const animals = animalArray.map((animal, i) => <Animal key={i} animal={animal} handleDelete={handleDelete} handleEdit={handleEdit}/>)
  

  return (
    <>
      <h1 className='text-center my-3'>Animal Shelter</h1>
      <br />
      <div className='w-75 mx-auto text-center'>
        {<Add handleCreate={handleCreate}/>}
      </div>


      <div className='d-flex justify-content-around p-3 flex-wrap w-100'>
        {animals}
      </div>
    </>

    
  );
}

export default App;
