import {Link} from "react-router-dom"
import PropTypes from "prop-types"
import { useState } from "react"
function ResaultItem({user}) {
  const [showName, setShowName] = useState(false)  

  return (
    <div className=" user-box" key={user.id}>
      
          <div className="user">
          <div>
            <img className="users-image" src={user.avatar_url} alt={user.login}/>
          </div>
        <div className="user-data" >
          <h3
            onMouseEnter={() => setShowName(true)}
            onMouseLeave={() => setShowName(false)}
            className="name">
            {new String(user.login).substring(0, 8)}{new String(user.login).length > 8 ? "..." : ""}
            {showName ? <h5 className="fulname">{user.login}</h5> : ""}
          </h3>
          
          </div>
          </div>
          <div className="user">
            <div>

            </div>
            <div>
            <Link className="user-link" to={`/user/${user.login}`}>Visit Profile</Link>
            </div>
          </div>
          
        </div>)
}

ResaultItem.propTypes = {
  user: PropTypes.object.isRequired
}



export default ResaultItem