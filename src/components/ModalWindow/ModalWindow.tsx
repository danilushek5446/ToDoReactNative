import type { FC } from 'react';
import React from 'react';
import { Alert, Modal, Pressable, View } from 'react-native';
import type { ModalType } from 'src/types/modalTypes';

import type { NavigatorRootStackParamListType } from 'src/types/navigationTypes';
import MyText from '../MyText/MyText';
import styles from './ModalWindowStyles';

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
            <MyText textValue={modalInfo.messageTitle || ''} />
          </View>
          <View style={styles.modalText}>
            <MyText textValue={modalInfo.messageBody || ''} />
          </View>
          {modalInfo.data?.type === 'Profile'
            ? (
              <View style={styles.buttonscontainer}>
                <Pressable
                  style={[styles.button, styles.buttonOpen]}
                  onPress={onAccept}
                >
                  <MyText textValue="Accept" />
                </Pressable>
                <Pressable
                  style={[styles.button, styles.buttonClose]}
                  onPress={() => setIsOpen(false)}
                >
                  <MyText textValue="Decline" />
                </Pressable>
              </View>
            )
            : (
              <Pressable
                style={[styles.button, styles.buttonClose]}
                onPress={() => setIsOpen(false)}
              >
                <MyText textValue="Ok" />
              </Pressable>
            )
          }
        </View>
      </View>
    </Modal>
  );
};

export default MyModal;
