import '../assets/styles/error.css'
import { Link } from "react-router-dom";

export default function PageNotFound() {

  return (
      <div className="error-page">
        <div className="Header">
          <h1>404</h1>      
            <Link to='/'><button>Home</button></Link>
        </div>
      </div>
  )
}
