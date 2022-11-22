import type { FC } from 'react';
import React, { useState } from 'react';
import { Alert, Modal, Pressable, View, TextInput, Text } from 'react-native';
import { Notifier } from 'react-native-notifier';

import { useAppDispatch } from 'src/store/hooks';
import { addToDo } from 'src/store/todoSlice';
import MyTranslator from 'src/utils/MyTranslator';
import MyText from '../MyText/MyText';
import styles from './TodoModalStyles';

type PropType = {
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
  currentText: string | null;
  todoId: number | null;
  isEdit: boolean;
  changeTodo(id: number, taskText: string): void;
};

const AddTodoModal: FC<PropType> = ({ setIsOpen, currentText, isEdit, todoId, changeTodo }) => {
  const [inputValue, setInputValue] = useState(currentText || '');
  const dispatch = useAppDispatch();

  const onAccept = () => {
    if (!inputValue) {
      return;
    }

    if (inputValue.length > 160) {
      Notifier.showNotification({
        title: MyTranslator.t('Too many symbols'),
        duration: 0,
        showAnimationDuration: 800,
        hideOnPress: true,
      });

      return;
    }

    if (isEdit && todoId) {
      changeTodo(todoId, inputValue);

      setIsOpen(false);

      return;
    }

    setIsOpen(false);
    dispatch(addToDo(inputValue));
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
            <MyText textValue={isEdit ? 'Edit TODO' : 'Add new TODO'} isBold />
          </View>

          <View style={styles.inputContainer}>
            <TextInput
              value={inputValue}
              onChangeText={setInputValue}
              multiline
              numberOfLines={4}
              placeholder={isEdit ? 'Edit TODO' : 'Add new TODO'}
              style={styles.inputText}
            />
          </View>

          <View style={styles.countSymbolsContainer}>
            <Text style={styles.inputText}>
              {`${inputValue.length} / 160 ${MyTranslator.t('symbols')}`}
            </Text>
          </View>

          <View style={styles.buttonscontainer}>
            <Pressable
              style={[styles.button, styles.buttonClose]}
              onPress={() => setIsOpen(false)}
            >
              <Text style={styles.cancelText}>CANCEL</Text>
            </Pressable>

            <Pressable
              style={[styles.button, styles.buttonOpen]}
              onPress={onAccept}
            >
              <Text style={styles.addText}>{isEdit ? 'CHANGE' : 'ADD'}</Text>
            </Pressable>
          </View>
        </View>
      </View>
    </Modal>
  );
};

export default AddTodoModal;