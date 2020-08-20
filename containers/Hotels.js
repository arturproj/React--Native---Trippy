import React, { useState , useEffect } from "react";
import { ScrollView } from 'react-native'
import Landing from '../utils/Landing'
import { NavbarUser } from '../components/core/navbar'
import API from '../utils/API'
import CityCard from '../components/hotels/city_card'

function Main({ cities, action, match }){
    return(
        <>                 
            <NavbarUser brand="Trippy" />
            <ScrollView>
                {(
                    cities.map((ele, i) => {
                        return (<CityCard key={i} action={action} city={ele} url={`${match.url}hotels/${ele.slug}`} />)
                    })                       
                )}
            </ScrollView>
        </>
    );
}

function Hotels({ match, history }) {
    const [cities,setCities] = useState([]);

    API.getCities().then( cities => 
          setCities( cities.cities )
    );  

    function handleChange(val) {
          console.log('handleChange#Hotels.js', val)
          history.push('/hotels/'+val)
    }
    return ( cities.length > 0 ? <Main cities={cities} match={match} action={handleChange} /> : <Landing option="landing" /> );      
}

export default Hotels;