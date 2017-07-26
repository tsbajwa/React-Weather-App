const dayName = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
const monthName = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'June', 'July', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

function dateFormat(day, date, month) {
  return `${dayName[day]} ${date} ${monthName[month]}`;
}

export function getDate(unix) {
  const date = new Date(unix * 1000);
  const day = date.getDay();
  const dateNumber = date.getDate();
  const month = date.getMonth();

  return dateFormat(day, dateNumber, month);
}


export function Capitilize(str) {
  return str.replace(/\w\S*/g, txt => txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase());
}
