import React, { useState } from 'react';
import { Text, SafeAreaView, TextInput, Picker, Button } from 'react-native';
import PropTypes from 'prop-types';

import axios from 'axios';

import { AddTaskStyles } from '../styles/styles';

const AddTask = ({ route, navigation }) => {
  const [taskName, setTaskName] = useState('');
  const [category, setCategory] = useState('');
  const [value, setValue] = useState('');

  const { getIncompletedTasks } = route.params;

  const handleSelectCategory = (e) => {
    setCategory(e);
  };

  const handleSelectValue = (e) => {
    setValue(e);
  };

  const handleAddTaskSubmit = (id = 1) => {
    const options = {
      task: taskName,
      value,
      category,
      completed: false,
    };
    axios.post(`http://192.168.0.247:3000/api/user/${id}/tasks`, options)
      .then(() => {
        // update tasks state
        getIncompletedTasks();
        // navigate back to task list with the new task added
        axios.get(`http://192.168.0.247:3000/api/user/${id}/incompleted-tasks`)
          .then(res => {
            const tasks = res.data;
            navigation.navigate('TaskList', { tasks });
          })
          .catch(err => {
            console.error(err);
          });
      })
      .catch(err => {
        console.error(err);
      });
  };

  return (
    <SafeAreaView>
      <Text>Add Task Screen!</Text>
      <Text>Enter task:</Text>
      <TextInput
        onChangeText={text => setTaskName(text)}
        placeholder="Add a task"
        style={AddTaskStyles.input}
      />

      <Text>Choose Category:</Text>
      <Picker
        selectedValue={category}
        onValueChange={handleSelectCategory}
      >
        <Picker.Item label="Select a category" value="0" />
        <Picker.Item label="This Month" value="This Month" />
        <Picker.Item label="This Week" value="This Week" />
        <Picker.Item label="Today" value="Today" />
      </Picker>

      <Text>Choose Value:</Text>
      <Picker
        selectedValue={value}
        onValueChange={handleSelectValue}
      >
        <Picker.Item label="Select a Value" value="0" />
        <Picker.Item label="1" value="1" />
        <Picker.Item label="2" value="2" />
        <Picker.Item label="3" value="3" />
        <Picker.Item label="4" value="4" />
        <Picker.Item label="5" value="5" />
      </Picker>

      <Button
        title="Add Task"
        onPress={() => handleAddTaskSubmit()}
      />

    </SafeAreaView>
  );
};

AddTask.propTypes = {
  route: PropTypes.object.isRequired,
  navigation: PropTypes.object.isRequired,
};

export default AddTask;
