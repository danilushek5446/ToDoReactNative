import type { FC } from 'react';
import React from 'react';
import { View, Image, Text } from 'react-native';

import MyButton from 'src/components/MyButton/MyButton';
import MyText from 'src/components/MyText/MyText';
import images from 'src/constants/images';
import MyI18n from 'src/utils/MyI18n';
import { setItemToStrorage } from 'src/utils/storageWorker';

import { onboardingScreenStyles } from './OnboardingScreenStyles';

type PropType = {
  setOnboarding: React.Dispatch<React.SetStateAction<boolean>>;
};

const OnboardingScreen: FC<PropType> = ({ setOnboarding }) => {
  const onPress = () => {
    setItemToStrorage('onboarding', 'false');
    setOnboarding(false);
  };

  return (
    <View style={onboardingScreenStyles.screenContainer}>
      <View>
        <Image source={images.elipsis} />
      </View>
      <View style={onboardingScreenStyles.contentContainer}>
        <Image source={images.onBoardingPicture} />
        <MyText textValue="onBoardTitle" />
        <View style={onboardingScreenStyles.mainTextContainer}>
          <Text style={onboardingScreenStyles.mainText}>
            {MyI18n.t('onBoardTextContent')}
          </Text>
        </View>
      </View>
      <View style={onboardingScreenStyles.buttonContainer}>
        <MyButton onPress={onPress} textValue="get started" size="big" />
      </View>
    </View>
  );
};

export default OnboardingScreen;
