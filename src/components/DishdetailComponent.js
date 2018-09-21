import React, { Component } from 'react';
import { Card, CardImg, CardBody, CardTitle, CardText } from 'reactstrap';

class DishDetail extends Component {

    constructor(props){
        super(props);
        this.state = {
            dish: props.dish,
        }
    }

    renderDish(dish){
        return (
            <Card>
            <CardImg width="100%" src={dish.image} alt={dish.name}/>
            <CardBody>
            <CardTitle>{dish.name}</CardTitle>
            <CardText>{dish.description}</CardText>
            </CardBody>
            </Card>
        )
    }

    renderComments(comments){
        if (comments === null){
            return (<div></div>);
        }else{
            return (
                <div>
                <h4>Comments</h4>
                <ul className="list-unstyled">
                {
                    comments.map((comment) => {
                        return (
                            <li key={comment.id}>
                            {comment.comment}<br/>
                            -- {comment.author} - {comment.date}
                            </li>
                        );
                    })
                }
                </ul>
                </div>
            );
        }
    }

    render(){
        if (this.props.dish === null){
            return (<div></div>);
        }
        return (
            <div className="row">
              <div className="col-sm-12 col-xs-12 col-md-5 m-1">
                {this.renderDish(this.props.dish)}
              </div>
              <div className="col-sm-12 col-xs-12 col-md-5 m-1">
            {this.renderComments(this.props.dish.comments)}
              </div>
            </div>
        );
    }

}

export default DishDetail
