import React from 'react';
import classes from './BuildControls.css';
import BuildControl from './BuildControl/BuildControl';

const controls = [
    { label: 'Salad', type: 'salad' },
    { label: 'Bacon', type: 'bacon' },
    { label: 'Cheese', type: 'cheese' },
    { label: 'Aloo Tiki', type: 'aloo_tiki' },
]

const buildControls = (props) => (
    <div className={classes.BuildControls}>
        <p className={classes.Price}>Current Price: Rs. {props.price}</p>

        {controls.map(ctrl => (
            <BuildControl 
                key={ctrl.label} 
                label={ctrl.label} 
                added={() => props.ingredientAdded(ctrl.type)}
                removed={() => props.ingredientRemoved(ctrl.type)}
                disabled={props.disabled[ctrl.type]} />
        ))}

        <button className={classes.OrderButton} onClick={props.ordered}
        disabled={!props.purchasable} >
            {props.isAuth ? 'ORDER NOW' : 'SIGN IN TO ORDER'}
        </button>

        
    </div>
  
    
)

export default buildControls