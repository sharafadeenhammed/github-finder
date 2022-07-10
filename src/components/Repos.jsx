import PropTypes from "prop-types"

import {FaEye, FaInfo, FaLink, FaStar, FaUtensils} from "react-icons/fa"

function Repos({repo}) {
    const {
        name,
        description,
        html_url,
        forks,
        open_issues,
        watchers_count,
        stargazers_count,

    }= repo
  return (
    <li className="repo" >
        <div className="repo-name" >
        <FaLink/>
        <span style={{marginLeft:"10px"}}>{repo.name}</span>
        <p className="repo-description" >
            {description}
        </p>
        </div>
        
        <div className="repo-overview" >
            <div className="watchers-count-box">
            <FaEye/> {watchers_count} 
            </div>

            <div className="stargazers-count-box">
            <FaStar/> {stargazers_count} 
            </div>

            <div className="issues-count-box">
            <FaInfo/> {open_issues} 
            </div>

            <div className="forks-count-box">
            <FaUtensils/> {open_issues} 
            </div>

        </div>
    </li>

  )
  
}

Repos.propTypes={
    repo: PropTypes.object.isRequired,
}

export default Repos