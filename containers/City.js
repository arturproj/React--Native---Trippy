import React, { useState , useEffect } from "react";
import { ScrollView } from 'react-native'
import Landing from '../utils/Landing'
import { NavbarUser } from '../components/core/navbar'
import API from '../utils/API'
import HotelCard from '../components/hotels/hotel_card'

function Main({ hotels, action }){
    return(
        <>                 
            <NavbarUser brand="Trippy" />
            <ScrollView>
                {(
                    hotels.map((ele, i) => {
                        return (<HotelCard key={i} action={action} hotel={ele} />)
                    })                       
                )}
            </ScrollView>
        </>
    );
}

function City({ match, history }) {
    //console.log(match.url,match.params.city)
    const [hotels,setHotels] = useState([]);

    // API.getCity(match.params.city).then( hotels => 
    //     setHotels( hotels.results )
    // );  

    const handleChange = (val) => {
          console.log('handleChange#City.js', val)
    }
    return ( hotels.length > 0 ? <Main hotels={hotels} action={handleChange} /> : <Landing option="landing" /> );      
}

export default City;