/* eslint-disable import/prefer-default-export */
import { StyleSheet } from 'react-native';

import colors from './colors';

const ScreenStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'center',
  },
});

const HeaderStyles = StyleSheet.create({
  date: {
    position: 'absolute',
    left: 0,
    top: 40,
  },
  logoContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  title: {
    color: colors.primary,
    fontSize: 30,
    fontWeight: 'bold',
  },
});

const InfoStyles = StyleSheet.create({
  infoContainer: {
    margin: 20,
    flexDirection: 'row',
    flex: 1,
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
});

const atsStyles = StyleSheet.create({
  atsCaption: {
    fontSize: 17.5,
  },
  atsTracker: {
    fontSize: 30,
    marginTop: 20,
  },
  atsTrackerContainer: {
    margin: 20,
    flex: 1,
    alignItems: 'center',
  },
});

const quoteStyles = StyleSheet.create({
  quote: {
    fontSize: 20,
  },
  quoteContainer: {
    flex: 1,
    margin: 20,
    width: '75%',
    alignItems: 'center',
  },
});

const graphStyles = StyleSheet.create({
  graphContainer: {
    flex: 2,
    margin: 20,
  },
});

export { ScreenStyles, HeaderStyles, InfoStyles, atsStyles, quoteStyles, graphStyles };
