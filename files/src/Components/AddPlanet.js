import { favoritePlanets } from "../data";
import { useState } from "react";

export default function AddPlanet({updateParentState}) {
    let nextId = favoritePlanets.length;
    const [userForm, setUserForm] = useState({
        id: nextId,
        name: "",
        description: ""
    })
    //const [, updateState] = useState();

    const onSubmit = (e) => {
        e.preventDefault();
        favoritePlanets.push(userForm);
        setUserForm({
            id: nextId,
            name: "",
            description: ""
        });
        updateParentState();
    };

    const inputsHandler = (e) => {
        setUserForm((prevNext) => ({
          ...prevNext,
          [e.target.name]: e.target.value,
        }));
      };

    return (
        <div>
            <div className="row">
                <div className="col-lg-2"></div>
                <div className="col-lg-8">
                    
                    <h5>Add a planet to the favorite planet list, giving a name and reason for liking it.</h5>
                    <form onSubmit={onSubmit}>
                        
                        <div className=" border1 rounded p-3 mt-2 mb-3">
                            <div className="mb-3">
                                <label className="form-label">Name:</label>
                                <input
                                type="text"
                                className="form-control w-25"
                                name="name"
                                id="name"
                                value={userForm.name}
                                onChange={inputsHandler}
                                />
                            </div>
                            <div className="mb-3">
                                <label className="form-label">Why you like it:</label>
                                <input
                                type="text"
                                className="form-control"
                                name="description"
                                id="description"
                                value={userForm.description}
                                onChange={inputsHandler}
                                />
                            </div>
                        </div>
                        <div className="mb-3">
                            <button type="submit" className="btn rounded button1">
                                Submit
                            </button>
                        </div>
                    </form>
                </div>
                <div className="col-lg-2"></div>
            </div>
        </div>
    )
};