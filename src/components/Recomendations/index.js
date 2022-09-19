import { Link } from 'react-router-dom'
import React from 'react';
import TipsAndUpdatesSharpIcon from '@mui/icons-material/TipsAndUpdatesSharp';
import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';


import './index.css'

const Recomendations = () => {

    const [value, setValue] = React.useState('recomendations');

    const handleChange = (event, newValue) => {
        setValue(newValue);
    }

    return (
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
                                <h4>OTIF</h4>
                                <img className='arrow' src="https://cdn1.iconfinder.com/data/icons/basic-ui-elements-coloricon/21/11-1024.png" alt="img" />
                                <h4>20%</h4>
                            </div>
                            <div className='flex-row image-items'>
                                <div>
                                    <TipsAndUpdatesSharpIcon className="image-2" sx={{ fontSize: 50 }} />
                                    {/* <img className='image-2' src="https://media.istockphoto.com/vectors/light-bulb-sketch-of-an-electric-device-cartoon-doodle-lighting-and-vector-id1301904956?s=612x612" alt="img" /> */}
                                    <p>It's AI-ML thing</p>
                                </div>
                                <div className='items'>
                                    <div className='item'>
                                        <input type="checkbox" id="macy"></input>
                                        <label htmlFor='macy'> Item1: Allocation Movement of 100 from Macy's to Walmart</label>
                                    </div>
                                    <div className='item'>
                                        <input type="checkbox" id="lowe"></input>
                                        <label htmlFor='lowe'> Item2: Allocation Movement of 200 from Lowe's to Walmart</label>
                                    </div>
                                </div>
                            </div>
                            <p className='savings'>Savings of $40,000</p>
                            <div>
                                <Link to="/"><button className='reject-button'>Reject</button></Link>
                                <Link to="/success"><button className='accept-button'>Accept</button></Link>
                            </div>
                        </div>
                    </TabPanel>
                    <TabPanel value="analysis">Analysis</TabPanel>
                </TabContext>
            </Box>

        </div>
    )
}

export default Recomendations