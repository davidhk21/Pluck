import React from 'react';
import { StyleSheet, View } from 'react-native';
import { VictoryBar, VictoryChart, VictoryTheme, VictoryAxis } from 'victory-native';

import PropTypes from 'prop-types';

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f5fcff',
  },
});

const processTasksDataToDisplay = (data) => {
  const processedData = [];
  const barData = [0, 0, 0, 0, 0];
  for (let i = 0; i < data.length; i++) {
    barData[data[i].value - 1]++;
  }
  for (let i = 1; i <= 5; i++) {
    processedData.push({ value: i, tasks: barData[i - 1] });
  }
  return processedData;
};

const Data = ({ completedTasks }) => {
  return (
    <View style={styles.container}>
      <VictoryChart
        width={350}
        theme={VictoryTheme.material}
        animate={{
          duration: 2000,
          onEnter: { duration: 1000 },
        }}
      >
        <VictoryAxis
          label="values"
          style={{
            axisLabel: {
              padding: 30,
            },
          }}
        />
        <VictoryAxis
          dependentAxis
          label="# of tasks completed"
          style={{
            axisLabel: {
              padding: 35,
            },
          }}
        />
        <VictoryBar
          data={processTasksDataToDisplay(completedTasks)}
          x="value"
          y="tasks"
          barRatio={0.8}
        />
      </VictoryChart>
    </View>
  );
};

Data.propTypes = {
  completedTasks: PropTypes.array.isRequired,
};

export default Data;
