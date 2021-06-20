import React, {Component} from 'react';
import {View, Text, ScrollView} from 'react-native';

import Categories from '../Components/Categories';
import TrendingNews from '../Components/TrendingNews';
import BBCNews from '../Components/BBCNews';
import CryptoNews from '../Components/CryptoNews';

class HomeScreen extends Component {
  componentDidMount() {}

  render() {
    return (
      <ScrollView showsVerticalScrollIndicator={false}>
        <View>
          <TrendingNews navigation={this.props.navigation} />
          <Categories
            navigation={this.props.navigation}
            style={{marginTop: 13}}
          />
          <Text
            style={{
              fontSize: 18,
              fontWeight: 'bold',
              backgroundColor: 'white',
              padding: 15,
              marginTop: 13,
            }}>
            BBC News
          </Text>
          <BBCNews navigation={this.props.navigation} />
          <Text
            style={{
              fontSize: 18,
              fontWeight: 'bold',
              backgroundColor: 'white',
              padding: 15,
              marginTop: 13,
            }}>
            Popular Crypto
          </Text>
          <CryptoNews navigation={this.props.navigation} />
        </View>
      </ScrollView>
    );
  }
}

export default HomeScreen;
