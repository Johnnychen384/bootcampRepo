import {useState} from 'react'
import { isCompositeComponent } from 'react-dom/test-utils'

const Character = (props) => {

    const [reveal, setReveal] = useState(props.reveal)
    
    const toggle = () => {
        setReveal(prev => !prev)
    }
    
    let detail = reveal ? <p class="card-text">{props.character.created}</p> : null  

    return (
        <>
            <div class="card m-2 rounded">
                <img src={props.character.image} class="card-img-top" alt="..." />
                <div class="card-body">
                    <h5 class="card-title">{props.character.name}</h5>
                    <p class="card-text">{props.character.species}
                    </p>
                    
                    <p class="card-text">
                        {props.character.status}
                    </p>
                    <button onClick={toggle}>Show</button>
                    {detail}
                </div>
            </div>
        </>
    )
}

export default Character