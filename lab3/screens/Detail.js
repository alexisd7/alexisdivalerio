import React from 'react';
import { ScrollView, StyleSheet, FlatList, TouchableOpacity, Image, Text, View } from 'react-native';
import { ExpoLinksView } from '@expo/samples';

export default class Detail extends React.Component {
  static navigationOptions = {
    title: 'Details',
  };

  render() {
    return (
      <ScrollView style={styles.container}>
        {
            <View>
            <FlatList
            data={[{key: 'cat1',image: require('../assets/images/cat1.png')}, {key: 'cat2',image: require('../assets/images/cat2.png')}, {key: 'hazel',image: require('../assets/images/hazel.jpg')}]}
            keyExtractor={this._keyExtractor}
             renderItem={({item}) => <TouchableOpacity onPress={(event) => { console.log(item.key) }}>
               <Image source={item.image} style={{width:200,height:200}} onPress={() => navigate('Detail')}/>
             </TouchableOpacity>}
           />
           <Text>Image 1: Hiding Cat</Text>
           <Text>Image 2: Relaxing Cat</Text>
           <Text>Image 3: Hazel</Text>
        </View>
        }
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 15,
    backgroundColor: '#fff',
  },
});