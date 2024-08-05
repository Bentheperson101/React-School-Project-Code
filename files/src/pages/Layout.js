import { Outlet, Link } from "react-router-dom";

const Layout = () => {
    return(
        <>
            <nav class="navbar navbar-expand-sm navbar-dark">
              <div class="container-fluid">
                <Link className="navbar-brand" to="/">
                    <img src="logo.png" alt="Logo" style={{width: 40}}></img>
                    <b>   BenjiWeb</b>
                </Link>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#collapsibleNavbar">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="collapsibleNavbar">
                    <ul class="navbar-nav">
                        <li class="nav-item">
                            <Link className="nav-link ms-5" to="/">Home</Link>
                        </li>
                        <li class="nav-item">
                            <Link  className="nav-link ms-3" to="/FavoritePlanets">Favorite Planets</Link>
                        </li>
                        <li class="nav-item">
                            <Link  className="nav-link ms-3" to="/News">News</Link>
                        </li>
                        <li class="nav-item">
                            <Link  className="nav-link ms-3" to="/Contact">Contact Us</Link>
                        </li>
                    </ul>
                </div>
              </div>
            </nav>

            <Outlet />
        </>
    )
};

export default Layout;