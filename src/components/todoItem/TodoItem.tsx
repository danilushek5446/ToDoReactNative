import React, { FC, useState } from 'react';
import { Button, Image, StyleSheet, Text, TextInput, TouchableHighlight, View } from 'react-native';


type PropType = {
  task: string;
  id: number;
  complete: boolean;
  toggleCheck(id: number): void;
  removeTask(id: number): void;
  toggleEditable(id: number): void;
  onPress(): void;
}

const TodoItem: FC<PropType> = ({ complete, id, task, toggleEditable, onPress, toggleCheck, removeTask }) => {
  const textDecorationLine = complete ? 'line-through' : 'none';
  const backgroundColor = complete ? 'palegreen' : '#f0ffff';

  return (
    <View style={styles.input}>
      <Text
        style={{ backgroundColor, textDecorationLine }}
        onLongPress={() => {
          toggleEditable(id)
          onPress()
        }}
        onPressOut={() => toggleCheck(id)}
      >
        {task}
      </Text>
      <TouchableHighlight onPress={() => removeTask(id)}>
        <View
          onPointerUp={() => removeTask(id)}
          style={styles.button}
        >
          <Image
            style={styles.button}
            source={require('../../assets/3481306.png')}
          />
        </View>
      </TouchableHighlight>
    </View>
  );
};

const styles = StyleSheet.create({
  input: {
    width: 200,
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    backgroundColor: '#f0ffff',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  button: {
    width: 25,
    height: 25,
  }
});

export default TodoItem;