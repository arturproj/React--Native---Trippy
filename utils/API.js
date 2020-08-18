import Config from './../Config'

const fetchData = (url) => {
    return fetch(url)
    .then((response) => response.json())
    .then((json) => {
        console.log("fetchData",json);
      return json;
    });
}

class Api {
    constructor(){
        console.info("db-host:",Config.host)
    }
    
    getCities(){
        return fetchData(Config.host+"/api/home").then(data => { 
            //return { cities : data.cities} 
            console.log("getCities",data);
        })
        .catch((error) => {
            console.warn("getCities",'There has been a problem with your fetch operation: ', error.message)
        });
    }

    getCity(city){
        return fetchData(Config.host+"/api/hotels/city/"+city).then(data =>  { 
            //return data 
            console.log("getCity",data);
        })
        .catch((error) => {
            console.info("getCity",'There has been a problem with your fetch operation: ', error)
        });
    }

    getHotel(id){
        return fetchData(Config.host+"/api/hotels/"+id).then(hotel =>  {
            // return hotel 
            console.log("getHotel",hotel);
        })
        .catch((error) => {
            console.info("getHotel",'There has been a problem with your fetch operation: ', error)
        });
    }
}

export default new Api();