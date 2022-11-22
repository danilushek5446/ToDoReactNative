import type { FC } from 'react';
import React, { useState } from 'react';
import type { ImageSourcePropType } from 'react-native';
import { TouchableOpacity, View, TextInput, Image } from 'react-native';

import MyTranslator from 'src/utils/MyTranslator';
import MyText from '../MyText';
import { MyInputStyles } from './MyInputStyles';

type PropType = {
  textValue: string;
  setTextValue: React.Dispatch<React.SetStateAction<string>>;
  image?: ImageSourcePropType;
  placeholderText: string;
  titleText: string;
  isBold: boolean;
  isSecureTextEntry: boolean;
};

const MyInput: FC<PropType> = ({
  textValue,
  setTextValue,
  image,
  placeholderText,
  titleText,
  isBold,
  isSecureTextEntry,
}) => {
  const [isFieldHide, setIsSecureField] = useState(isSecureTextEntry);
  return (
    <View style={MyInputStyles.inputPadding}>
      <View style={MyInputStyles.titlePaddig}>
        <MyText textValue={titleText} isBold={isBold} />
      </View>
      <TextInput
        style={MyInputStyles.inputStyles}
        value={textValue}
        onChangeText={setTextValue}
        secureTextEntry={isFieldHide}
        placeholder={MyTranslator.t(placeholderText)}
      />
      {image && (
        <TouchableOpacity
          style={MyInputStyles.passwordIcon}
          onPress={() => setIsSecureField(!isFieldHide)}
        >
          <Image source={image} />
        </TouchableOpacity>
      )}
    </View>
  );
};

export default MyInput;
