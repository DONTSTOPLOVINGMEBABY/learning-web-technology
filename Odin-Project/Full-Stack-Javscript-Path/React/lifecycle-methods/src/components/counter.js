import React, {Component} from "react" 

class Counter extends Component{
    constructor (props){
        super(props)    

        this.state = {
            counter: 0
        }

        this.increment = () => this.setState({counter: this.state.counter + 1})  
        this.decrement = () => this.setState({counter: this.state.counter - 1}) 
    }

    static getDerivedStateFromProps (props, state) {
        if (props.seed && state.seed !== props.seed){
            return {
                seed: props.seed, 
                counter: props.seed
            }
        }
        return null
    }

    
    componentDidMount() {
        console.log("Component did mount")
        console.log("-------------------")
    }

    shouldComponentUpdate(nextProps, nextState){
        if (nextProps && this.props.ignoreProp !== nextProps.ignoreProp){
            console.log("Should Component Update -- DO NOT RENDER")
            return false
        }
        console.log("Should Component Update -- RENDER")
        return true 
    }

    getSnapshotBeforeUpdate(prevProps, prevState){
        console.log("Get snapshot before update")
        console.log(prevProps, prevState)
        console.log("-------------------")
        return null 
    }


    render () {
        console.log("Render")
        return (
            <div className="counter">
                Counter: {this.state.counter}
                <div>
                    <button onClick={this.increment}>Increment</button>
                    <button onClick={this.decrement}>Decrement</button>
                </div>
            </div>
        )
    }

    componentDidUpdate(prevProps, prevState, snapshot){
        console.log("Component Did Update")
        console.log("-------------------")
    }

    componentWillUnmount() {
        console.log('Component will Unmount')
        console.log("----------------------")
    }

    componentDidCatch(error, info){
        console.log("Component did catch an error")
        console.log("----------------------------")
    }

}

export default Counter