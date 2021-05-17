import React from 'react'

import HeaderCartButton from './HeaderCartButton'

//CSS IMPORT
import classes from './Header.module.css'

//IMAGE IMPORT
import mealsImage from '../../assets/meals.jpg'

const Header = (props) => {
    return (
        <>
            <header className={classes.header}>
                <h1>React Meals</h1>
                <HeaderCartButton onClick={props.onShowCart}/>
            </header>
            <div className={classes['main-image']}>
                <img src={mealsImage} alt="A table full of delicious food!"/>
            </div>
        </>
    )
}

export default Header
