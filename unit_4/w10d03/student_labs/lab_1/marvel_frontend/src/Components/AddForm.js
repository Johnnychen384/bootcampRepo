import {useState} from 'react'

const AddForm = (props) => {
    const [hero, setHero] = useState({name: '', age: 0, powers: '', location: ''})

    const handleChange = (event) => {
      setHero({...hero, [event.target.name]: event.target.value})
    }

    const handleSubmit = (event) => {
      event.preventDefault()
      props.handleCreate(hero)
    }

    return (
        <form onSubmit={handleSubmit}>
            <label htmlFor='name'>Name: </label>
            <input type='text' name="name" placeholder='Name Of Hero' onChange={handleChange}/>
            
            <label htmlFor='age'>Age: </label>
            <input type='number' name="age" placeholder='Age Of Hero' onChange={handleChange}/>
            
            <label htmlFor='powers'>Powers: </label>
            <input type='text' name="powers" placeholder='Powers Of Hero' onChange={handleChange}/>
           
            <label htmlFor='location'>location: </label>
            <input type='text' name="location" placeholder='Location Of Hero' onChange={handleChange}/>

            <input type='submit' />
        </form>
    )
}

export default AddForm