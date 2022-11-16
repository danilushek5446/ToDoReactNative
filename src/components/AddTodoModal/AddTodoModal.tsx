import { FC, useState } from 'react';
import React from 'react';
import { Alert, Modal, Pressable, View, TextInput, Text } from 'react-native';

import { useAppDispatch } from 'src/store/hooks';
import MyText from '../MyText/MyText';
import styles from './AddTodoModalStyles';
import { addToDo } from 'src/store/todoSlice/todoSlice';

type PropType = {
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

const AddTodoModal: FC<PropType> = ({ setIsOpen }) => {
  const [inputValue, setInputValue] = useState('');
  const dispatch = useAppDispatch();

  const onAccept = () => {
    if (!inputValue) {
      return;
    }

    dispatch(addToDo(inputValue))
  };
  return (
    <Modal
      animationType="slide"
      transparent
      onRequestClose={() => {
        Alert.alert('Modal has been closed.');
        setIsOpen(false);
      }}
    >
      <View style={styles.centeredView}>
        <View style={styles.modalView}>
          <View style={styles.modalText}>
            <MyText textValue='Add new TODO' isBold />
          </View>

          <View>
            <TextInput
              value={inputValue}
              onChangeText={setInputValue}
              multiline
              numberOfLines={4}
            />
          </View>

          <View style={styles.buttonscontainer}>
            <Pressable
              style={[styles.button, styles.buttonClose]}
              onPress={() => setIsOpen(false)}
            >
              <Text>CANCEL</Text>
            </Pressable>

            <Pressable
              style={[styles.button, styles.buttonOpen]}
              onPress={onAccept}
            >
              <Text>ADD</Text>
            </Pressable>
          </View>
        </View>
      </View>
    </Modal>
  );
};

export default AddTodoModal;
