import { planets } from "../data";

export default function PlanetCards() {

    const listItem = planets.map(planet=>
        <div >
            <div class="card d-flex flex-row">
                <img src={planet.imageId} class="card-img-top w-25 m-1 rounded" alt="..."></img>
                <div class="card-body">
                    <h5 class="card-title">{planet.name}</h5>
                    <p class="card-text">{planet.description}</p>
                </div>
            </div>
        </div>
    );

    return <div className="p-4">{listItem}</div>;
};