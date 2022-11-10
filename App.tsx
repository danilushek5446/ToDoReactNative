import React, { useEffect } from 'react';
import { Provider } from 'react-redux';
import { NotifierWrapper } from 'react-native-notifier';
import * as RNLocalize from 'react-native-localize';

import Myi18n from 'src/utils/Myi18n';
import store from './src/store/store';
import Core from './src/core/Core';

const App = () => {
  useEffect(() => {
    const listener = () => {
      const locale = RNLocalize.getLocales();
      Myi18n.locale = locale[0].languageCode;
    };

    RNLocalize.addEventListener('change', listener);

    return () => {
      RNLocalize.removeEventListener('change', listener);
    };
  }, []);
  return (
    <NotifierWrapper>
      <Provider store={store}>
        <Core />
      </Provider>
    </NotifierWrapper>
  );
};

export default App;
