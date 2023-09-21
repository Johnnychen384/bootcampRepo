import React, { useState, useEffect } from 'react'

import Add from './components/Add'
import Edit from './components/Edit'

import axios from 'axios'

const App = () => {
  const [people, setPeople] = useState([])


  const getPeople = () => {
    axios.get('http://localhost:8000/api/contacts')
    .then((res) => {
      console.log(res.data)
      setPeople(res.data)
    })
  }

  const handleCreate = (addPerson) => {
    axios.post('http://localhost:8000/api/contacts', addPerson)
    .then((res) => {
      console.log(res)
      getPeople()
    })
  }



  const handleDelete = (event) => {
    axios.delete('http://localhost:8000/api/contacts/' + event.target.value)
    .then((res) => {
      console.log(res.data)
      getPeople()
    })
  }

  const handleUpdate = (editPerson) => {
    axios.put('http://localhost:8000/api/contacts/' + editPerson.id, editPerson)
    .then((res) => {
      console.log(editPerson)
      getPeople()
    })
  }

  useEffect(() => {
    getPeople()
  }, [])


  return (
    <>
      <h1>App</h1>
      <Add handleCreate={handleCreate} />
      <div className="people">
        {people.map((person) => {
          return (
            <div className="person" key={person.id}>
              <h4>Name: {person.name}</h4>
              <h4>Age: {person.age}</h4>
              <Edit handleUpdate={handleUpdate} id={person.id} person={person} />
              <button onClick={handleDelete} value={person.id}>
                X
              </button>
            </div>
          )
        })}
      </div>
    </>
  )
}

export default App
