/* eslint-disable import/prefer-default-export */
const calculateATS = (tasks, limit) => {
  let ats = 0;
  for (let i = 0; i < tasks.length; i++) {
    ats += tasks[i].value * 0.005 * limit;
  }
  return ats;
};

export {
  calculateATS,
};
