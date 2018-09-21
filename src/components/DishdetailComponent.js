import React, { Component } from 'react';
import { Card } from 'reactstrap';

class Dishdetail extends Component {
    constructor(props) {
        super(props);
        this.state = {
            dish: props.dish,
        };

        this.setState = this.setState.bind(this);
    }

    // render(){
    //     if (this.state.dish === null){
    //         return (<div></div>);
    //     }else{
    //         return (
    //                 <div className="row">
    //                 <div className="col-xs-12 col-sm-12 col-md-5 m-1">
    //                 <Card>
    //                 {this.dish.description}
    //             </Card>
    //                 </div>
    //                 <div className="col-xs-12 col-sm-12 col-md-5 m-1">
    //                 <ul>
    //                 {
    //                     this.props.dishes.comments.map(
    //                         (comment) => (<li>comment.comment</li>)
    //                     )
    //                 }
    //             </ul>
    //                 </div>
    //                 </div>
    //         );
    //     }
    // }

    render(){
        if (this.state.dish === null){
            return (<p>null dish detail</p>);
        }else{
            return (<p>non null dish detail</p>);
        }
    }
}

export default Dishdetail;
