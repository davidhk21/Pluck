import React from 'react';
import { View, Text } from 'react-native';
import { VictoryPie } from 'victory-native';

import PropTypes from 'prop-types';

import { calculateATS } from '../utils/logic';

const ProgressBar = ({ user, completedTasks }) => {
  const limit = ((user.salary * 0.60) / 12) * (user.wants_pct / 100);
  const ATS = calculateATS(completedTasks, limit);

  const getData = () => {
    const result = Math.floor((ATS / limit) * 100);
    return [{ x: 1, y: result }, { x: 2, y: 100 - result }];
  };

  return (
    <View>
      <VictoryPie
        // animate={{ duration: 1000 }}
        width={300}
        height={300}
        data={getData()}
        innerRadius={120}
        cornerRadius={25}
        labels={() => null}
        style={{
          data: { fill: ({ datum }) => {
            const color = datum.y > 30 ? 'green' : 'red';
            return datum.x === 1 ? color : 'grey';
          },
          },
        }}
      />

      <View style={{ position: 'absolute', top: '42%', left: '35%' }}>
        <Text style={{ fontSize: 30, fontWeight: 'bold' }}>{`${Math.floor((ATS / limit) * 100)}%`}</Text>
      </View>
    </View>
  );
};

ProgressBar.propTypes = {
  user: PropTypes.object.isRequired,
  completedTasks: PropTypes.array.isRequired,
};

export default ProgressBar;
