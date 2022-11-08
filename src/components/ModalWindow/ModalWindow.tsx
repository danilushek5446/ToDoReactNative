import type { FC } from 'react';
import React from 'react';
import { Text, Alert, Button, Modal, Pressable, Touchable, View } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';

import type { NavigatorRootStackParamListType } from 'src/types/navigationTypes';
import styles from './ModalWindowStyles';

type DataType = {
  type?: string;
};

type ModalType = {
  messageBody?: string;
  messageTitle?: string;
  data?: DataType;
};

type PropType = {
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
  setInitialRoute: React.Dispatch<React.SetStateAction<keyof NavigatorRootStackParamListType>>;
  modalInfo: ModalType;
};

const MyModal: FC<PropType> = ({ setIsOpen, setInitialRoute, modalInfo }) => {
  const onAccept = () => {
    setInitialRoute('Profile');
    setIsOpen(false);
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
            <Text>{modalInfo.messageTitle}</Text>
          </View>
          <View style={styles.modalText}>
            <Text>{modalInfo.messageBody}</Text>
          </View>
          {modalInfo.data?.type === 'Profile'
            ? (
              <>
                <Pressable
                  style={[styles.button, styles.buttonClose]}
                  onPress={onAccept}
                >
                  <Text>Accept</Text>
                </Pressable>
                <Pressable
                  style={[styles.button, styles.buttonClose]}
                  onPress={() => setIsOpen(false)}
                >
                  <Text>Decline</Text>
                </Pressable>
              </>
            )
            : (
            <Pressable
              style={[styles.button, styles.buttonClose]}
              onPress={() => setIsOpen(false)}
            >
              <Text>Ok</Text>
            </Pressable>
            )
          }
        </View>
      </View>
    </Modal>
  );
};

export default MyModal;
