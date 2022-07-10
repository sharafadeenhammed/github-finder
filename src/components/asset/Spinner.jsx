import spinner from "./spinner.gif"

function Spinner() {
  return (
    <div style={{textAlign:"center"}}>
    <img className="loading-spinner" src={spinner} alt="loading..." ></img>
    </div>
  )
}

export default Spinner
