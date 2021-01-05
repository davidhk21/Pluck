import React, { useState } from 'react';
import { Text, SafeAreaView, TextInput, Button, Alert, View, TouchableOpacity } from 'react-native';
import DropDownPicker from 'react-native-dropdown-picker';
import PropTypes from 'prop-types';

import axios from 'axios';

import { AddTaskStyles, Texts, DropDown, Buttons } from '../styles/addTaskStyles';

const AddTask = ({ route, navigation }) => {
  const [taskName, setTaskName] = useState('');
  const [category, setCategory] = useState('Select a Category');
  const [value, setValue] = useState('Select a Value');

  const { getIncompletedTasks } = route.params;

  const handleSelectCategory = (e) => {
    setCategory(e.value);
  };

  const handleSelectValue = (e) => {
    setValue(e.value);
  };

  const handleAddTaskSubmit = (id = 1) => {
    const options = {
      task: taskName,
      value,
      category,
      completed: false,
    };
    if (category !== 'Select a Category' && value !== 'Select a Value' && taskName) {
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
    } else {
      Alert.alert('Make sure all fields are completed!');
    }
  };

  return (
    <SafeAreaView>
      <Text style={Texts.enterTask}>Enter task</Text>
      <TextInput
        onChangeText={text => setTaskName(text)}
        placeholder="Add a task"
        style={AddTaskStyles.input}
      />

      <Text style={Texts.chooseCategory}>Choose Category</Text>
      <DropDownPicker
        items={[
          { label: 'Select a Category', value: 'Select a Category' },
          { label: 'This Month', value: 'This Month' },
          { label: 'This Week', value: 'This Week' },
          { label: 'Today', value: 'Today' },
        ]}
        defaultValue={category}
        containerStyle={{ height: 60 }}
        dropDownMaxHeight={250}
        zIndex={2000}
        onChangeItem={handleSelectCategory}
        style={DropDown.container}
      />

      <Text style={Texts.chooseValue}>Choose Value</Text>
      <DropDownPicker
        items={[
          { label: 'Select a Value', value: 'Select a Value' },
          { label: '1', value: '1' },
          { label: '2', value: '2' },
          { label: '3', value: '3' },
          { label: '4', value: '4' },
          { label: '5', value: '5' },
        ]}
        defaultValue={value}
        containerStyle={{ height: 60 }}
        dropDownMaxHeight={250}
        zIndex={1000}
        onChangeItem={handleSelectValue}
        style={DropDown.container}
      />

      {/* <Button
        title="Add Task"
        onPress={() => handleAddTaskSubmit()}
      /> */}

      <View style={Buttons.buttonsContainer}>
        <TouchableOpacity
          onPress={() => handleAddTaskSubmit()}
          style={Buttons.addTask}
        >
          <Text style={Buttons.addTaskText}>Add Task</Text>
        </TouchableOpacity>
      </View>

      <View style={Buttons.buttonsContainer}>
        <TouchableOpacity
          onPress={() => navigation.goBack()}
          style={Buttons.goBack}
        >
          <Text style={Buttons.goBackText}>Back To Task List</Text>
        </TouchableOpacity>
      </View>

    </SafeAreaView>
  );
};

AddTask.propTypes = {
  route: PropTypes.object.isRequired,
  navigation: PropTypes.object.isRequired,
};

export default AddTask;
