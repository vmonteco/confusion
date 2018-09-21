import React, { Component } from 'react';
import { Card } from 'reactstrap';

class Dishdetail extends Component {
    constructor(props) {
        super(props);
        this.state = {
            dish: props.dish,
        };
    }

    render(){
        console.log("DishDetail render().");
        console.log(this.state.dish);
        if (this.state.dish === null){
            return (<p>null dish detail</p>);
        }else{
            return (<p>non null dish detail</p>);
        }
    }
}

export default Dishdetail;
