import Search from "../components/Search"
import Spinner from "../components/asset/Spinner"
import UserResults from "../components/UserResults"
import Github from "../githubcontext/GithubContext"
import {useContext} from "react"
function Home() {
    const {Loading} = useContext(Github)
  return (
    <div className=" search-container">
        <div className="search-grp">
            <Search/>
        </div>
        <div>
          {
          Loading ? <Spinner/>: <UserResults/> 
          }
         </div>
    </div>
  )
}

export default Home
