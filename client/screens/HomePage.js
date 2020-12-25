import React, { useState } from 'react';
import { StyleSheet, Text, View, SafeAreaView, Button } from 'react-native';

import colors from '../config/colors.js';

import axios from 'axios';

const HomePage = ({ navigation }) => {
  const [salary, setSalary] = useState(60000);
  const [wantPct, setWantPct] = useState(.30);

  const makeGetRequest = () => {
    axios.get('http://192.168.0.247:3000/')
      .then(res => {
        console.log('RESPONSE: ', res.data)
      })
      .catch(err => {
        console.error(err);
      })
  }

  return (
      <SafeAreaView style={styles.container}>
        <Text style={styles.title} onPress={() => navigation.navigate('TaskList')}>Pluck</Text>

        <View style={styles.infoContainer}>
          <View>
            <Text>12/24/2020</Text>
          </View>
          <View>
            <Text>{`Want Category Budget: ${wantPct * 100}%`}</Text>
          </View>
          <View>
            <Text>Available To Spend (ATS) for January 2021</Text>
          </View>
          <View>
            <Text>Limit: {`${salary * .60 / 12 * wantPct}`}</Text>
          </View>
        </View>

        <View style={styles.atsTrackerContainer}>
          <Text>ATS TRACKER GOES HERE</Text>
        </View>

        <View style={styles.quoteContainer}>
          <Text>"Learn the rules like a pro, so you can break them like an artist."</Text>
        </View>

        <View style={styles.graphContainer}>
          <Text>ANOTHER GRAPH GOES HERE</Text>
        </View>

        <Button title="Press me" onPress={makeGetRequest} />
      </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  atsTrackerContainer: {
    margin: 20
  },
  container: {
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'center'
  },
  graphContainer: {
    margin: 20
  },
  infoContainer: {
    margin: 20
  },
  quoteContainer: {
    margin: 20
  },
  title: {
    color: colors.primary,
    fontSize: 30,
    fontWeight: 'bold'
  }
});

export default HomePage;