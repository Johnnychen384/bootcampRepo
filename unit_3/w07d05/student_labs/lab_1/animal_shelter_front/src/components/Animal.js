import Edit from "./Edit"

const Animal = (props) => {
    return (
        <>
            <div className="card puppycontainer m-2 w-25">
                <img src="https://www.dogtime.com/assets/uploads/2011/03/puppy-development-1280x720.jpg" className="card-img-top" alt="..."/>
                <div className="card-body">
                    <h5 className="card-title">Name: {props.animal.name}</h5>
                    <p className="card-text">Species: {props.animal.species}</p>
                    <p className="card-text">Breed: {props.animal.breed}</p>
                    <p className="card-text">Age: {props.animal.age}</p>
                    <a className="btn btn-primary" onClick={() => {
                      props.handleDelete(props.animal._id)
                    }}>Found a new home</a>
                </div>
                <div className="mx-auto">
                    <Edit animal={props.animal} handleEdit={props.handleEdit}/>

                </div>
            </div>
        </>
    )
}


export default Animal