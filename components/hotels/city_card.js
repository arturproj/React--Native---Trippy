import React from 'react';
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

export default class Card extends React.Component{

  constructor(state){
    super(state)

    const dimensions = Dimensions.get('window');
    this.state = {
      imageHeight : Math.round(dimensions.width * 9 / 16),
      imageWidth : dimensions.width - 34,
    };
  }

  componentDidMount(){
    //console.log( this.props.city)
  }

  render(){

  return (
        <View style={styles.container}>
            <TouchableOpacity onPress={() => this.props.action(this.props.city.slug)}>
                <Image
                    source={{uri:'https://cultura.biografieonline.it/wp-content/uploads/2014/07/Anime-Dragon-Ball.jpg'}}
                    style={{ 
                        height: this.state.imageHeight,
                        width: this.state.imageWidth, 
                        borderTopLeftRadius: 10, 
                        borderTopRightRadius: 10 
                    }}
                />
                <Text style={styles.title}>{this.props.city.name}</Text>
            </TouchableOpacity>
        </View>
  );
}
}



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