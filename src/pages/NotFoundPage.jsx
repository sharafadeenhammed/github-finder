import {FaHome} from "react-icons/fa"
import {Link} from "react-router-dom"
function NotFoundPage() {
  return (
    <div style={{textAlign:"center"}}>
        <h1 className="about-header">Oops!</h1>

        <h3 className="not-found-content">404 - page not found</h3>
      <Link className="home-btn"  to={"/"}>
      <FaHome/>
      <span> BACK TO HOME</span>
      </Link>
    </div>
  )
}

export default NotFoundPage
