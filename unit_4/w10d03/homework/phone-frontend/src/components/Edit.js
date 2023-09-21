import {useState} from "react"

const Edit = (props) => {
    const [p, setP] = useState({...props.p})

    const handleChange = (event) => {
        setP({...p, [event.target.name]: event.target.value})
    }
  
    const handleSubmit = (event) => {
        event.preventDefault()
        props.handleEdit(p)
    }

    return (
        <>
            <form onSubmit={handleSubmit}>
                <input type='text' name="name" value={p.name} onChange={handleChange}/>
                <input type='number' name="number" value={p.number} onChange={handleChange}/>
                <input type="submit"/>
            </form> 
             
        </>
    )
}

export default Edit