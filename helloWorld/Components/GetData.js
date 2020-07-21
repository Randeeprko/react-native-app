import React, {Component} from 'react';
import {
  ActivityIndicator,
  FlatList,
  Text,
  View,
  Button,
  TouchableOpacity,
} from 'react-native';

export default class GetData extends Component {
  constructor(props) {
    super(props);

    this.state = {
      data: [],
      isLoading: true,
    };
  }

  getData = () => {
    fetch('https://reactnative.dev/movies.json')
      .then(response => response.json())
      .then(json => {
        this.setState({data: json.movies});
      })
      .catch(error => console.error(error))
      .finally(() => {
        this.setState({isLoading: false});
      });
  };

  render() {
    const {data, isLoading} = this.state;

    return (
      <View style={{flex: 4, padding: 24, backgroundColor: 'maroon'}}>
        <View
          style={{
            flex: 2,
            padding: 30,
            backgroundColor: 'black',
            borderColor: 'red',
          }}>
          <Button
            title="START"
            color="maroon"
            onPress={() => {
              alert('You Tapped the button');
            }}
            accessibilityLabel="Learn more about this button"
          />
        </View>

        {isLoading ? (
          <Text>Hello World!</Text>
        ) : (
          <FlatList
            data={data}
            keyExtractor={({id}, index) => id}
            renderItem={({item}) => (
              <Text>
                {item.title}, {item.releaseYear}
              </Text>
            )}
          />
        )}
        <Text>Bye World</Text>
      </View>
    );
  }
}
