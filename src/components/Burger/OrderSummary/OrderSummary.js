import React, { Fragment, Component } from 'react';

import Button from '../../UI/Button/Button'

class OrderSummary extends Component {
    
    render () {

        const ingredientSummary = Object.keys(this.props.ingredients)
        .map(igKey =>{
        return <li key={igKey}>
                    <span style={{textTransform: 'capitalize'}}>{igKey}</span>: {this.props.ingredients[igKey]}
                </li>
        });

        return (
            <Fragment>
            <h3>Your Order</h3>
            <p>Burger with the following ingredients</p>
            <ul>
                {ingredientSummary}
            </ul>
            <p>Total price: {this.props.price.toFixed(2)}$</p>
            <p>Continue to checkout?</p>
            <Button btnType="Danger" clicked={this.props.purchaseCancelled}>CANCEL</Button>
            <Button btnType="Success" clicked={this.props.purchaseContinued}>CONTINUE</Button>
        </Fragment>
        );
    }
};

export default OrderSummary;