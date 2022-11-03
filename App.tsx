import React from 'react';
import { Provider } from 'react-redux';
import { NotifierWrapper } from 'react-native-notifier';

import store from './src/store/store';
import Core from './src/core/Core';

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
