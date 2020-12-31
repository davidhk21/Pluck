import React, { useState } from 'react';
import { Text, View, Button, Alert } from 'react-native';

import axios from 'axios';

import PropTypes from 'prop-types';

const Task = ({ task, getIncompletedTasks, getCompletedTasks }) => {
  const [completed, setCompleted] = useState(0);

  const handleTaskComplete = (id = 1) => {
    const options = {
      id: task.id,
    };
    axios.put(`http://192.168.0.247:3000/api/user/${id}/incompleted-tasks`, options)
      .then(() => {
        console.log('task is completed!');
        setCompleted(1);
        getIncompletedTasks();
        getCompletedTasks();
        Alert.alert('task has been plucked!');
      })
      .catch(err => {
        console.error(err);
      });
  };

  if (completed === task.completed) {
    return (
      <View>
        <Text>{task.task}</Text>
        <Text>{task.value}</Text>
        <Button
          onPress={() => handleTaskComplete()}
          title="pluck!"
        />
      </View>
    );
  }
  return null;
};

Task.propTypes = {
  task: PropTypes.object.isRequired,
  getIncompletedTasks: PropTypes.func.isRequired,
  getCompletedTasks: PropTypes.func.isRequired,
};

export default Task;
