import React from 'react';
import { ActivityIndicator, Text } from 'react-native'

import Navbar from './components/core/navbar'

// import API from './utils/API'

import city_json from './utils/city.json'

import Home from './components/Home'

export default class App extends React.Component {
      constructor(state) {
            super(state)

            this.state = {
                  title: 'Trippy',
                  activeTab: 'home',
                  activeCard: '',
                  cities: [],
            }

            this.hanledView = this.hanledView.bind(this)
            this.resetView = this.resetView.bind(this)
      }

      componentDidMount() {
            // API.getCities().then(data => {
            //     console.log("home",data)
            // //     const activeCard = data.cities[0];
            // //     data.cities.splice(0, 1);
            // //     this.setState({activeCard,cities : data.cities})
            //     } 
            // );          
            this.setState({
                  cities: city_json,
            })
      }

      resetView() {
            this.setState({
                  activeTab: 'home',
                  title: 'Trippy',
            })
      }
      hanledView(val) {
            this.setState({
                  activeCard: val,
                  title: 'Hotels '+val.toUpperCase(),
                  activeTab: 'hotels',
            })
      }

      render() {
            return (
                  <>
                        <Navbar brand={this.state.title} reset={this.resetView} />
                        {(
                              this.state.activeTab === 'home' ? <Home cities={this.state.cities} hanled={this.hanledView} /> : null 
                        )}
                        {(
                              this.state.activeTab === 'hotels' ? 'hotels' : null
                        )}
                  </>
            );
      }
}
