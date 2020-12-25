import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, SafeAreaView, Button } from 'react-native';

import colors from '../config/colors.js';

import axios from 'axios';

const HomePage = ({ navigation }) => {
  const [user, setUser] = useState({});

  useEffect(() => {
    getUserInfo();
  }, [])

  const getUserInfo = (id = 1) => {
    axios.get(`http://192.168.0.247:3000/${id}`)
      .then(res => {
        console.log('RESPONSE: ', res.data);
        setUser(res.data[0]);
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
            <Text>{`Want Category Budget: ${user.wants_pct}%`}</Text>
          </View>
          <View>
            <Text>Available To Spend (ATS) for January 2021</Text>
          </View>
          <View>
            <Text>Limit: {`${user.salary * .60 / 12 * user.wants_pct/100}`}</Text>
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