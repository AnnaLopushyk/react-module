import {useReducer} from 'react';


    const reducer = (state, action) => {
       state = {...state, count1: state.count1, count2: state.count2, count3: state.count3}

        switch (action.type){
            case 'inc':
                return {...state, count1:state.count1+1}

            case 'dec':
                return {...state, count1: state.count1-1}

            case 'reset':
                return {...state, count1:action.payload}


            case 'inc2':
                return {...state, count2:state.count2+1}

            case 'dec2':
                return {...state, count2: state.count2-1}

            case 'reset2':
                return {...state, count2:action.payload}



            case 'inc3':
                return {...state, count3:state.count3+1}

            case 'dec3':
                return {...state, count3: state.count3-1}

            case 'reset3':
                return {...state, count3:action.payload}


            default:
              throw new Error('MyError')
        }


    }

    function App() {
        const [state, dispatch] = useReducer(reducer, {count1: 0, count2: 0, count3:0});

        return (
            <div>
                <div> Count1: {state.count1}</div>
                <button onClick={()=> dispatch({type:'inc'})}>increment</button>
                <button onClick={()=> dispatch({type:'dec'})}>decrement</button>
                <button onClick={()=> dispatch({type:'reset',payload:1})}>reset</button>
                <hr/>

                <div> Count2: {state.count2}</div>
                <button onClick={()=> dispatch({type:'inc2'})}>increment</button>
                <button onClick={()=> dispatch({type:'dec2'})}>decrement</button>
                <button onClick={()=> dispatch({type:'reset2',payload:2})}>reset</button>
                <hr/>

                <div> Count3: {state.count3}</div>
                <button onClick={()=> dispatch({type:'inc3'})}>increment</button>
                <button onClick={()=> dispatch({type:'dec3'})}>decrement</button>
                <button onClick={()=> dispatch({type:'reset3',payload:3})}>reset</button>

            </div>

        );
    }

    export default App;
