import React, {Component} from 'react';
import {
  ScrollView,
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';

const categories = [
  'Health',
  'Science',
  'Business',
  'Sports',
  'Entertainment',
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
          <TouchableOpacity
            key={index}
            onPress={() =>
              this.props.navigation.navigate('GetNews', {
                category,
              })
            }>
            <View>
              <Text style={styles.category_label}>{category}</Text>
            </View>
          </TouchableOpacity>
        ))}
      </ScrollView>
    );
  }
}

export default Categories;
