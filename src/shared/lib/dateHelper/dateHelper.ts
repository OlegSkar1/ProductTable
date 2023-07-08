export const dateHelper = (date?: string) => {
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
  let normalizedDate = date;

  if (date && date.includes('-')) {
    const dateArr = date?.split('-');
    const temp = dateArr[0];
    dateArr[0] = dateArr[2];
    dateArr[2] = temp;

    normalizedDate = dateArr?.join('.');
  }

  return {
    year,
    month,
    day,
    currDate,
    normalizedDate,
  };
};
