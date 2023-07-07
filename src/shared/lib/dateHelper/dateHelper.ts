export const dateHelper = () => {
  const time = new Date();
  const year = time.getFullYear().toString();
  let month = (time.getMonth() + 1).toString();
  let day = time.getDate().toString();

  if (!month.startsWith('0')) {
    month = `0${month}`;
  }
  if (!day.startsWith('0')) {
    day = `0${day}`;
  }

  const currDate = `${year}-${month}-${day}`;

  return {
    year,
    month,
    day,
    currDate,
  };
};
