import {Cars, Form} from './components';
import classes from './App.module.css'

const App = () => {


    return (
        <div className={classes.wrapper}>
            <Form/>
            <Cars/>
        </div>

    );

}

export default App
