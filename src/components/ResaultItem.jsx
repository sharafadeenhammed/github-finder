import {Link} from "react-router-dom"
import PropTypes from "prop-types"
function ResaultItem({user}) {
  

  return (
    <div className=" user-box" key={user.id}>
          <div className="user">
          <div>
            <img className="users-image" src={user.avatar_url} alt={user.login}/>
          </div>
          <div className="user-data" >
            <h3>{user.login}</h3>
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
  user: PropTypes.isRequired
}



export default ResaultItem