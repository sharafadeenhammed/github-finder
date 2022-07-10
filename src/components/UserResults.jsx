import Github from "../githubcontext/GithubContext"
import {useContext} from "react"
import {Link} from "react-router-dom"

function UserResults() {
  const{users} = useContext(Github);
  return (
    <div className="user-list">
      {
        users.length>0 ?users.map((user)=> <div className=" user-box" key={user.id}>
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
          
          </div>) :"" // <div style={{fontSize:"25px",textAlign:"center"}}>"Can't find User!"</div>

      }
    </div>
  )
}

export default UserResults
