import React from 'react';
import { Text, View, Button, Alert } from 'react-native';

import PropTypes from 'prop-types';

const Task = ({ task }) => {
  return (
    <View>
      <Text>{task.task}</Text>
      <Text>{task.value}</Text>
      <Button
        onPress={() => Alert.alert('Simple Button pressed!')}
        title="Completed"
      />
    </View>
  );
};

Task.propTypes = {
  task: PropTypes.object.isRequired,
};

export default Task;
