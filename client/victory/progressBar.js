import React from 'react';
import { View } from 'react-native';
import { VictoryPie } from 'victory-native';

import PropTypes from 'prop-types';

import { calculateATS } from '../utils/logic';

const getData = (user, completedTasks) => {
  const limit = ((user.salary * 0.60) / 12) * (user.wants_pct / 100);
  const ATS = calculateATS(completedTasks, limit);
  const result = Math.floor((ATS / limit) * 100);
  return [{ x: 1, y: result }, { x: 2, y: 100 - result }];
};

const ProgressBar = ({ user, completedTasks }) => {
  return (
    <View>
      <VictoryPie
        // animate={{ duration: 1000 }}
        width={300}
        height={300}
        data={getData(user, completedTasks)}
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
    </View>
  );
};

ProgressBar.propTypes = {
  user: PropTypes.object.isRequired,
  completedTasks: PropTypes.array.isRequired,
};

export default ProgressBar;
