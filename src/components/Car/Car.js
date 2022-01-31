import React from 'react';
import {useDispatch} from 'react-redux';

import classes from './Car.module.css';
import {carActions} from '../store';


const Car = ({car:{id, model, price,year}}) => {
    const dispatch = useDispatch();

    return (
        <div className={classes.wrap}>
          <div>
              <div>Model:{model}</div>
              <div>Price:{price}</div>
              <div>Year:{year}</div>
          </div>
            <button onClick={()=>dispatch(carActions.deleteCarThunk({id}))}>
                Delete
            </button>
        </div>
    );
};

export {Car};