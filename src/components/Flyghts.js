import React, {useEffect, useState} from 'react';
import Flyght from "./flyght";

const Flyghts = () => {
const [flyghtsList, setFlyghtsList]= useState([]);

useEffect(()=> {
    fetch('https://api.spacexdata.com/v3/launches/')
        .then(value => value.json())
        .then(flyghts => {
            let filter = flyghts.filter(flyght=>flyght.launch_year !== '2020')
            setFlyghtsList(filter);

        })

},[])

    return (
        <div>
            {
                flyghtsList.map(value =><Flyght key={value.flight_number}
                    item={value}/>)

            }
        </div>
    );
};

export default Flyghts;