import {useState} from "react"

const Add = (props) => {
    const [animal, setAnimal] = useState({name: '', species: '', breed: '', age: 0})
    
    const handleChange = (e) => {
        setAnimal({...animal, [e.target.name]: e.target.value})
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        props.handleCreate(animal)
    }

    return (
        <main className="form-signin w-100 m-auto">
            <form onSubmit={handleSubmit}>
                <h1 className="h3 mb-3 fw-normal">Please Add An Animal</h1>

                <div className="form-floating">
                    <input type="text" className="form-control" id="floatingInput" placeholder="Name" name="name" onChange={handleChange}/>
                    <label htmlFor="floatingInput">Name</label>
                </div>
                <div className="form-floating">
                    <input type="text" className="form-control" id="floatingPassword" placeholder="Species" name="species" onChange={handleChange}/>
                    <label htmlFor="floatingPassword">Species</label>
                </div>

                <div className="form-floating">
                    <input type="text" className="form-control" id="floatingPassword" placeholder="Breed" name="breed" onChange={handleChange}/>
                    <label htmlFor="floatingPassword">Breed</label>
                </div>
                
                <div className="form-floating">
                    <input type="number" className="form-control" id="floatingPassword" placeholder="Age" name="age" onChange={handleChange}/>
                    <label htmlFor="floatingPassword">Age</label>
                </div>

                <button className="w-100 btn btn-lg btn-primary" type="submit">Add</button>
            </form>
        </main>
    )
}


export default Add