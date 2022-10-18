import { FaExclamationTriangle } from "react-icons/fa";
import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <div className="d-flex flex-column justify-content-center align-items-center">
        <FaExclamationTriangle className="text-danger" size='5em' />
        <h4>404</h4>
        <p className="lead">The page you're trying to access does not exist</p>
        <Link to='/' className="btn btn-primary">Go Home</Link>
    </div>
  )
}
