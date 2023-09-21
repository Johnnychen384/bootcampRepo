import React from "react"

const History = (props) => {

    // state to determine if answer should be hidden
    const [isItHidden, setIsItHidden] = React.useState(props.bool)
    
    // function to change isItHidden state
    const toggle = () => {
        // props.setState(prev => !prev)
        setIsItHidden(prev => !prev)
    }

    // variable that contains condition for if Answer element should be shown
    let answer = isItHidden ? `Answer: ${props.question.answer}` : <span></span>
    

    return (
        <div className="reveal">  
            <h3>Catergory: History</h3>
            <h4>Points: {props.question.value}</h4>
            <h4>Question: {props.question.question}?</h4>

            <button className="revealbtn" onClick={() => toggle()}>Click to Reveal Answer</button>

            <h3>{answer}</h3>
        </div>
    )
}

export default History