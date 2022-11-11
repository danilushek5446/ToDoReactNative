import React, { useEffect } from 'react';
import * as RNLocalize from 'react-native-localize';

import { Navigation } from 'src/navigation/Navigation';
import { setCurrentLanguage } from 'src/store/currentLanguageSlice/currentLanguageSlice';
import { useAppDispatch, useAppSelector } from 'src/store/hooks';
import MyI18n from 'src/utils/MyI18n';

const Core = () => {
  const dispatch = useAppDispatch();
  const currenLanguage = useAppSelector((state) => state.currentLanguage.language);

  useEffect(() => {
    const locales = RNLocalize.getLocales();

    if (Array.isArray(locales)) {
      MyI18n.locale = locales[0].languageCode;

      dispatch(setCurrentLanguage(locales[0].languageCode));
    }

    const listener = () => {
      const locale = RNLocalize.getLocales();
      MyI18n.locale = locale[0].languageCode;

      dispatch(setCurrentLanguage(locale[0].languageCode));
    };

    RNLocalize.addEventListener('change', listener);

    return () => {
      RNLocalize.removeEventListener('change', listener);
    };
  }, []);

  useEffect(() => {
    MyI18n.locale = currenLanguage;
  }, [currenLanguage]);
  return <Navigation />;
};

export default Core;
