import React, { Component } from 'react';
import axios from 'axios';
class Deals extends Component {
    constructor(props){
        super(props)
        this.state = {
            deals: []
        }
    }
    componentDidMount() {
        fetch('http://localhost:3001/api/v1/deals')
        .then(response => response.json())
        .then(data => {
            // console.log(data)
            this.setState({
                deals: data
            })
        })
        .catch(error => console.log(error))
    }
    render() {
        return (
            <div className="deals-container">
                {this.state.deals.map( deal => {
                    return (
                        <div className="deal" key={deal.id}>
                            <h4>{deal.issuer_id}</h4>
                            <p>{deal.pricing}</p>
                        </div>
                    )
                })}
            </div>
        )
    }
}
export default Deals;
