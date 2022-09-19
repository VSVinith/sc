import { Component } from 'react'
import { Link } from 'react-router-dom'

import './index.css'

const issues = [
    {
        id: 1,
        issue: "Inaccurate Invetory",
        issueOtif: "20%"
    }
]

class Cards extends Component {

    state = {
        solutionsDisplay: "no-solutions",
        hideButton: "hide-button",
        solutionsButton: "show-solutions-button"
    }

    onClickSolutions = () => {
            this.setState({ solutionsDisplay: "display-solutions", hideButton: "show-button", solutionsButton: "hide-solutions-button" })
    }

    onClickHideSolutions = () => {
        this.setState({ solutionsDisplay: "no-solutions", hideButton: "hide-button", solutionsButton: "show-solutions-button"})
    }

    render() {
        const { solutionsDisplay, hideButton , solutionsButton} = this.state
        return (
            <div className="cards-container">
                {issues.map(issue => (
                    <div className='flex-column issue'>
                        <div className="card ">
                            <div className="recomendations">
                                <p className="recomendation">{issue.issue}</p>
                                <div class="buttons">
                                    <button className={solutionsButton} onClick={this.onClickSolutions}> Show Solutions</button>
                                    <button className={hideButton} onClick={this.onClickHideSolutions}>Hide Solutions</button>
                                </div>
                            </div>
                            <div className="otif">
                                <p>OTIF Change</p>
                                <img className='arrow' src="https://cdn1.iconfinder.com/data/icons/social-messaging-ui-color/254000/42-1024.png" alt="img" />
                                <span>{issue.issueOtif}</span>
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
                ))}
            </div>

        )
    }

}

export default Cards