import React from "react"

const Question = (props) => {
    // state to determine if answer should be hidden
    const [isItHidden, setIsItHidden] = React.useState(props.bool)
    
    // function to change isItHidden state
    const toggle = () => {
        // props.setState(prev => !prev)
        setIsItHidden(prev => !prev)
    }

    // variable that contains condition for if Answer element should be shown
    let answer = isItHidden ? `Answer: ${props.question[0].answer}` : <span></span>

    return (
        <div className="reveal">  
            <h3>Catergory: {props.question[0].category.title}</h3>
            <h4>Points: {props.question[0].value}</h4>
            <h4>Question: {props.question[0].question}?</h4>

            <button className="revealbtn" onClick={() => toggle()}>Click to Reveal Answer</button>

            <h3>{answer}</h3>
        </div>
    )
}

export default Question