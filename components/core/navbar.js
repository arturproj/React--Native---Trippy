import React from 'react';
import { View, StyleSheet, Text } from 'react-native'
import { Link } from "react-router-native";
import theme from './../theme'

const NavbarUser = ({ brand }) => {
    return (
      <View style={styles.container} >
        <Text style={styles.brand}> {brand} </Text>
        <View style={styles.nav}>
          <Link to="/hotels/" underlayColor="#f0f4f7" style={styles.navItem}>
            <Text style={styles.navItemText}>Hotels</Text>
          </Link>
          <Link to="/topics" underlayColor="#f0f4f7" style={styles.navItem}>
            <Text style={styles.navItemText}>Favorite</Text>
          </Link>
        </View>
      </View>
    );
  
}
const NavbarLogin = ({ brand }) => {
  return (
    <View style={styles.container} >
      <Text style={styles.brand}> {brand} </Text>      
    </View>
  );

}

const styles = StyleSheet.create({
  container: {
    backgroundColor : theme.COLORS.FACEBOOK,
    textAlign : "center",
  },
  nav: {
    flexDirection: "row",
    justifyContent: "space-around",
    borderTopWidth : 2,
    borderTopColor : theme.COLORS.WHITE,
  },  
  navItem: {
    color : theme.COLORS.WHITE,
    flex: 1,
    alignItems: "center",
    padding: 6
  },  
  navItemText: {
    color : theme.COLORS.WHITE,
    fontWeight : "bold",    
    fontSize : theme.SIZES.FONT,
  },
  brand : {
    textAlign : "center",
    color : theme.COLORS.WHITE,
    fontSize : theme.SIZES.NAV,
    paddingTop : 20,
    paddingBottom : 5,
  }
});

export { NavbarUser, NavbarLogin };