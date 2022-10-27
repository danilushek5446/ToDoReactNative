import React from 'react';
import {Provider} from 'react-redux';
import store from './src/store/store';
import Core from './src/core/Core';
import {NotifierWrapper} from 'react-native-notifier';

const App = () => {
  return (
    <NotifierWrapper>
      <Provider store={store}>
        <Core />
      </Provider>
    </NotifierWrapper>
  );
};

export default App;
