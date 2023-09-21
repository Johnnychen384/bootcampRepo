import {useState} from 'react'


const Episode = (props) => {
    const [reveal, setReveal] = useState(false)
    
    const toggle = () => {
        setReveal(prev => !prev)
    }
    
    let detail = reveal ? <p class="card-text">{props.episode.created}</p> : null  

    return (
        <>
            <div class="card w-25 m-2 rounded">
                <div class="card-body">
                    <h5 class="card-title">{props.episode.name}</h5>
                    <p class="card-text">{props.episode.air_date}
                    </p>
                    
                    <p class="card-text">
                        {props.episode.episode}
                    </p>

                    <button onClick={toggle}>Show</button>
                    {detail}
                </div>
            </div>
        </>
    )
}

export default Episode