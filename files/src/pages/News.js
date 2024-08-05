const News = () => {
    return (
        <div>
            <div className="row p-3">
                <div className="col-lg-12 pt-3 text-center">
                    <h1>Space News</h1>
                    <h5>Here's some new stuff about space</h5>
                </div>
            </div>
            <hr></hr>
            <div className="row">
                <div className="col-lg-2"></div>
                <div className="col-lg-8">
                    <h2 className="mt-2">News from NASA:</h2>
                    <br></br>
                    <div className="border1 rounded p-3">
                        <h3 className="text-center">Slovenia Signs Artemis Accords, Joins Pursuit of Safer Space</h3>
                        <p>
                            <b>Quote from the article:</b><br></br>
                            "NASA and Slovenia affirmed their cooperation in future space endeavors on Friday as 
                            Slovenia became the 39th country to sign the Artemis Accords. The signing certified 
                            Slovenia’s commitment to pursue safe and sustainable exploration of space for the benefit 
                            of humanity and took place during a U.S.-Slovenia strategic dialogue in Ljubljana, 
                            Slovenia, at the Ministry of Foreign Affairs Offices." - the article
                            <br></br>
                            <br></br>
                            <i>Read the rest at the source using the link at the bottom of the page</i>
                        </p>
                        <img className="w-50 mx-auto d-block rounded" src="https://www.nasa.gov/wp-content/uploads/2024/04/slovenia.jpg" alt="article highlight"></img>
                            <br></br>
                            <p className="text-center"><i>Image taken from the article</i></p>
                    </div>
                    <br></br>
                    <a href="https://www.nasa.gov/news-release/slovenia-signs-artemis-accords-joins-pursuit-of-safer-space/" className=" rounded p-2 mt-5 mb-5 button1">Read it</a>
                </div>
                <div className="col-lg-2"></div>
            </div>
        </div>
    )
};

export default News;