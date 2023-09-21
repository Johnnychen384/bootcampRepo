import {useState} from 'react'

const EditForm = (props) => {
    const [hero, setHero] = useState({...props.hero})

    const handleChange = (event) => {
      setHero({...hero, [event.target.name]: event.target.value})
    }

    const handleSubmit = (event) => {
      event.preventDefault()
      props.handleEdit(hero)
      props.toggle()
    }

    return (
        <>
            <form onSubmit={handleSubmit}>
                <input type='text' name='name' value={hero.name} onChange={handleChange}/>
                <button onClick={() => props.handleDelete(props.hero.id)}>Delete</button>
                <input type='submit'/>
            </form>
        </>
    )
}

export default EditForm