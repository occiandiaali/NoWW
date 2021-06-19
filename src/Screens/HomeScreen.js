import React, {Component} from 'react';
import {View, Text} from 'react-native';

import Categories from '../Components/Categories';
import TrendingNews from '../Components/TrendingNews';

class HomeScreen extends Component {
  componentDidMount() {}

  render() {
    return (
      <View>
        <TrendingNews />
        <Categories />
      </View>
    );
  }
}

export default HomeScreen;
