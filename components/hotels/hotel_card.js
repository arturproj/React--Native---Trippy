import React from 'react';
import { View, StyleSheet, Dimensions, Image, Text } from 'react-native'


import theme from '../theme'

export default class Card extends React.Component{

  constructor(state){
    super(state)

    const dimensions = Dimensions.get('window');
    this.state = {
      imageHeight : Math.round(dimensions.width * 9 / 16),
      imageWidth : dimensions.width - 30,
    };
  }

  render(){

  return (
        <View style={styles.container}>
            <Image
                source={{uri: 'https://i.ytimg.com/vi/C3jPg75xxvk/maxresdefault.jpg'}}
                style={{ height: this.state.imageHeight, width: this.state.imageWidth }}
            />
            <Text style={styles.title}>Title</Text>
            <View style={styles.footer}>
              <Text style={styles.price}>€ 120.00</Text>
              <Text>Stars</Text>
            </View>
        </View>
  );
}
}



const styles = StyleSheet.create({
  container: {
    margin : 15,
    borderRadius : 12,
    backgroundColor : theme.COLORS.WHITE,
    height : 350,
    textAlign : "center",
  },
  footer : {
    flexDirection : 'row',
    justifyContent : 'space-between',
    alignItems : "center",
    padding : 10,
  },
  title : {
    fontSize : 30,  
    marginLeft : 5,
    marginRight : 5,    
  },
  price : {
    fontSize : 30,  
    marginLeft : 5,
    marginRight : 5,    
  }
});