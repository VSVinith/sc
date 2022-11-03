import { Link } from 'react-router-dom'
import React, { useEffect } from 'react';
import TipsAndUpdatesSharpIcon from '@mui/icons-material/TipsAndUpdatesSharp';
import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import CancelIcon from '@mui/icons-material/Cancel';
import { LoadingButton } from '@mui/lab';

import './index.css'

const data = {
    Recommendations: {
        Recommendation: [
            {
                Description: "Improve OTIF : 20% and Savings : $20000 ",
                OTF: " + 20%",
                Savings: " $20000 "
            },
            {
                Description: "Improve OTIF : 10% and Savings : $5000 ",
                OTF: " + 10%",
                Savings: " $5000 "
            },
            {
                Description: "Reduce OTIF : 30% and Savings : $30000 ",
                OTF: " - 30%",
                Savings: " $30000 "
            }
        ]
    }
}

const { Recommendation } = data.Recommendations

const RecomendationsAndAnalysis = () => {

    const [loader, setLoader] = React.useState(true)

    const [value, setValue] = React.useState('recomendations')

    const [otif, setOtif] = React.useState("")

    const [savings, setSavings] = React.useState("")

    const handleChange = (event, newValue) => {
        setValue(newValue);
    }

    const handleSavings = (event) => {
        setSavings(event.target.value)
        setOtif(event.target.id)
    }

    useEffect(() => {
        setTimeout(() => {
            setLoader(false)
        }, 3000)

    }, [loader])


    // useEffect(()=>{
    //     const getResponse = async () => {
    //         const api = "http://localhost:8001/jda/SCPOWeb-orderpromiser/op/integration/v1/getRecommendations"

    //         const options = {
    //             method: "GET"
    //         }

    //         const response = await fetch(api, options)

    //         if(response.ok){
    //             const data = await response.json()
    //             const { Recommendation } = data.Recommendations
    //         }
    //     }

    // }, [])

    return (
        <div>
            {loader ? <div className='loader'><h1>Loading</h1><LoadingButton loading={loader}></LoadingButton></div> :
                <div>
                    <Box sx={{ width: '100%', typography: 'body1' }}>
                        <TabContext value={value}>
                            <Box className='tabs'>
                                <TabList onChange={handleChange} >
                                    <Tab label="Recomendations" value="recomendations" />
                                    <Tab label="Analysis" value="analysis" />
                                </TabList>
                            </Box>
                            <TabPanel value="recomendations">
                                <div className="recomendations-container">
                                    <div className='image-heading'>
                                        <img className='image' src="https://cdn.pixabay.com/photo/2016/03/31/22/35/jigsaw-puzzle-1297102_1280.png" alt="img" />
                                        <p className='heading'>Intelligent Allocation with Order Clustering</p>
                                    </div>
                                    <div className='flex-row'>
                                        <h4>OTIF :  </h4>
                                        <h4>{otif}</h4>
                                    </div>
                                    <div className='flex-row image-items'>
                                        <div>
                                            <TipsAndUpdatesSharpIcon className="image-2" sx={{ fontSize: 50 }} />
                                            <p>It's AI-ML thing</p>
                                        </div>
                                        <div className='items'>

                                            {Recommendation.map(eachRecommendation => (
                                                <div className='item'>
                                                    <input type="radio" id={eachRecommendation.OTF} value={eachRecommendation.Savings} name="allocation" onChange={handleSavings}></input>
                                                    <label htmlFor={eachRecommendation.OTF}>{eachRecommendation.Description}</label>
                                                </div>
                                            ))}

                                        </div>
                                    </div>
                                    <p className='savings'>Savings of {savings} </p>
                                    <div className='buttons'>
                                        <Link to="/">
                                            <button className='reject-button'>
                                                <CancelIcon></CancelIcon>
                                            </button>
                                        </Link>
                                        <Link to="/success">
                                            <button className='accept-button'>
                                                <CheckCircleOutlineIcon></CheckCircleOutlineIcon>
                                            </button>
                                        </Link>
                                    </div>
                                </div>
                            </TabPanel>
                            <TabPanel value="analysis">Analysis</TabPanel>
                        </TabContext>
                    </Box>
                </div>
            }
        </div>
    )
}

export default RecomendationsAndAnalysis
