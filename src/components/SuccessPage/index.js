import { Link } from "react-router-dom";
import { useEffect, useState } from 'react';
import { LoadingButton } from '@mui/lab';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';

import "./index.css"

const SuccessPage = () => {

    const [loader, setLoader] = useState(true)


    useEffect(() => {
        setTimeout(() => {
            setLoader(false)
        }, 3000)

    }, [loader])

    return (
        <div>
            {loader ? <div className='loader'><h1>Loading</h1><LoadingButton loading={loader}></LoadingButton></div> : <div className="success-container">
                <CheckCircleOutlineIcon className="success-mark"></CheckCircleOutlineIcon>
                <h2>Successful</h2>
                <Link to="/"><button>Go to home</button></Link>
            </div>}
        </div>
    )


}


export default SuccessPage