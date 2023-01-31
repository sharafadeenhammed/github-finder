import Github from "../githubcontext/GithubContext"
import {useContext} from "react"
import ResaultItem from "./ResaultItem";

function UserResults() {
  const{users} = useContext(Github);
  return (
    <div className="user-list">
      {
        users?.length > 0 ? users.map((user) => <ResaultItem user={user} />) :"Error Loading Users " 

      }
    </div>
  )
}

export default UserResults
