import { Component } from 'react'
import { Link } from 'react-router-dom'

import './index.css'

class Card extends Component {
    render() {
        return (
            <div className="cards-container">
                <div className="card">
                    <div className="card-content">
                        <p className="recomendation"> Inaccurate Inventory</p>
                    </div>
                    <div className="card-content">
                        <p>OTIF Change</p>
                        <img className='arrow' src="https://cdn1.iconfinder.com/data/icons/social-messaging-ui-color/254000/42-1024.png" alt="img" />
                        <span>20%</span>
                    </div>
                </div>

                <Link className='links' to="/recomendations">
                    <div className="card">
                        <div className="card-content">
                            <p className="recomendation"> Smart Rescheduling</p>
                            <p>Orders Resolved: 8</p>
                            <p>(Completed/Partially)</p>
                        </div>
                        <div className="card-content">
                            <p>OTIF Change</p>
                            <img className='arrow' src="https://cdn1.iconfinder.com/data/icons/basic-ui-elements-coloricon/21/11-1024.png" alt="img"/>
                            <span>30%</span>
                        </div>
                    </div>
                </Link>

                <Link className="links" to="/recomendations">
                    <div className="card">
                        <div className="card-content">
                            <p className="recomendation"> Intelligent Allocation</p>
                            <p>Orders Resolved: 10</p>
                            <p>(Completed/Partially)</p>
                        </div>
                        <div className="card-content">
                            <p>OTIF Change</p>
                            <img className='arrow' src="https://cdn1.iconfinder.com/data/icons/basic-ui-elements-coloricon/21/11-1024.png" alt="img"/>
                            <span>20%</span>
                        </div>
                    </div>
                </Link>

                
            </div>
        )
    }

}

export default Card