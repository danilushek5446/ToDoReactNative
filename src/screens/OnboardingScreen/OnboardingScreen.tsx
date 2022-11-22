import type { FC } from 'react';
import React from 'react';
import { View, Image, Text } from 'react-native';

import MyButton from 'src/components/MyButton';
import MyText from 'src/components/MyText';
import images from 'src/constants/images';
import MyTranslator from 'src/utils/MyTranslator';
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
        <View style={onboardingScreenStyles.contentContainer}>
          <Image source={images.onBoardingPicture} />

          <View style={onboardingScreenStyles.titleContainer}>
            <MyText textValue="onBoardTitle" isBold />
          </View>

          <View style={onboardingScreenStyles.mainTextContainer}>
            <Text style={onboardingScreenStyles.mainText}>
              {MyTranslator.t('onBoardTextContent')}
            </Text>
          </View>
        </View>

        <View style={onboardingScreenStyles.buttonContainer}>
          <MyButton onPress={onPress} textValue="get started" size="big" />
        </View>
      </View>
    </View>
  );
};

export default OnboardingScreen;
