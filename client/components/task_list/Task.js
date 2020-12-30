import React from 'react';
import { Text, View, Button, Alert } from 'react-native';

import PropTypes from 'prop-types';

const Task = ({ task }) => {
  const handleTaskComplete = () => {
    Alert.alert('task has been plucked!');
  };

  return (
    <View>
      <Text>{task.task}</Text>
      <Text>{task.value}</Text>
      <Button
        onPress={handleTaskComplete}
        title="pluck!"
      />
    </View>
  );
};

Task.propTypes = {
  task: PropTypes.object.isRequired,
};

export default Task;
