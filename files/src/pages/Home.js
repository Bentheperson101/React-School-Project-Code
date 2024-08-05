import PlanetCards from "../Components/PlanetCards";

const Home = () => {
    return (
        <div>
            <div className="row p-3">
                <div className="col-lg-12 pt-3 text-center">
                    <h1>Space!</h1>
                    <p>I really liked space growing up. So much so that I originally wanted to be an astronaut!</p>
                    <h3>Explore the other links!</h3>
                </div>
            </div>
            <hr></hr>
            <div className="row p-2">
                <div className="col-lg-2"></div>
                <div className="col-lg-8">
                    <h2 className="text-center">The Planets:</h2>
                    <PlanetCards/>
                </div>
                <div className="col-lg-2"></div>
            </div>
        </div>
    )
};

export default Home;