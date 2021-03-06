import React from 'react';
import classes from './Order.css';

const order = (props) => {

    const ingredients = []

    for(let ingredientName in props.ingredients) {
        ingredients.push({
            name: ingredientName, 
            amount: props.ingredients[ingredientName]
        })
    }

    const ingredientOutput = ingredients.map(ig => {
        return <span 
                    style={{
                        textTransform: 'capitalize',
                        display: 'inline-block',
                        margin: '0px 8px',
                        padding: '5px',
                        border: '1px solid #ccc'
                    }}
                    key={ig.name}>{ig.name} ({ig.amount}) </span>
    })

    return (
        <div className={classes.Order}>
            <p>Ingredients: {ingredientOutput}</p>
            <p>Price: <strong>Rs. {props.price}</strong></p>
        </div>
    )

}
export default order