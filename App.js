import React from 'react';
import { StyleSheet, Text, View, Linking } from 'react-native';
import MapView from 'react-native-maps';

export default class App extends React.Component {
  constructor() {
    super();
    console.log("yep");
    navigator.geolocation.watchPosition(this.handlePos.bind(this), this.handlePosError, {
    });
    console.log("nope");
    this.state = {};
  }
  handlePosError(error) {
      console.log("ERORORORORROROROR");
      console.log(error);
  }
  handlePos(pos) {
    console.log("hi");
    this.setState({position: pos});
    console.log("bye");
  }
  handlePress() {
    var pos = this.state.position;
    var coords = pos.coords;
    var url = "https://www.google.com/maps?q=" + coords.latitude + "," + coords.longitude;
    console.log(url);
    Linking.openURL(url);
  }
  render() {
    if (!this.state.position) {
    return (
        <View style={styles.container}>
        <Text>No position yet!</Text>
        </View>
      );
    }

    var pos = this.state.position;
    var coords = pos.coords;
    return (
        <View style={styles.container}>
        <MapView
        region={{latitude: coords.latitude, longitude: coords.longitude, longitudeDelta: .01, latitudeDelta: .01}}
        style={styles.map}/>

        </View>
      );
  }
}

const styles = StyleSheet.create({
  container: {
      ...StyleSheet.absoluteFillObject,
    //flex: 1,
    ///backgroundColor: '#fff',
    height:400,
    width:400,
    alignItems: 'center',
    justifyContent: 'flex-end',
  },
    map: {
      ...StyleSheet.absoluteFillObject,
    }});
