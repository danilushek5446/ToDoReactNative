import type { FC } from 'react';
import React, { useEffect, useState } from 'react';
import * as RNLocalize from 'react-native-localize';
import RNBootSplash from 'react-native-bootsplash';

import { Navigation } from 'src/navigation/Navigation';
import OnboardingScreen from 'src/screens/OnboardingScreen/OnboardingScreen';
import { setCurrentLanguage } from 'src/store/currentLanguageSlice/currentLanguageSlice';
import { useAppDispatch, useAppSelector } from 'src/store/hooks';
import MyTranslator from 'src/utils/MyTranslator';
import { getItemFromStrorage } from 'src/utils/storageWorker';

const Core: FC = () => {
  const dispatch = useAppDispatch();
  const currenLanguage = useAppSelector((state) => state.currentLanguage.language);

  const [isOnboarding, setIsOnboarding] = useState(true);

  useEffect(() => {
    (async () => {
      const isFirstLoad = await getItemFromStrorage('onboarding');

      if (!isFirstLoad) {
        RNBootSplash.hide({ fade: true });

        return;
      }

      setIsOnboarding(false);
    })();

    const locales = RNLocalize.getLocales();

    if (Array.isArray(locales)) {
      MyTranslator.locale = locales[0].languageCode;

      dispatch(setCurrentLanguage(locales[0].languageCode));
    }

    const listener = () => {
      const locale = RNLocalize.getLocales();
      MyTranslator.locale = locale[0].languageCode;

      dispatch(setCurrentLanguage(locale[0].languageCode));
    };

    RNLocalize.addEventListener('change', listener);

    return () => {
      RNLocalize.removeEventListener('change', listener);
    };
  }, []);

  useEffect(() => {
    MyTranslator.locale = currenLanguage;
  }, [currenLanguage]);

  return (
    <>
      {
        isOnboarding
          ? <OnboardingScreen setOnboarding={setIsOnboarding} />
          : <Navigation />
      }
    </>
  );
};

export default Core;
