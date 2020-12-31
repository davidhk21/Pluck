/* eslint-disable import/prefer-default-export */

// ---------- HOMEPAGE ---------- //

const calculateATS = (tasks, limit) => {
  let ats = 0;
  for (let i = 0; i < tasks.length; i++) {
    ats += tasks[i].value * 0.005 * limit;
  }
  return ats;
};

const getTodaysDate = () => {
  const today = new Date();
  let dd = today.getDate();
  let mm = today.getMonth() + 1;
  const yyyy = today.getFullYear();
  if (dd < 10) {
    dd = `0${dd}`;
  }
  if (mm < 10) {
    mm = `0${mm}`;
  }
  return `${mm}/${dd}/${yyyy}`;
};

export {
  calculateATS,
  getTodaysDate,
};
