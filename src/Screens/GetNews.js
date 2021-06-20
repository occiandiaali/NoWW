import React, {Component} from 'react';
import {
  View,
  ActivityIndicator,
  ScrollView,
  Image,
  Text,
  StyleSheet,
  Dimensions,
  TouchableOpacity,
} from 'react-native';

import {NEWS_API_KEY} from '@env';

const deviceHeight = Dimensions.get('window').height;
const deviceWidth = Dimensions.get('window').width;

const styles = StyleSheet.create({
  articleImg: {
    height: 100,
    width: 100,
    borderRadius: 12,
  },
  articleView: {
    display: 'flex',
    flexDirection: 'row',
    padding: 12,
    margin: 6,
    backgroundColor: 'white',
    borderRadius: 10,
    elevation: 8,
    width: deviceWidth - 10,
  },
  articleText: {
    padding: 12,
    marginTop: 8,
    width: deviceWidth - 132,
  },
  loading: {
    height: deviceHeight,
    width: deviceWidth,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

class GetNews extends Component {
  state = {
    news: [],
  };

  componentDidMount() {
    this.props.navigation.setOptions({
      title: this.props.route.params.category,
    });
    fetch(
      `https://newsapi.org/v2/top-headlines?category=${this.props.route.params.category}&country=ng&apiKey=${NEWS_API_KEY}`,
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
      <View style={{alignItems: 'center', padding: 10}}>
        {this.state.news.length === 0 ? (
          <ActivityIndicator
            style={styles.loading}
            size="large"
            color="orange"
          />
        ) : (
          <ScrollView showsVerticalScrollIndicator={false}>
            {this.state.news.map((news, index) =>
              news.urlToImage ? (
                <TouchableOpacity
                  key={index}
                  onPress={() =>
                    this.props.navigation.navigate('Back', {
                      url: news.url,
                    })
                  }>
                  <View style={styles.articleView}>
                    <Image
                      style={styles.articleImg}
                      source={{uri: `${news.urlToImage}`}}
                      alt={`${news.title}`}
                    />
                    <Text style={styles.articleText}>{news.title}</Text>
                  </View>
                </TouchableOpacity>
              ) : null,
            )}
          </ScrollView>
        )}
      </View>
    );
  }
}

export default GetNews;
