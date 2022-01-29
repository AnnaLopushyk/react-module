import React from 'react';
import classes from './Car.module.css'

const Car = ({car:{id,model,price,year},getCarId}) => {
    return (
        <div className={classes.wrap}>
            <div>
                <div>Model:{model}</div>
                <div>Price:{price}</div>
                <div>Year:{year}</div>
            </div>
            <button onClick={()=>getCarId(id)}>DELETE</button>
        </div>
    );
};

export default Car;