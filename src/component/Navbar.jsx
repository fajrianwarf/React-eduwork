import { NavLink } from "react-router-dom";

function Navbar() {
    return(
        <nav className="navbar navbar-expand-lg navbar-light bg-primary">
            <div className="container-fluid">
                <NavLink exact className="navbar-brand" to="/">Task Eduwork</NavLink>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <NavLink exact activeClassName='text-danger' className="nav-link" to="/">Home</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/Task-1">Task 1</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/Task-2">Task 2</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/Task-3">Task 3</NavLink>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default Navbar;