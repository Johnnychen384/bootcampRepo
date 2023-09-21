

const Person = (props) => {
    return (
        <>
            <h1>Name: {props.person.name}</h1>
            <h2>Age: {props.person.age}</h2>

        </>
    )
}


export default Person