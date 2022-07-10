import {createContext, useState , useReducer, } from "react"

const Github = createContext()

export function GithubContext({children}) {
    const gitUrl = process.env.REACT_APP_GITHUB_URL

    const[users, setUsers] = useState([])

    const[isLoading,setIsLoading] = useState(false)


    const[text,setText] = useState("")


    const getUsers = async (user)=>{
        setIsLoading(true)
        const query = new URLSearchParams({
          q:user,
        })
        await fetch(`${gitUrl}/search/users?${query}`)
        .then((res)=>res.json())
        .then((data)=>setUsers(data.items))
        .catch(()=>{
          console.log("error loading user")
          setIsLoading(false)
        })
        setIsLoading(false)
        

    }

    const clearUsers = ()=>{
      setUsers([])
      setText("")
      setIsLoading(false)

    }


  return (
    <Github.Provider value={{
        users:users,
        Loading:isLoading,
        text:text, 
        gitUrl:gitUrl,
        getUsers:getUsers, 
        setText:setText,
        clearUsers:clearUsers     
        
        }} >
        {children}
    </Github.Provider>
  )
}

export default Github
