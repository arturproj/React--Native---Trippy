import React from 'react';
import { ScrollView, ActivityIndicator, View } from 'react-native'

import Card from './hotels/hotel_card'

class Main extends React.Component {

    render() {
        return (
            <ScrollView>
                {(
                    this.props.hotels.map((ele, i) => {
                        return (<Card key={i} action={this.props.action} city={ele} />)
                    })
                )}
            </ScrollView>
        );
    }
}

class Landing extends React.Component {

    render() {
        return (
            <View style={{
                flex: 1,
                justifyContent: "center",
                alignItems: "center",
                backgroundColor: '#00000000',

            }}>
                <ActivityIndicator size="large" color="#0000ff" />
            </View>
        );
    }
}

class Hotels extends React.Component {

    render() {
        return (
            <>
                {(
                    this.props.hotels.length > 0 ? <Main hotels={this.props.hotels} action={this.props.hanled} /> : <Landing />
                )}
            </>
        );
    }
}

export default Hotels;