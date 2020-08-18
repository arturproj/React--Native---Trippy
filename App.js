import React from 'react';
import { ActivityIndicator, Text } from 'react-native'

import Navbar from './components/core/navbar'

import API from './utils/API'

import city_json from './utils/city.json'

import Home from './components/Home'

import Hotels from './components/Hotels'

class App extends React.Component {
      constructor(state) {
            super(state)

            this.state = {
                  title: 'Trippy',
                  activeTab: 'home',
                  activeCard: '',
                  cities: city_json,
            }

            this.hanledView = this.hanledView.bind(this)
            this.resetView = this.resetView.bind(this)
      }

      componentDidMount() {
            API.getCities().then(
                console.log("componentDidMount#getCities")
            );          
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
                              this.state.activeTab === 'hotels' ? <Hotels hotels={this.state.cities} hanled={this.hanledView} /> : null
                        )}
                  </>
            );
      }
}

export default App;