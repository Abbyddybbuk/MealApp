import React, { Fragment } from 'react';
import mealsImage from '../../assets/meals.jpg';
import classes from './Header.module.css';
import HeaderCartButton from './HeaderCartButton';

const Header = (props) => {
    //In order to pick class for css, if css class name has "-" then class name cannot be picked with . notation
    return <Fragment>
        <header className={classes.header}>
            <h1>DelphiMealz</h1>
            <HeaderCartButton />
        </header>
        <div className={classes['main-image']}>
            <img src={mealsImage} alt="Tasty Meals" />
        </div>
    </Fragment>
};

export default Header;