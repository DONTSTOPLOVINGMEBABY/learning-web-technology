import React, { Component } from "react";

class Overview extends Component {
    constructor(props){
        super(props) ; 
    }

    render () {
        const lists = []
        for (let i = 0 ; i < this.props.hello.length ; i++){
            lists.push(
                <li>{this.props.hello[i]}</li>
            )
        }
        console.log(this.props.hello)
        return (
            <div>
                <h1>{lists}</h1>
            </div>
        )
    }
}






export default Overview;
