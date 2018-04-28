import React from 'react';
import { View, Text } from 'react-native';
import axios from 'axios';

class AlbumList extends React.Component {
  componentDidMount() {
    axios.get('https://rallycoding.herokuapp.com/api/music_albums')
      .then(response => console.log(response));
    //console.log('TESTE');
  }
  
  render() {
    return (
      <View>
        <Text>"Album List!!!"</Text>
      </View>
    );
  };
};

export default AlbumList
