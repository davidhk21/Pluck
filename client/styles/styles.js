/* eslint-disable import/prefer-default-export */
import { StyleSheet } from 'react-native';

import colors from './colors';

const AddTaskStyles = StyleSheet.create({
  input: {
    borderWidth: 1,
    borderColor: '#777',
    padding: 8,
    margin: 10,
    width: 200,
  },
});

const HomePageStyles = StyleSheet.create({
  atsTrackerContainer: {
    margin: 20,
    flex: 1,
  },
  container: {
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'center',
  },
  date: {
    position: 'absolute',
    left: 0,
    top: 40,
  },
  graphContainer: {
    flex: 2,
    margin: 20,
  },
  infoContainer: {
    margin: 20,
    flexDirection: 'row',
    flex: 1,
  },
  limit: {
    fontSize: 20,
    textDecorationLine: 'underline',
  },
  limitVal: {
    fontSize: 20,
    marginTop: 20,
  },
  limitContainer: {
    marginLeft: 30,
  },
  logoContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  quoteContainer: {
    flex: 1,
    margin: 20,
  },
  title: {
    color: colors.primary,
    fontSize: 30,
    fontWeight: 'bold',
  },
  wantsBudget: {
    fontSize: 20,
    textDecorationLine: 'underline',
  },
  wantsBudgetPct: {
    fontSize: 20,
    marginTop: 20,
  },
  wantsContainer: {
    marginRight: 30,
  },
});

export { HomePageStyles, AddTaskStyles };
