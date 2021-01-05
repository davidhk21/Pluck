/* eslint-disable import/prefer-default-export */
import { StyleSheet } from 'react-native';

import colors from './colors';

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
    marginTop: '40%',
    fontWeight: 'bold',
  },
  chooseCategory: {
    fontSize: 20,
    textAlign: 'center',
    marginTop: 20,
    fontWeight: 'bold',
  },
  chooseValue: {
    fontSize: 20,
    textAlign: 'center',
    marginTop: 20,
    fontWeight: 'bold',
  },
});

const DropDown = StyleSheet.create({
  container: {
    marginHorizontal: 10,
    marginTop: 10,
  },
});

const Buttons = StyleSheet.create({
  addTask: {
    borderRadius: 10,
    width: 300,
    height: 40,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: colors.brightTurqoise,
  },
  addTaskText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 17.5,
  },
  buttonsContainer: {
    alignItems: 'center',
    marginTop: 30,
  },
  goBack: {
    borderRadius: 10,
    width: 300,
    height: 40,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: colors.irisBlue,
  },
  goBackText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 17.5,
  },
});

export { AddTaskStyles, Texts, DropDown, Buttons };
