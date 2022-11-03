import { Component } from 'react'
import { Link } from 'react-router-dom'

import './index.css'

const data = {
    ImpactedOrders : {

        ORDER_ID: [

            "ATPDOCNUM2",

            "ATPDOCNUM",

            "UI-15601",

            "UI-15603",

            "Order1"

        ]

    },

    ImpactedOrderCount : "5"

}

const { ImpactedOrderCount } = data

class Cards extends Component {

    state = {
        solutionsDisplay: "no-solutions",
        hideButton: "hide-button",
        solutionsButton: "show-solutions-button",
        solutionsDisplay2: "no-solutions-2", 
        hideButton2: "hide-button-2", 
        solutionsButton2: "show-solutions-button-2",
    }

    onClickSolutions = () => {
        this.setState({ solutionsDisplay: "display-solutions", hideButton: "show-button", solutionsButton: "hide-solutions-button" })
    }

    onClickHideSolutions = () => {
        this.setState({ solutionsDisplay: "no-solutions", hideButton: "hide-button", solutionsButton: "show-solutions-button" })
    }

    onClickSolutions2 = () => {
        this.setState({ solutionsDisplay2: "display-solutions-2", hideButton2: "show-button-2", solutionsButton2: "hide-solutions-button-2" })
    }
    
    onClickHideSolutions2 = () => {
        this.setState({ solutionsDisplay2: "no-solutions-2", hideButton2: "hide-button-2", solutionsButton2: "show-solutions-button-2" })
    }

    // componentDidMount(){
    //     this.getData()
        
    // }

    // getData = async () => {
    //     const api = "http://localhost:8001/jda/SCPOWeb-orderpromiser/op/integration/v1/getImpactedOrders"
    //     const options = {
    //         method: "GET"
    //     }

    //     const response = await fetch(api, options)

    //     const data = await response.json()
    //     const { ImpactedOrderCount } = data


    // }

    render() {
        const { solutionsDisplay, hideButton, solutionsButton, solutionsDisplay2, hideButton2, solutionsButton2 } = this.state
        return (
            <div className="cards-container">
                <div className='flex-column'>
                    <div className="card ">
                        <div className="recomendations">
                            <p className="recomendation">Inaccurate Inventory</p>
                            <p className=''>Impacted Order Count: {ImpactedOrderCount}</p>
                            <div class="buttons">
                                <button className={solutionsButton} onClick={this.onClickSolutions}> Show Solutions</button>
                                <button className={hideButton} onClick={this.onClickHideSolutions}>Hide Solutions</button>
                            </div>
                        </div>
                        <div className="otif">
                            <p>OTIF Change</p>
                            <img className='arrow' src="https://cdn1.iconfinder.com/data/icons/social-messaging-ui-color/254000/42-1024.png" alt="img" />
                            <span>20%</span>
                        </div>
                    </div>

                    <div className={solutionsDisplay} >
                        <h3>Possible Solutions</h3>
                        <Link className="links" to="/recomendations">
                            <div className="card">
                                <div className="recomendations">
                                    <p className="recomendation"> Smart Rescheduling</p>
                                    <p>Orders Resolved: 8</p>
                                    <p>(Completed/Partially)</p>
                                </div>
                                <div className="otif">
                                    <p>OTIF Change</p>
                                    <img className='arrow' src="https://cdn1.iconfinder.com/data/icons/basic-ui-elements-coloricon/21/11-1024.png" alt="img" />
                                    <span>30%</span>
                                </div>
                            </div>
                        </Link>

                        <Link className="links" to="/recomendations">
                            <div className="card">
                                <div className="recomendations">
                                    <p className="recomendation"> Intelligent Allocation</p>
                                    <p>Orders Resolved: 10</p>
                                    <p>(Completed/Partially)</p>
                                </div>
                                <div className="otif">
                                    <p>OTIF Change</p>
                                    <img className='arrow' src="https://cdn1.iconfinder.com/data/icons/basic-ui-elements-coloricon/21/11-1024.png" alt="img" />
                                    <span>20%</span>
                                </div>
                            </div>
                        </Link>
                    </div>
                </div>
                <div className='flex-column'>
                    <div className="card ">
                        <div className="recomendations">
                            <p className="recomendation">Inaccurate Inventory</p>
                            <p className=''>Impacted Order Count: {ImpactedOrderCount}</p>
                            <div class="buttons">
                                <button className={solutionsButton2} onClick={this.onClickSolutions2}> Show Solutions</button>
                                <button className={hideButton2} onClick={this.onClickHideSolutions2}>Hide Solutions</button>
                            </div>
                        </div>
                        <div className="otif">
                            <p>OTIF Change</p>
                            <img className='arrow' src="https://cdn1.iconfinder.com/data/icons/social-messaging-ui-color/254000/42-1024.png" alt="img" />
                            <span>20%</span>
                        </div>
                    </div>

                    <div className={solutionsDisplay2} >
                        <h3>Possible Solutions</h3>
                        <Link className="links" to="/recomendations">
                            <div className="card">
                                <div className="recomendations">
                                    <p className="recomendation"> Smart Rescheduling</p>
                                    <p>Orders Resolved: 8</p>
                                    <p>(Completed/Partially)</p>
                                </div>
                                <div className="otif">
                                    <p>OTIF Change</p>
                                    <img className='arrow' src="https://cdn1.iconfinder.com/data/icons/basic-ui-elements-coloricon/21/11-1024.png" alt="img" />
                                    <span>30%</span>
                                </div>
                            </div>
                        </Link>

                        <Link className="links" to="/recomendations">
                            <div className="card">
                                <div className="recomendations">
                                    <p className="recomendation"> Intelligent Allocation</p>
                                    <p>Orders Resolved: 10</p>
                                    <p>(Completed/Partially)</p>
                                </div>
                                <div className="otif">
                                    <p>OTIF Change</p>
                                    <img className='arrow' src="https://cdn1.iconfinder.com/data/icons/basic-ui-elements-coloricon/21/11-1024.png" alt="img" />
                                    <span>20%</span>
                                </div>
                            </div>
                        </Link>
                    </div>
                </div>
            </div>
        )
    }

}

export default Cards