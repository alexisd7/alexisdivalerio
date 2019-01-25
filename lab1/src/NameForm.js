import React from 'react';
class NameForm extends React.Component {
    constructor(props) {
      super(props);
      this.state = {value: '', userinput: '', isValid: true};
  
      this.handleChange = this.handleChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
    }
  
    handleChange(event) {
      this.setState({value: event.target.value});
    }
  
    handleSubmit(event) {
      var str = this.state.value;
      var regex = /[^A-Za-z]+/

      if(regex.test(str) === true) {
        this.setState({userinput: 'invalid'});
        event.preventDefault();
      }
      else {
        this.setState({userinput: this.state.value});
      event.preventDefault();
      }
    }
  
    render() {
        if(this.state.userinput === '') {
        return (
            <form onSubmit={this.handleSubmit}>
            <label>
                Name:
                <input type="text" value={this.state.value} onChange={this.handleChange} />
            </label>
            <input type="submit" value="Submit" />
            </form>
        );
        }
        else if(this.state.userinput === 'invalid') {
          return (
            <form onSubmit={this.handleSubmit}>
            <label>
                Name:
                <input type="text" value={this.state.value} onChange={this.handleChange} />
            </label>
            <input type="submit" value="Submit" />
            <br/>
            Please enter a valid name.
            </form>
          );
        }
        else return ("Hello, " + this.state.userinput + "!");
    }
  }
  export default NameForm;