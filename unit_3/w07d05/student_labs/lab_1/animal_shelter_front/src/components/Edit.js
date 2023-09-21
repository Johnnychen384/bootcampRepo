import {useState} from 'react'

const Edit = (props) => {
  const [animal, setAnimal] = useState({...props.animal})

  const handleChange = (e) => {
    setAnimal({...animal, [e.target.name]: e.target.value})
   }

   const handleSubmit = (e) => {
      e.preventDefault()
      props.handleEdit(animal)
   }

  return(
    <>
      <details>
        <form onSubmit={handleSubmit} className="my-3">
          <label htmlFor='name'>Name: </label>
          <input type='text' name='name' onChange={handleChange} value={animal.name}/>
          <br/>
          <br/>
          <label htmlFor='species'>Species: </label>
          <input type='text' name='species' onChange={handleChange} value={animal.species}/>
          <br/>
          <br/>
          <label htmlFor='breed'>Breed: </label>
          <input type='text' name='breed' onChange={handleChange} value={animal.breed}/>
          <br/>
          <br/>
          <label htmlFor='age'>Age: </label>
          <input type='number' name='age' onChange={handleChange} value={animal.age}/>
          <br/>
          <br/>
          <input type="submit"/>
        </form>
      </details>
    </>
  )
}

export default Edit