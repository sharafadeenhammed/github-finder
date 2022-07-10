import {Link} from "react-router-dom"
import {FaGithub} from "react-icons/fa"
import PropTypes from "prop-types"


function Navbar({title}) {
  return (
    <nav className="navbar">
        <div>
            <FaGithub className="logo"/>
            <Link to={"/"} className="header-title" >{title}</Link> 
        </div>
        <div className="nav-links">
            <Link className="link" to="/">HOME</Link>
            <Link className="link" to="/about">ABOUT</Link>

        </div>
    </nav>
  )
}

Navbar.defaultProps={
    title:"Gitbub Finder"
}
Navbar.propTypes={
    title:PropTypes.string
}
export default Navbar