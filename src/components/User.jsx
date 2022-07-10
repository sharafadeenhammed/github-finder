import {useEffect, useContext,useState} from "react"
import {useParams, Link} from "react-router-dom"

import {FaCodepen,FaStore,FaUserFriends,FaUsers} from "react-icons/fa"

import Spinner from "./asset/Spinner"

import Github from "../githubcontext/GithubContext"

import Repos from "./Repos"

function User() {
    const params = useParams()

    const [user,setUser] = useState({})

    const [loading,setLoading] = useState(true)

    const [repos, setRepos] = useState([])

    const {gitUrl} = useContext(Github)

    useEffect(()=>{
        setLoading(true)
        fetch(`${gitUrl}/users/${params.user}`)
        .then((res)=>res.json())
        .then((json)=>setUser(json))
        .catch((err)=> console.log(err))
        setTimeout(()=>setLoading(false) ,500)
    },[])

    useEffect(async()=>{
      await fetch(`${gitUrl}/users/${params.user}/repos`)
      .then((res)=> res.json())
      .then((data)=> {
        setRepos(data)
        console.log(data)
      })
    },[])

    const {
      name,
      type,
      avatar_url,
      location,
      bio,
      blog,
      twitter_username,
      login,
      html_url,
      followers,
      following,
      public_repos,
      hireable,
      public_gists,} = user



  return (
    <div>
        {
          loading ? <Spinner/> : ( Object.keys(user).length >2 ?
            
            <div>
              <p> 
                <Link className="back-btn" to="/">Back To Search</Link>
              </p>
              
              <div className="user-box-container" >
                <div className="user-details">
                  <div>
                  <div className="img-container">
                    <img className="user-img" src={avatar_url} alt={login} />
                    <h3 className="img-name" >{name}</h3>
                    <p className="img-login" >{login}</p>
                  </div>
                  </div>
                  <div className="user-data" >
                    <div style={{margin:"10px"}} >
                      <span className="name" >{name}</span>
                      {type && <span className="type" >{type}</span>}
                      {hireable && <span className="hire" >Hireable</span>}
                    </div>
                    <div>
                      <p  className="bio" >{bio}</p>
                    </div>
                    <div  >
                      <a className="visit-btn" href={html_url} target="_blank" rel="noreferrer" >
                        Visit github profile
                      </a>
                    </div>
                    <div  className="other-info-box" >

                      {location && <div className="info-box">
                        <p>Location</p>
                        <h3>{location}</h3>
                        
                         </div>  }
                      
                      {blog && <div className="info-box">
                        <p>Website</p>
                        <a className="info-box-link" target="_blank" href={`https://${blog}`}>{blog}</a>
                         </div>  }

                        
                      {twitter_username && <div className="info-box">
                        <p>Twitter</p>
                        <a className="info-box-link" target="_blank" href={`https://twitter.com/${twitter_username}`}>{twitter_username}</a>
                         </div>  }
                    </div>
                  </div>
                </div>
                <div className="user-stats">
                    
                      {followers && <div className="user-stats-item" >
                        <div className="stat-data">
                          <p className="stats-badge" >Followers</p>
                          <h2 style={{color:"rgba(255,255,255,0.8)"}} >{followers}</h2>
                        </div>
                        <div> 
                          <FaUsers color="rgba(255,90,90,0.7)" size="40px" />
                        </div>
                        </div>}


                        {following && <div className="user-stats-item" >
                        <div className="stat-data">
                          <p className="stats-badge" >Following</p>
                          <h2 style={{color:"rgba(255,255,255,0.8)"}} >{following}</h2>
                        </div>
                        <div> 
                          <FaUserFriends color="rgba(255,90,90,0.7)" size="40px" />
                        </div>
                        </div>}


                        {public_repos && <div className="user-stats-item" >
                        <div className="stat-data">
                          <p className="stats-badge" > Public Repos</p>
                          <h2 style={{color:"rgba(255,255,255,0.8)"}} >{public_repos}</h2>
                        </div>
                        <div> 
                          <FaCodepen color="rgba(255,90,90,0.7)" size="40px" />
                        </div>
                        </div>}



                        {public_gists && <div className="user-stats-item" >
                        <div className="stat-data">
                          <p className="stats-badge" > Public Gists</p>
                          <h2 style={{color:"rgba(255,255,255,0.8)"}} >{public_gists}</h2>
                        </div>
                        <div> 
                          <FaStore color="rgba(255,90,90,0.7)" size="40px" />
                        </div>
                        </div>}
                </div>
              </div>

              { 
                repos.length>0? <div className="user-repos">
                  <h1 style={{color:"rgba(255,255,255,0.8)",marginBottom:"30px"}} >Latest Repositories</h1>
                  <ul className="repos">
                    {
                      repos.map((repo)=><Repos repo={repo} key={repo.id}/>)
                    }
                  </ul>



                </div> : ""
              }

            </div> : ""
            
            )

        }



         {
          !loading && Object.keys(user).length == 0 ?<div style={{fontSize:"25px",textAlign:"center"}}>"Error Can't Load User !"</div> : ""
         }
    </div>
  )
}


export default User