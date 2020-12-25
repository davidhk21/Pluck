import React, { useState, useEffect } from 'react';
import { Text, View, SafeAreaView } from 'react-native';

import axios from 'axios';

import Task from '../components/task_list/Task';

const TaskList = () => {
  const [tasks, setTasks] = useState([]);

  const getIncompletedTasks = (id = 1) => {
    axios.get(`http://192.168.0.247:3000/api/user/${id}/incompleted-tasks`)
      .then(res => {
        console.log('INCOMPLETE TASKS RESPONSE: ', res.data);
        setTasks(res.data);
      })
      .catch(err => {
        console.error(err);
      });
  };

  useEffect(() => {
    getIncompletedTasks();
  }, []);

  return (
    <SafeAreaView>
      <Text>Hello Task List!</Text>
      <Text>This Month</Text>
      <View>
        {tasks.filter(task => task.category === 'This Month').map(task => <Task task={task} />)}
      </View>
      <Text>This Week</Text>
      <View>
        {tasks.filter(task => task.category === 'This Week').map(task => <Task task={task} />)}
      </View>
      <Text>Today</Text>
      <View>
        {tasks.filter(task => task.category === 'Today').map(task => <Task task={task} />)}
      </View>
    </SafeAreaView>
  );
};

export default TaskList;
