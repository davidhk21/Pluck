/* eslint-disable import/prefer-default-export */
import { StyleSheet } from 'react-native';

// import colors from './colors';

const AddTaskStyles = StyleSheet.create({
  input: {
    borderWidth: 1,
    borderRadius: 10,
    borderColor: '#777',
    padding: 8,
    marginHorizontal: 10,
    marginTop: 10,
    width: '95%',
  },
});

const Texts = StyleSheet.create({
  enterTask: {
    fontSize: 20,
    textAlign: 'center',
    marginTop: 20,
  },
  chooseCategory: {
    fontSize: 20,
    textAlign: 'center',
    marginTop: 20,
  },
  chooseValue: {
    fontSize: 20,
    textAlign: 'center',
    marginTop: 20,
  },
});

const DropDown = StyleSheet.create({
  container: {
    marginHorizontal: 10,
    marginTop: 10,
  },
});

export { AddTaskStyles, Texts, DropDown };
