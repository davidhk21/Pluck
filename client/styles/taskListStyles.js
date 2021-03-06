/* eslint-disable import/prefer-default-export */
import { StyleSheet } from 'react-native';

import colors from './colors';

const Screen = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
});

const TaskStyles = StyleSheet.create({
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    width: '50%',
  },
  container: {
    borderColor: colors.pacificBlue,
    borderWidth: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 5,
    margin: 5,
    borderRadius: 10,
  },
  delete: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 5,
    height: 40,
    width: 75,
    backgroundColor: 'red',
  },
  deleteText: {
    color: 'white',
  },
  pluck: {
    backgroundColor: colors.darkTurqoise,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 5,
    height: 40,
    width: 75,
  },
  pluckText: {
    color: 'white',
  },
  task: {
    color: colors.primary,
    fontWeight: 'bold',
  },
  taskContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '50%',
    alignItems: 'center',
  },
  // value: {
  //   borderColor: 'black',
  //   borderWidth: 1,
  //   marginRight: 10,
  // },

});

const Texts = StyleSheet.create({
  categories: {
    fontWeight: 'bold',
    fontSize: 20,
    marginTop: 5,
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
  back: {
    alignItems: 'center',
    position: 'absolute',
    top: 45,
    left: 10,
    paddingHorizontal: 20,
    paddingVertical: 5,
    borderRadius: 5,
    backgroundColor: colors.primary,
  },
  backText: {
    color: 'white',
  },
});

export { Screen, TaskStyles, Texts, Buttons };
