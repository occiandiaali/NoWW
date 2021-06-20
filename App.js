//import 'react-native-gesture-handler';
import * as React from 'react';

import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import HomeScreen from './src/Screens/HomeScreen';
import GetNews from './src/Screens/GetNews';
import WebViewComponent from './src/Components/WebView';

const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Top Stories" component={HomeScreen} />
        <Stack.Screen name="GetNews" component={GetNews} />
        <Stack.Screen name="Back" component={WebViewComponent} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
