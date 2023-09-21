import {useState} from 'react'

const Form = (props) => {
    const [phone, setPhone] = useState({name: '', number: 0})

    const handleChange = (event) => {
      setPhone({...phone, [event.target.name]: event.target.value})
    }

    const handleSubmit = (event) => {
      event.preventDefault()
      props.handleCreate(phone)
    }

    return(
        <>
            <form onSubmit={handleSubmit}>
                <label htmlFor='name'>Name: </label>
                <input type='text' name="name" placeholder='Name' onChange={handleChange}/>
                
                <label htmlFor='number'>Number: </label>
                <input type='number' name="number" placeholder='Number' onChange={handleChange}/>

                <input type='submit' />
            </form>
        
        </>
    )
}

export default Form