/* eslint-disable import/prefer-default-export */
import { StyleSheet } from 'react-native';

import colors from './colors';

const HomePageStyles = StyleSheet.create({
  atsTrackerContainer: {
    margin: 20,
  },
  container: {
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'center',
  },
  graphContainer: {
    margin: 20,
  },
  infoContainer: {
    margin: 20,
  },
  quoteContainer: {
    margin: 20,
  },
  title: {
    color: colors.primary,
    fontSize: 30,
    fontWeight: 'bold',
  },
});

export { HomePageStyles };
