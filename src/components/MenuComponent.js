import React, { Component } from 'react';
import Dishdetail from './DishdetailComponent';
import { Card, CardImg, CardImgOverlay, CardText, CardBody, CardTitle } from 'reactstrap';

class Menu extends Component {
    constructor(props) {
        super(props);
        this.state = {
            dishdetail: <Dishdetail dish={null} />,
        };
        this.onDishSelect = this.onDishSelect.bind(this);
        console.log('Menu Component constructor method called.');
    }

    onDishSelect(dish) {
        this.state.dishdetail.setState({selectedDish: dish});
       console.log("onDishSelect called.");
    }

    componentDidMount() {
        console.log('Menu Component componentDidMount() method called.');
    }

    renderDish(dish){
        console.log("renderDish called from Menu.");
        return (
            <Card>{this.state.dishdetail}</Card>
        );
    }

    render() {
        const menu = this.props.dishes.map((dish) => {
            return (
              <div key={dish.id} className="col-12 col-md-5 m-1">
                    <Card onClick={() => this.onDishSelect(dish)}>
                  <CardImg width="100%" src={dish.image} alt={dish.name} />
                    <CardImgOverlay>
                    <CardTitle>{dish.name}</CardTitle>
                  </CardImgOverlay>
                </Card>
              </div>
            );
        });
        console.log('Menu Component render() method called.');
        return (
          <div className="container">
            <div className="row">
              {menu}
            </div>
            <div className="row">
            {this.renderDish(this.state.selectedDish)}
            </div>
          </div>
        );
    }
}

export default Menu;
