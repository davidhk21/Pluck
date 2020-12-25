import React from 'react';
import { Text, View } from 'react-native';

import PropTypes from 'prop-types';

const Task = ({ task }) => {
  return (
    <View>
      <Text>{task.task}</Text>
    </View>
  );
};

Task.propTypes = {
  task: PropTypes.object.isRequired,
};

export default Task;
