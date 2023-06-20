import { getPreviousAndNextMonths } from './getPreviousAndNextMonths';

export function getCalendarCellsStructure(dateString) {
  const date = new Date(dateString);
  const year = date.getFullYear();
  const month = date.getMonth();
  const firstDay = new Date(year, month, 1);
  const lastDay = new Date(year, month + 1, 0);
  const daysInMonth = lastDay.getDate();
  const firstWeekDay = (firstDay.getDay() + 6) % 7; // adjust to start with Monday
  const weeks = [];
  let currentWeek = [];
  // add days of previous month
  const prevMonthLastDay = new Date(year, month, 0).getDate();
  for (let i = firstWeekDay - 1; i >= 0; i--) {
    currentWeek.push({
      day: prevMonthLastDay - i,
      month: getPreviousAndNextMonths(dateString).previousMonth,
      prevNextMonth: true,
    });
  }
  // add days of current month
  for (let i = 1; i <= daysInMonth; i++) {
    if (currentWeek.length === 7) {
      weeks.push(currentWeek);
      currentWeek = [];
    }
    currentWeek.push({ day: i, month: dateString.slice(0, 7) });
  }
  // add days of next month
  const lastWeekDay = (lastDay.getDay() + 6) % 7; // adjust to end with Sunday
  for (let i = 1; i <= 7 - lastWeekDay - 1; i++) {
    currentWeek.push({
      day: i,
      month: getPreviousAndNextMonths(dateString).nextMonth,
      prevNextMonth: true,
    });
  }
  weeks.push(currentWeek);
  return weeks;
}
