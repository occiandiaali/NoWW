import React, {Component} from 'react';
import {
  ScrollView,
  View,
  ActivityIndicator,
  Image,
  Text,
  StyleSheet,
} from 'react-native';

import {NEWS_API_KEY} from '@env';

const styles = StyleSheet.create({
  trending_imgs: {
    height: 180,
    width: 200,
    borderRadius: 12,
  },
  trending_view: {
    margin: 10,
  },
  trending_title: {
    width: 200,
    textAlign: 'justify',
  },
});

class TrendingNews extends Component {
  state = {
    news: [],
  };

  componentDidMount() {
    fetch(
      `https://newsapi.org/v2/top-headlines?country=ng&apiKey=${NEWS_API_KEY}`,
    )
      .then(res => res.json())
      .then(response => {
        this.setState({
          news: response.articles,
        });
        // console.log(this.state.news.length);
      })
      .catch(error => console.log(`Error: ${error}`));
  }

  render() {
    return (
      <View>
        {this.state.news.length === 0 ? (
          <ActivityIndicator color="orange" size="large" />
        ) : (
          <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
            {this.state.news.map((news, index) => (
              <View key={index} style={styles.trending_view}>
                <Image
                  style={styles.trending_imgs}
                  source={{uri: `${news.urlToImage}`}}
                />
                <Text style={styles.trending_title}>{news.title}</Text>
              </View>
            ))}
          </ScrollView>
        )}
      </View>
    );
  }
}

export default TrendingNews;
