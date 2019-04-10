import React, { Component } from "react";

import Button from "./../Button";
import styles from "./style.js";

const style = { backgroundColor: "#DDDDDD" };

class LocationButton extends Component {
  _componentDidMount() {
    navigator.geolocation.getCurrentPosition(
      initialPosition => {
        this.props.onGetCoords(
          initialPosition.coords.latitude,
          initialPosition.coords.longitude
        );
      },
      error => {
        alert(error.message);
      },
      { enableHighAccuracy: true, timeout: 20000, maximumAge: 1000 }
    );
  }

  render() {
    return (
      <Button
        label="Use Current Location"
        style={style}
        componentDidMount={this._componentDidMount.bind(this)}
      />
    );
  }
}

export default LocationButton;
