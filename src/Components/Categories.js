import React, {Component} from 'react';
import {ScrollView, View, Text, StyleSheet} from 'react-native';

const categories = [
  'Health',
  'Science',
  'Business',
  'Sports',
  'Entertainment',
  'Politics',
  'Technology',
];

const styles = StyleSheet.create({
  category_label: {
    padding: 10,
    borderWidth: 1.5,
    borderColor: 'orange',
    fontSize: 19,
    fontWeight: 'bold',
    margin: 10,
    borderRadius: 10,
  },
});

class Categories extends Component {
  state = {};
  render() {
    return (
      <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
        {categories.map((category, index) => (
          <View key={index}>
            <Text style={styles.category_label}>{category}</Text>
          </View>
        ))}
      </ScrollView>
    );
  }
}

export default Categories;
