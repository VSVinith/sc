import { Link } from "react-router-dom"
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';

import "./index.css"

const SuccessPage = () =>
    <div className="success-container">
        <CheckCircleOutlineIcon className="success-mark"></CheckCircleOutlineIcon>
        <h2>Successful</h2>
        <Link to="/"><button>Go to home</button></Link>
    </div>

export default SuccessPage