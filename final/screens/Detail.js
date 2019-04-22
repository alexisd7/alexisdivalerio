import React from 'react';
import { View, Text, Image, Button, StyleSheet, Dimensions } from 'react-native';

export default class DetailScreen extends React.Component {
  static navigationOptions = {
    title: "Detail",
  };

  // constructor(props){
  //   this.state = {
  //     "fave": false
  //   }
  // }

  color() {
    // this.setState({"fave":"true"});
    // console.log(this.state.fave);
    alert("Favorited!");
  }
  
  render() {
    const title = this.props.navigation.getParam("title","");
    const image = this.props.navigation.getParam("image",null);
    const desc = this.props.navigation.getParam("desc","");
    return (
      <View style={styles.container}>
        <Text style={{fontSize:40,justifyContent:"center",alignContent:"center"}}>{title}</Text>
        <Image style={{flex:1,width:"100%",height:undefined,resizeMode:"contain"}} source={image}></Image>
        <Text style={{fontSize:25,justifyContent:"center",alignContent:"center"}}>{desc}</Text>
        <Button title="Favorite" onPress={this.color} className={this.props.colorChange}></Button>
        <Text>{"\n"}</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex:1,
    alignItems:"center",
    paddingTop: 15,
    backgroundColor: '#fff',
  },
  fave: {
    backgroundColor: '#ff0000',
  },
});