import Github from "../githubcontext/GithubContext"
import {useContext, useState, clearUsers} from "react"
import Message from "./Message"


function Search() {
  const{users,getUsers,text,setText,clearUsers} = useContext(Github)
  const[textError, setTextError] = useState(false);
  
  const fetchUsers = (e)=>{
    e.preventDefault()
    if(text != ""){
    setTextError(false)
    getUsers(text)
    setText("")
    }
    else{
      setTextError(true)
      setTimeout(() => {
        setTextError(false)
      }, 4000);
    }
  }

  const updateText = (e)=>{
    setText(e.target.value)
  }

  
  return (
    <div>
        {textError ? <Message content="Please Fill In The Search field !" cssStyle="error" /> : ""}
        <div>
            <form className="search-box"    onSubmit={fetchUsers}>
                <input value={text} onChange={updateText} className="search-input" type="text" placeholder="search"/>

                <button className="search-btn" type="submit">Search</button>

                {users.length>0 && <input value="CLEAR" type="button" className="clear-btn" onClick={clearUsers}/>}
            </form>
          
          
          
             
          
        </div>
     
    </div>
  )
}

export default Search