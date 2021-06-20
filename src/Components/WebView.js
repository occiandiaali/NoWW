import React, {Component} from 'react';
import {WebView} from 'react-native-webview';

class WebViewComponent extends Component {
  render() {
    return <WebView source={{uri: `${this.props.route.params.url}`}} />;
  }
}

export default WebViewComponent;
