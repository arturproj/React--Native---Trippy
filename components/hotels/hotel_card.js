import React, { useState } from 'react';
import { 
    View, 
    StyleSheet,
    Dimensions, 
    Image, 
    Text, 
    TouchableOpacity
} from 'react-native'

import theme from '../theme'

import Config from './../../Config'

const Card = ({ hotel, action }) => {

  const dimensions = Dimensions.get('window');
  const [imageWidth,setImageWidth] = useState( dimensions.width - 34 );
  const [imageHeight,setImageHeight] = useState( Math.round(dimensions.width * 9 / 16) );

  return (
    <View style={styles.container}>
    <TouchableOpacity onPress={() => console.log('tripAdvisorId', hotel.tripAdvisorId )} >
      <Image
        source={{uri: Config.host+hotel.pictures[0]}}
        style={{ 
          height: imageHeight,
          width: imageWidth, 
          borderTopLeftRadius: 10, 
          borderTopRightRadius: 10 
        }}
      />
      <Text style={styles.title}>{hotel.name}</Text>
      <View style={styles.footer}>
        <Text style={styles.price}>€ {hotel.price}</Text>
        <Text>Stars</Text>
      </View>
    </TouchableOpacity>
  </View>
  );
};

const styles = StyleSheet.create({
  container: {
    margin : 15,
    borderRadius : 12,
    backgroundColor : theme.COLORS.WHITE,
    textAlign : "center",
    borderColor : theme.COLORS.FACEBOOK,
    borderWidth : 2
  },
  footer : {
    flexDirection : 'row',
    justifyContent : 'space-between',
    alignItems : "center",
    padding : 10,
  },
  title : {
    fontSize : 20,  
    marginLeft : 5,
    marginRight : 5,    
  },
  price : {
    fontSize : 30,  
    marginLeft : 5,
    marginRight : 5,    
  }
});

export default Card;