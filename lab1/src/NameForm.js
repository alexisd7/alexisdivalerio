import React, { Component } from 'react';

var render = 1;
var error = 1;

class NameForm extends React.Component {
      constructor(props) {
        super(props);
        this.state = {value: ''};
    
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
      }
    
      handleChange(event) {
        this.setState({value: event.target.value});
      }

      /*
        The variable "render" decides whether the app renders the input and submit
        button, or the name that the user submitted. Once the user submits a
        name, in order to get the display to change, they have to click on the
        input field and then press anything, for some reason. I was having
        trouble getting it to update on its own once the user hits submit.

        Also, I got an error message to take the place of the alert that says the
        user has submitted a name. However, I couldn't get its functionality to
        work. If you change line 42, the app will pop up the error alert rather than
        the success alert, and the user is allowed to re-enter a name.
      */
    
      handleSubmit(event) {
        for(var i=0; i<this.state.value.length; i++)
        {
          if(i>=0 && i<=9)
          {
            error = 0;
            break;
          }
        }

        if(error !== 1){ //change to === instead of !==
          alert('A name was submitted: ', this.state.value);
          event.preventDefault();

          render = 0;
        }
        else {
          alert('Please enter a valid name.');
          event.preventDefault();
        }
      }
    
      render() {
        if(render !== 0) {
          return (
            <form onSubmit={this.handleSubmit}>
              <label>
                Name:
                <input id="input" type="text" value={this.state.value} onChange={this.handleChange} />
              </label>
              <input type="submit" value="Submit" />
              <div id="print"></div>
            </form>
        );
          }
          else {
            return (
              <p>{this.state.value}</p>
            )
          }
      }
    }
    export default NameForm;