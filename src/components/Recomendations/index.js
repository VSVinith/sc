import { Link } from 'react-router-dom'
import { Slider } from '@mui/material'
import './index.css'

const Recomendations = () => {
    const mark = [
        {
            value: "0",
            label: "Reject"
        },
        {
            value:"100",
            label: "Accept"
        }
    ]
    return (
        <div className="recomendations-container">
            <div className='flex-row tabs'>
                <div className='tab'>Recomendations</div>
                <div className='line'></div>
                <div className='tab'>Analysis</div>
            </div>
            <div className='image-heading'>
                <img className='image' src="https://cdn.pixabay.com/photo/2016/03/31/22/35/jigsaw-puzzle-1297102_1280.png" alt="img" />
                <p className='heading'>Intelligent Allocation with Order Clustering</p>
            </div>
            <div className='flex-row'>
                <h4>OTIF</h4>
                <img className='arrow' src="https://cdn1.iconfinder.com/data/icons/basic-ui-elements-coloricon/21/11-1024.png" alt="img" />
                <h4>20%</h4>
            </div>
            <div className='flex-row'>
                <div>
                    <img className='image-2' src="https://media.istockphoto.com/vectors/light-bulb-sketch-of-an-electric-device-cartoon-doodle-lighting-and-vector-id1301904956?s=612x612" alt="img" />
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

            <div className='slider'>
            <Slider defaultValue={50} marks={mark} step={50}/>
            </div>


            <Link to="/"><button>Back</button></Link>

        </div>
    )
}



export default Recomendations