import {useState} from 'react'
import EditForm from './EditForm'

const Hero = (props) => {
    const [editIt, setEditIt] = useState(false)

    const toggle = () => {
        setEditIt(prev => !prev)
    }

    let stan = (
        <>
            <h1>{props.hero.name}</h1>
            <button onClick={() => props.handleDelete(props.hero.id)}>Delete</button>
            <button onClick={toggle}>Edit</button>
        </>
    )

    return (
        <>
            {editIt ? <EditForm hero={props.hero} handleDelete={props.handleDelete} handleEdit={props.handleEdit} toggle={toggle}/> : stan}
            

        </>
    )
}

export default Hero