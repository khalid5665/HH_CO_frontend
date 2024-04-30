simport React from "react";
import { Link, useNavigate } from "react-router-dom";
const Nav = () => {
    const auth = localStorage.getItem('user');
    const navigate = useNavigate();
    const logout = () => {
        localStorage.clear();
        navigate('./signup')
    }
    return (
        <div>
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSQ349InLFB_kohyD9Ah8bYgCQz4YNuuxXAbD_8OIDp7w&s" alt="logo" className="logo" />
            {
                auth ?

                    <ul className="nav-ul">
                        <li><Link to='/events'>Events</Link></li>
                        <li><Link to='/add'>Add Events</Link></li>
                        <li><Link onClick={logout} to='/signup'>Logout ({JSON.parse(auth).name})</Link></li>
                    </ul>
                    :
                    <>
                    <h2 className="company">Happy Happening Co.</h2>
                    <ul className="nav-ul nav-right">
                        <li><Link to='/'>Home</Link></li>
                        <li><Link to='/about us'>About us</Link></li>
                        <li><Link to='/signup'>Sign Up</Link></li>
                        <li><Link to='/login'>Login</Link></li>
                    </ul>
                    </>
            }
            

        </div>
    )
}

export default Nav;
