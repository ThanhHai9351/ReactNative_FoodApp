

import React from 'react';
import {
  View,
} from 'react-native';
import {FoodList} from './screens';

function App(): React.JSX.Element {
  return (
    <View style={{flex: 1}}>
      <FoodList />
    </View>
  );
}


export default App;
