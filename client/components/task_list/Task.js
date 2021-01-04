import React, { useState } from 'react';
import { Text, View, Button, Alert } from 'react-native';

import axios from 'axios';

import PropTypes from 'prop-types';

import { TaskStyles } from '../../styles/taskListStyles';

const Task = ({ task, getIncompletedTasks, getCompletedTasks }) => {
  const [completed, setCompleted] = useState(0);
  const [deleted, setDeleted] = useState(false);

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

  const handleTaskDelete = (id = 1) => {
    const options = {
      id: task.id,
    };
    axios.delete(`http://192.168.0.247:3000/api/user/${id}/incompleted-tasks`, { data: options })
      .then(() => {
        console.log('task is DELETED!');
        setDeleted(true);
        getIncompletedTasks();
        Alert.alert('task has been DELETED!');
      })
      .catch(err => {
        console.error(err);
      });
  };

  if ((completed === task.completed) && !deleted) {
    return (
      <View style={TaskStyles.container}>
        <View style={TaskStyles.taskContainer}>
          <Text style={TaskStyles.task}>{task.task}</Text>
          <Text style={TaskStyles.value}>{task.value}</Text>
        </View>
        <View style={TaskStyles.buttonContainer}>
          <Button
            onPress={() => handleTaskComplete()}
            title="pluck!"
            style={TaskStyles.pluck}
          />
          <Button
            onPress={() => handleTaskDelete()}
            title="Delete"
            style={TaskStyles.delete}
          />
        </View>
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
