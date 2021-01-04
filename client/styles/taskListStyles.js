/* eslint-disable import/prefer-default-export */
import { StyleSheet } from 'react-native';

import colors from './colors';

const Screen = StyleSheet.create({
  container: {
    flex: 1,
  },
});

const TaskStyles = StyleSheet.create({
  buttonContainer: {
    borderColor: 'black',
    borderWidth: 1,
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  container: {
    borderColor: 'black',
    borderWidth: 1,
  },
  delete: {
    borderColor: 'black',
    borderWidth: 1,
  },
  pluck: {
    borderColor: 'black',
    borderWidth: 1,
  },
  task: {
    borderColor: 'black',
    borderWidth: 1,
    color: colors.primary,
    fontWeight: 'bold',
  },
  taskContainer: {
    borderColor: 'black',
    borderWidth: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  value: {
    borderColor: 'black',
    borderWidth: 1,
    marginRight: 10,
  },

});

const Texts = StyleSheet.create({
  categories: {
    fontWeight: 'bold',
    fontSize: 20,
  },
  header: {
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 25,
  },
});

const Buttons = StyleSheet.create({
  addTask: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: colors.primary,
    width: 70,
    height: 70,
    borderRadius: 50,
    position: 'absolute',
    bottom: 25,
    right: 25,
  },
  addTaskText: {
    fontSize: 20,
    color: 'white',
  },
});

export { Screen, TaskStyles, Texts, Buttons };
