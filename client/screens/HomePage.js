import React, { useState, useEffect } from 'react';
import { Text, View, SafeAreaView } from 'react-native';
import PropTypes from 'prop-types';

import axios from 'axios';

import { HomePageStyles } from '../styles/styles';

const HomePage = ({ navigation }) => {
  const [user, setUser] = useState({});
  const [tasks, setTasks] = useState([]);
  const [quote, setQuote] = useState('');
  const [incompletedTasks, setIncompletedTasks] = useState([]);

  const limit = ((user.salary * 0.60) / 12) * (user.wants_pct / 100);

  const calculateATS = () => {
    let ats = 0;
    for (let i = 0; i < incompletedTasks.length; i++) {
      ats += incompletedTasks[i].value * 0.005 * limit;
    }
    return ats;
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
    <SafeAreaView style={HomePageStyles.container}>
      <Text style={HomePageStyles.title} onPress={() => navigation.navigate('TaskList', { tasks, getIncompletedTasks, getCompletedTasks })}>Pluck</Text>

      <View style={HomePageStyles.infoContainer}>
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
          <Text>Limit: {limit}</Text>
        </View>
      </View>

      <View style={HomePageStyles.atsTrackerContainer}>
        <Text>ATS TRACKER: {calculateATS()}</Text>
      </View>

      <View style={HomePageStyles.quoteContainer}>
        <Text>{quote}</Text>
      </View>

      <View style={HomePageStyles.graphContainer}>
        <Text>ANOTHER GRAPH GOES HERE</Text>
      </View>

    </SafeAreaView>
  );
};

HomePage.propTypes = {
  navigation: PropTypes.object.isRequired,
};

export default HomePage;
