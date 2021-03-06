import React, { useState, useEffect } from 'react';
import { Text, View, SafeAreaView, Image, ScrollView, LogBox } from 'react-native';
import PropTypes from 'prop-types';

import axios from 'axios';

import { ScreenStyles, HeaderStyles, InfoStyles, atsStyles, quoteStyles } from '../styles/homePageStyles';
import { calculateATS, getTodaysDate } from '../utils/logic';

import ProgressBar from '../victory/progressBar';
import BarGraph from '../victory/barGraph';

const HomePage = ({ navigation }) => {
  const [user, setUser] = useState({});
  const [tasks, setTasks] = useState([]);
  const [quote, setQuote] = useState('');
  const [completedTasks, setcompletedTasks] = useState([]);

  const [limit, setLimit] = useState(0);
  const [ATS, setATS] = useState(0);

  const getLimit = () => {
    const result = ((user.salary * 0.60) / 12) * (user.wants_pct / 100);
    setLimit(result);
  };

  const getATS = () => {
    const result = calculateATS(completedTasks, limit);
    setATS(result);
  };

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
        setcompletedTasks(res.data);
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

  useEffect(() => {
    getLimit();
    getATS();
  }, [user, completedTasks]);

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
              <Text style={InfoStyles.limitVal}>{`$${limit}`}</Text>
            </View>
          </View>

          <View style={atsStyles.atsTrackerContainer}>
            <Text style={atsStyles.atsCaption}>ATS (Available To Spend) for next month:</Text>
            <Text style={atsStyles.atsTracker}>{`$${ATS}`}</Text>
          </View>

          <ProgressBar user={user} completedTasks={completedTasks} />

          <View style={quoteStyles.quoteContainer}>
            <Text style={quoteStyles.quote}>{`"${quote}"`}</Text>
          </View>

          <BarGraph completedTasks={completedTasks} />

        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

HomePage.propTypes = {
  navigation: PropTypes.object.isRequired,
};

LogBox.ignoreLogs([
  'Non-serializable values were found in the navigation state',
]);

export default HomePage;
