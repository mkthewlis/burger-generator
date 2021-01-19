import React, { Component } from 'react';
import PropTypes from 'prop-types';

import classes from './BurgerIngredient.css'

class BurgerIngredient extends Component {
    render() {
        let ingredient = null;

        switch (this.props.type) {
            case ('bread-bottom'):
                ingredient = <div className={classes.BreadBottom}></div>;
                break;
            case ('bread-top'):
                ingredient = (
                    <div className={classes.BreadTop}>
                        <div className={classes.Seeds1}></div>
                        <div className={classes.Seeds2}></div>
                    </div>
                    );
                    break;
            case ('veg-meat'):
                ingredient = <div className={classes.VegMeat}></div>;
                break;
            case ('tomato'):
                ingredient = <div className={classes.Tomato}></div>;
                break;
            case ('salad'):
                ingredient = <div className={classes.Salad}></div>;
                break;
            case ('avocado'):
                ingredient = <div className={classes.Avocado}></div>;
                break;
            default:
                ingredient = null;
        }
        return ingredient;
    }
}

BurgerIngredient.propTypes = {
    type: PropTypes.string.isRequired
};

export default BurgerIngredient;
