import type { FC } from 'react';
import React from 'react';
import type { ImageSourcePropType } from 'react-native';
import { View, TextInput, Image } from 'react-native';

import MyTranslator from 'src/utils/MyTranslator';
import MyText from '../MyText';
import { MyInputStyles } from './MyInputStyles';

type PropType = {
  textValue: string;
  setTextValue: React.Dispatch<React.SetStateAction<string>>;
  image?: ImageSourcePropType;
  placeholderText: string;
  isSecureTextEntry: boolean;
  titleText: string;
  isBold:boolean;
};

const MyInput: FC<PropType> = ({
  textValue,
  setTextValue,
  image,
  placeholderText,
  isSecureTextEntry,
  titleText,
  isBold,
}) => {
  return (
    <View style={MyInputStyles.inputPadding}>
      <View style={MyInputStyles.titlePaddig}>
            <MyText textValue={titleText} isBold={isBold} />
      </View>
      <TextInput
        style={MyInputStyles.inputStyles}
        value={textValue}
        onChangeText={setTextValue}
        secureTextEntry={isSecureTextEntry}
        placeholder={MyTranslator.t(placeholderText)}
      />
      {image && <Image style={MyInputStyles.passwordIcon} source={image} />}
    </View>
  );
};

export default MyInput;
