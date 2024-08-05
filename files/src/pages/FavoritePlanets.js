import FavoritePlanetList from "../Components/FavoritePlanetList";
import AddPlanet from "../Components/AddPlanet";
import { favoritePlanets } from "../data";
import { useState } from "react";

const FavoritePlanets = () => {
    const [isAdding, setIsAdding] = useState(false);
    const [, updateState] = useState();

    function updateParentState() {
       updateState({});
    };

    function formArea() {
        if(isAdding)
        {
            return (
                <div>
                    <button className=" btn ms-5 p-3 rounded button1" onClick={insertForm}>Close Menu</button>
                    <AddPlanet updateParentState={updateParentState}/>
                </div>
            );
        }
        else{
            return (
                <button className=" btn ms-5 p-3 rounded button1" onClick={insertForm}>Add Item</button>
            );
        }
    }

    function insertForm() {
        if(isAdding)
        {
            setIsAdding(false);
        }
        else
        {
            setIsAdding(true);
        }
    }

    return (
        <div>
            <div className="row p-3">
                <div className="col-lg-12 pt-3 text-center">
                    <h1>Favorite Planet List</h1>
                    <h5>Here you can customize your own favorite planet list!</h5>
                </div>
            </div>
            <hr></hr>
            <div className="row">
                <div className="col-lg-2"></div>
                <div className="col-lg-8">
                    <FavoritePlanetList />
                    {formArea()}
                </div>
                <div className="col-lg-2"></div>
            </div>
        </div>
    )
};

export default FavoritePlanets;