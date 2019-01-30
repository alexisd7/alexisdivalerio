import React from 'react';
import { StyleSheet, Text, View, TextInput, Button } from 'react-native';

export default class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {value: '', userinput: '', isValid: true, submitted: false};
    
    this.onChange = this.onChange.bind(this);
    this.onPress = this.onPress.bind(this);
    this.goBack = this.goBack.bind(this);
  }

  onChange(event) {
    console.log(event);
    this.setState({value: event});
  }
  
  onPress(event) {
    var str = this.state.value;
    var regex = /[^A-Za-z +]+/

    if(regex.test(str) === true) {
      this.setState({isValid: false});
      event.preventDefault();
    }
    else {
      this.setState({userinput: this.state.value, isValid: true, submitted: true});
      event.preventDefault();
    }
    console.log(this.state.value + "!");
  }

  goBack(event) {
    this.setState({submitted: false});
  }

  render() {
    if(this.state.submitted === false) {
      return (
        <View style={styles.container} flexDirection="column" alignItems='stretch'>
          <View style={styles.formStyle}><TextInput style={styles.textInput} onChangeText={this.onChange} placeholder="Enter your name"></TextInput></View>
          <Button style={styles.buttonStyle} onPress={this.onPress} title="Submit"><Text style={styles.buttonText}>Submit</Text></Button>
          {!this.state.isValid ? (<Text style={styles.errorText}>Error: Invalid Name; only letters and spaces allowed.</Text>) : null}
        </View>
      );
    }
    else if(this.state.submitted === true) {
      return (
        <View style={styles.container} flexDirection="column" alignItems='stretch'>
          <Text style={styles.finalText}>Hello, {this.state.value}!</Text>
          <Button style={styles.buttonStyle} onPress={this.goBack} title="Go Back"><Text style={styles.buttonText}>Go Back</Text></Button>
        </View>
      )
    }
  }
}

const styles = StyleSheet.create({
  buttonText:
  {
    color:"white",
    fontSize:40
  },
  buttonStyle:
  {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor:'blue',
    height:75,
    margin:30
  },
  formStyle:
  {
    justifyContent: 'center'
  },
  textInput:
  {
    margin:30,
    height:75,
    fontSize:20
  },
  defaultText:
  {
    fontSize:20
  },
  errorText:
  {
    fontSize:20,
    color:"#ff0000"
  },
  finalText:
  {
    fontSize: 20
  },
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});