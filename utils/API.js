import Config from './../Config'
import { AsyncStorage } from 'react-native';

const fetchData = (url) => {
    return fetch(url)
    .then((response) => response.json())
    .then((json) => {
      return json;
    });
}

class Api {
    constructor() {
        // Create the basic user
        console.info("db-host:",Config.host)
        this.user = Object.assign({}, this.defaultUser);
    }

    defaultUser = {
        _id: null,
        token: null,
        username: null,
        thumbnail: null,
        firstName: null,
        dob: null
    };

    setUser(user) {
        this.user = user;
    }

    async getUser() {
        const userStr = await AsyncStorage.getItem('user');

        console.log('userStr', userStr);
        const user = JSON.parse(userStr);
        this.user = user;
        return this.user || {};
    }

    isAuthenticated() {
        if (this.user._id) {
        return true;
        }
        return false;
    }

    async authenticate(user) {
        await AsyncStorage.setItem('user', JSON.stringify(user));
        this.setUser(user);
    }

    signup(user) {
        return fetch(`${Config.host}/api/users/signup`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(user)
        })
        .then(res => res.json())
        .then(json => {
            if (!json.error) {
            this.authenticate(json);
            }
            return json;
        });
    }

    login(user = {}) {
        return fetch(`${Config.host}/api/users/login`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(user)
        })
        .then(res => res.json())
        .then(json => {
            if (!json.error) {
            this.authenticate(json);
            }
            return json;
        });
    }

    logout() {
        AsyncStorage.removeItem('user');
        this.setUser(Object.assign({}, this.defaultUser));
    }

    // Authentification obligatoire
    getProfile(profile = {}) {
        return new Promise((resolve, reject) => {
        if (this.isAuthenticated()) {
            return fetch(`${Config.host}/api/users/${profile._id}`, {
            headers: {
                Authorization: `Bearer ${this.user.token}`
            }
            })
            .then(res => res.json())
            .then(json => {
                // console.log("Api#getProfile json", json);
                resolve(json);
            });
        }
        reject({
            error: 'You must be authenticated'
        });
        });
    }
    
    getCities(){
        return fetchData(Config.host+"/api/home").then(data => { 
            return { cities : data.cities} 
        })
        .catch((error) => {
            console.info("getCities",'There has been a problem with your fetch operation: ', error.message)
        });
    }

    getCity(city){
        //console.log("getCity",city);
        return fetchData(Config.host+"/api/hotels/city/"+city).then(data =>  { 
            return data 
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