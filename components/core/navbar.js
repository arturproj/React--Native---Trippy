import React from 'react';
import { View, StyleSheet, Text } from 'react-native'

import theme from './../theme'

export default class Navbar extends React.Component {

  render(){
    return (
      <View style={styles.container} >
        <Text style={styles.brand} onPress={ () => this.props.reset() } > {this.props.brand} </Text>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    backgroundColor : theme.COLORS.FACEBOOK,
    textAlign : "center",
  },
  brand : {
    textAlign : "center",
    color : theme.COLORS.WHITE,
    fontSize : theme.SIZES.NAV,
    paddingTop : 20,
    paddingBottom : 15,    
  }
});