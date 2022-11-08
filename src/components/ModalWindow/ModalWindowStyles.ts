import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 22,
  },
  modalView: {
    margin: 20,
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 35,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2,
  },
  buttonOpen: {
    backgroundColor: '#F194FF',
  },
  buttonClose: {
    backgroundColor: '#2196F3',
  },
  textStyle: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  modalText: {
    marginBottom: 15,
    textAlign: 'center',
    color: 'black',
  },
});

// const styles = StyleSheet.create({
//   cancelBtn: {
//     marginTop: 10,
//     borderRadius: 12,
//     fontSize: 12,
//     borderWidth: 0,
//     color: '#2c3e50',
//     backgroundColor: '#fcfcfc',
//   },

//   deleteBtn: {
//     marginTop: 10,
//     borderRadius: 12,
//     fontSize: 12,
//     borderWidth: 0,
//     color: '#fff',
//     backgroundColor: '#ff3e4e',
//   },

//   closeBtn: {
//     marginTop: -7,
//     marginRight: -7,
//     top: 0,
//     right: 0,
//     shadowColor: '000',
//     shadowOffset: { width: 0, height: 5 },
//     shadowOpacity: 0.5,
//     shadowRadius: 20,
//     position: 'absolute',
//     alignSelf: 'flex-end',
//     borderRadius: 8,
//     fontSize: 18,
//     borderWidth: 0,
//     color: '#2c3e50',
//     backgroundColor: 'white',
//   },

//   actionsContainer: {
//     alignItems: 'center',
//     justifyContent: 'space-around',
//     flex: 1,
//   },

//   modalActions: {
//     position: 'absolute',
//     marginBottom: 10,
//     bottom: 2,
//   },

//   modalContent: {
//     padding: 10,
//     color: '#2c3e50',
//     fontSize: 14,
//     textAlign: 'center',
//   },

//   heading: {
//     margin: 0,
//     padding: 10,
//     color: '#2c3e50',
//     fontSize: 18,
//     textAlign: 'center',
//   },

//   modalHeader: {
//     height: 50,
//     backgroundColor: 'white',
//     overflow: 'hidden',
//     borderRadius: 16,
//   },

//   modal: {
//     width: 250,
//     height: 170,
//     backgroundColor: 'white',
//     color: 'white',
//     zIndex: 10,
//     borderRadius: 18,
//     shadowColor: '000',
//     shadowOffset: { width: 0, height: 5 },
//     shadowOpacity: 0.05,
//     shadowRadius: 20,
//   },

//   darkBG: {
//     backgroundColor: '000',
//     width: 100,
//     height: 100,
//     position: 'absolute',
//     top: '50%',
//     left: '50%',
//   },
// });

export default styles;
// .centered {
//   position: fixed;
//   top: 50%;
//   left: 50%;
//   transform: translate(-50%, -50%);
// }

// .modalActions {
//   position: absolute;
//   bottom: 2px;
//   margin-bottom: 10px;
//   width: 100%;
// }
