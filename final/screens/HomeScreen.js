import React from 'react';
import {
  Image,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  FlatList,
  TouchableOpacity,
  View,
} from 'react-native';
import { WebBrowser } from 'expo';

import { MonoText } from '../components/StyledText';

export default class HomeScreen extends React.Component {
  static navigationOptions = {
    header: null,
  };
  _gotoScreen = (key) => {
    console.log("Going to " + key);
  }
  render() {
    const {navigate} = this.props.navigation;
    return (
      <View style={styles.container}>
        <ScrollView style={styles.container} contentContainerStyle={styles.contentContainer}>
          <View style={styles.getStartedContainer}>
            <Text style={styles.getStartedText}>Orlando Theme Parks</Text>
            <Text style={styles.getStartedText}>Filters:</Text>
            <FlatList
             data={[
               {key: 'Walt Disney World',image: require('../assets/images/wdw.jpg')}, 
               {key: 'Universal Orlando',image: require('../assets/images/uo.jpg')},
               {key: 'Sea World Orlando',image: require('../assets/images/swo.jpg')},
             ]}
             keyExtractor={this._keyExtractor}
              renderItem={({item}) => <TouchableOpacity
                  onPress={(event) => 
                  { 
                    navigate("FilterDetail",{
                      title:item.key,
                      image:item.image})
                  }
                  }>
                  <Text>{item.key}</Text>
                  <Image source={item.image} style={{
                  width:300,height:250,
                  resizeMode:"contain"}} />
                </TouchableOpacity>}
            />
            <Text style={styles.getStartedText}>All Parks:</Text>
            <FlatList
             data={[
               {key: 'Magic Kingdom',image: require('../assets/images/mk.jpg'),desc: 'The original Walt Disney World theme park, featuring Cinderella Castle, pixie dust, and plenty of Mickey Mouse Magic.'}, 
               {key: 'EPCOT',image: require('../assets/images/epcot.jpg'),desc: 'See the world at the World Showcase, or explore the future, at Walt\'s Experimental Prototype Community Of Tomorrow.'},
               {key: 'Hollywood Studios',image: require('../assets/images/hws.jpg'),desc: 'Immerse yourself in the movies at Hollywood Studios, where everyone\'s favorite films come to life.'},
               {key: 'Animal Kingdom',image: require('../assets/images/ak.jpg'),desc: 'A park filled with exotic animals and fun experiences in the wild, where guests can partake in the glorious thrills of nature.'},
               {key: 'Disney Springs',image: require('../assets/images/ds.jpg'),desc: 'In this modern shopping district, hit a few stores or grab a bite to eat, and enjoy some live entertainment and Disney\'s night life at Downtown Disney.'},
               {key: 'Typhoon Lagoon',image: require('../assets/images/tl.jpg'),desc: 'Get away to a beautiful tropical paradise, and try and escape the typhoon in the world\'s largest wave pool!'},
               {key: 'Blizzard Beach',image: require('../assets/images/bb.jpg'),desc: 'Cool off in the heat of the summer at Blizzard Beach! You can enjoy thrills like sliding down Summit Plummet, or just relax by the pool.'},
               {key: 'Universal Studios',image: require('../assets/images/us.png'),desc: 'Make your way through some of history\'s best classic films, while riding awesome thrill rides and enjoying great live shows!'},
               {key: 'Islands Of Adventure',image: require('../assets/images/ioa.png'),desc: 'Here, guests can be immersed in some of the best movies out there, including Jurassic Park and Harry Potter.'},
               {key: 'City Walk',image: require('../assets/images/cw.jpg'),desc: 'Universal\'s shopping district, where guests can eat some great food, see some cool sights, and hear some awesome live music for a great night out with friends.'},
               {key: 'Volcano Bay',image: require('../assets/images/vb.jpg'),desc: 'Have a great time relaxing by the pool, and when you want some adventure, climb up the volcano Krakatau and have some fun!'},
               {key: 'Sea World',image: require('../assets/images/sw.jpg'),desc: 'Sea World is a place for the whole family to learn about marine life, see some fantastic animals, and ride some thrilling rides!'},
               {key: 'Discovery Cove',image: require('../assets/images/dc.jpg'),desc: 'A Sea World theme park where guests can experience marine wildlife, and swim with creatures such as tropical fish, stingrays, and, of course, bottlenose dolphins.'},
               {key: 'Aquatica',image: require('../assets/images/aqu.jpg'),desc: 'Sea World\'s water park is a great place to relax by the pool, or experience some fun Southern Pacific adventures by the sea.'}
              ]}
             keyExtractor={this._keyExtractor}
              renderItem={({item}) => <TouchableOpacity
                  onPress={(event) => 
                  { 
                    navigate("Detail",{
                      title:item.key,
                      image:item.image,
                      desc:item.desc})
                  }
                  }>
                  <Text>{item.key}</Text>
                  <Image source={item.image} style={{
                  width:300,height:250,
                  resizeMode:"contain"}} />
                </TouchableOpacity>}
            />
          </View>
        </ScrollView>
      </View>
    );
  }

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  developmentModeText: {
    marginBottom: 20,
    color: 'rgba(0,0,0,0.4)',
    fontSize: 14,
    lineHeight: 19,
    textAlign: 'center',
  },
  contentContainer: {
    paddingTop: 30,
  },
  welcomeContainer: {
    alignItems: 'center',
    marginTop: 10,
    marginBottom: 20,
  },
  welcomeImage: {
    width: 100,
    height: 80,
    resizeMode: 'contain',
    marginTop: 3,
    marginLeft: -10,
  },
  getStartedContainer: {
    alignItems: 'center',
    marginHorizontal: 50,
  },
  homeScreenFilename: {
    marginVertical: 7,
  },
  codeHighlightText: {
    color: 'rgba(96,100,109, 0.8)',
  },
  codeHighlightContainer: {
    backgroundColor: 'rgba(0,0,0,0.05)',
    borderRadius: 3,
    paddingHorizontal: 4,
  },
  getStartedText: {
    fontSize: 17,
    color: 'rgba(96,100,109, 1)',
    lineHeight: 24,
    textAlign: 'center',
  },
  tabBarInfoContainer: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    ...Platform.select({
      ios: {
        shadowColor: 'black',
        shadowOffset: { height: -3 },
        shadowOpacity: 0.1,
        shadowRadius: 3,
      },
      android: {
        elevation: 20,
      },
    }),
    alignItems: 'center',
    backgroundColor: '#fbfbfb',
    paddingVertical: 20,
  },
  tabBarInfoText: {
    fontSize: 17,
    color: 'rgba(96,100,109, 1)',
    textAlign: 'center',
  },
  navigationFilename: {
    marginTop: 5,
  },
  helpContainer: {
    marginTop: 15,
    alignItems: 'center',
  },
  helpLink: {
    paddingVertical: 15,
  },
  helpLinkText: {
    fontSize: 14,
    color: '#2e78b7',
  },
});
