import type { FC } from 'react';
import React from 'react';
import type { ImageSourcePropType } from 'react-native';
import { View, TextInput, Image } from 'react-native';
import MyI18n from 'src/utils/MyI18n';

import MyText from '../MyText';
import { MyInputStyles } from './MyInputStyles';

type PropType = {
  textValue: string;
  setTextValue: React.Dispatch<React.SetStateAction<string>>;
  image?: ImageSourcePropType;
  placeholderText: string;
  isSecureTextEntry: boolean;
  titleText: string;
};

const MyInput: FC<PropType> = ({
  textValue,
  setTextValue,
  image,
  placeholderText,
  isSecureTextEntry,
  titleText,
}) => {
  return (
    <View style={MyInputStyles.inputPadding}>
      <View style={MyInputStyles.titlePaddig}>
            <MyText textValue={titleText} />
      </View>
      <TextInput
        style={MyInputStyles.inputStyles}
        value={textValue}
        onChangeText={setTextValue}
        secureTextEntry={isSecureTextEntry}
        placeholder={MyI18n.t(placeholderText)}
      />
      {image && <Image style={MyInputStyles.passwordIcon} source={image} />}
    </View>
  );
};

export default MyInput;
