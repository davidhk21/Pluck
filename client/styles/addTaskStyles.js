/* eslint-disable import/prefer-default-export */
import { StyleSheet } from 'react-native';

// import colors from './colors';

const AddTaskStyles = StyleSheet.create({
  input: {
    borderWidth: 1,
    borderRadius: 10,
    borderColor: '#777',
    padding: 8,
    margin: 10,
    width: 300,
  },
});

const Texts = StyleSheet.create({
  enterTask: {
    fontSize: 20,
  },
  chooseCategory: {
    fontSize: 20,
  },
  chooseValue: {
    fontSize: 20,
  },
});

export { AddTaskStyles, Texts };
