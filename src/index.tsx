import 'react-native-gesture-handler';
import React from 'react';
import { View, StatusBar } from 'react-native';
import 'intl';
import 'intl/locale-data/jsonp/pt-BR';

import Routes from './routes';

const App: React.FC = () => {
  GLOBAL.XMLHttpRequest =
    GLOBAL.originalXMLHttpRequest || GLOBAL.XMLHttpRequest;

  return (
    <View style={{ flex: 1 }}>
      <StatusBar
        barStyle="light-content"
        backgroundColor="transparent"
        translucent
      />
      <Routes />
    </View>
  );
};

export default App;
