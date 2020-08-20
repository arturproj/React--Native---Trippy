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

const Card = ({ city, action }) => {

  const dimensions = Dimensions.get('window');
  const [imageWidth,setImageWidth] = useState( dimensions.width - 34 );
  const [imageHeight,setImageHeight] = useState( Math.round(dimensions.width * 9 / 16) );

  return (
    <View style={styles.container}>
        <TouchableOpacity onPress={()=>action(city.slug)} >
            <Image
                source={{uri:Config.host + city.source}}
                style={{ 
                    height: imageHeight,
                    width: imageWidth, 
                    borderTopLeftRadius: 10, 
                    borderTopRightRadius: 10 
                }}
            />
            <Text style={styles.title}>{city.name}</Text>
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
  title : {
    fontSize : 30,  
    marginLeft : 5,
    marginRight : 5,   
    textAlign : "center" 
  }
});

export default Card;