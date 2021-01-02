import React, { useState, useEffect } from 'react';
import { Text, View, SafeAreaView, Image, ScrollView } from 'react-native';
import PropTypes from 'prop-types';

import axios from 'axios';

import { ScreenStyles, HeaderStyles, InfoStyles, atsStyles, quoteStyles, graphStyles } from '../styles/homePageStyles';
import { calculateATS, getTodaysDate } from '../utils/logic';

import ReactNativeART from '../d3/index';

const HomePage = ({ navigation }) => {
  const [user, setUser] = useState({});
  const [tasks, setTasks] = useState([]);
  const [quote, setQuote] = useState('');
  const [incompletedTasks, setIncompletedTasks] = useState([]);

  const limit = ((user.salary * 0.60) / 12) * (user.wants_pct / 100);
  const ATS = calculateATS(incompletedTasks, limit);

  const getUserInfo = (id = 1) => {
    axios.get(`http://192.168.0.247:3000/api/user/${id}`)
      .then(res => {
        setUser(res.data[0]);
      })
      .catch(err => {
        console.error(err);
      });
  };

  const getQuote = () => {
    axios.get('http://192.168.0.247:3000/api/quotes')
      .then(res => {
        setQuote(res.data);
      })
      .catch(err => {
        console.error(err);
      });
  };

  const getIncompletedTasks = (id = 1) => {
    axios.get(`http://192.168.0.247:3000/api/user/${id}/incompleted-tasks`)
      .then(res => {
        setTasks(res.data);
      })
      .catch(err => {
        console.error(err);
      });
  };

  const getCompletedTasks = (id = 1) => {
    axios.get(`http://192.168.0.247:3000/api/user/${id}/completed-tasks`)
      .then(res => {
        setIncompletedTasks(res.data);
      })
      .catch(err => {
        console.error(err);
      });
  };

  useEffect(() => {
    getUserInfo();
    getQuote();
    getIncompletedTasks();
    getCompletedTasks();
  }, []);

  return (
    <SafeAreaView style={ScreenStyles.container}>
      <ScrollView>
        <View style={ScreenStyles.container}>
          <Text style={HeaderStyles.date}>{getTodaysDate()}</Text>

          <View style={HeaderStyles.logoContainer}>
            <Text style={HeaderStyles.title} onPress={() => navigation.navigate('TaskList', { tasks, getIncompletedTasks, getCompletedTasks })}>Pluck</Text>
            <Image source={require('../../assets/pluck-logo.png')} style={{ width: 50, height: 50 }} />
          </View>

          <View style={InfoStyles.infoContainer}>
            <View style={InfoStyles.wantsContainer}>
              <Text style={InfoStyles.wantsBudget}>Wants</Text>
              <Text style={InfoStyles.wantsBudgetPct}>{`${user.wants_pct}%`}</Text>
            </View>
            <View style={InfoStyles.limitContainer}>
              <Text style={InfoStyles.limit}>Limit</Text>
              <Text style={InfoStyles.limitVal}>{limit}</Text>
            </View>
          </View>

          <View style={atsStyles.atsTrackerContainer}>
            <Text style={atsStyles.atsCaption}>ATS (Available To Spend) for next month:</Text>
            <Text style={atsStyles.atsTracker}>{ATS}</Text>
          </View>

          <ReactNativeART />

          <View style={quoteStyles.quoteContainer}>
            <Text style={quoteStyles.quote}>{`"${quote}"`}</Text>
          </View>

          <View style={graphStyles.graphContainer}>
            <Text>ANOTHER GRAPH GOES HERE</Text>
          </View>
        </View>
      </ScrollView>

    </SafeAreaView>
  );
};

HomePage.propTypes = {
  navigation: PropTypes.object.isRequired,
};

export default HomePage;
