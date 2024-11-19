// ### Working hours

// Write a function which formats a working hours schedule, given as an array of objects, in a human-friendly way.

// The function must accept an unsorted array. If the array is empty, it just returns an empty array. Otherwise, it should make a sorted human-friendly schedule of working hours and return it as a string.

// The output format for one day should be `SUN: 11:00 - 23:00`.

// If two or more days of the week in a row have the same working hours they should be concatenated and have the following format:
// `MON - WED: 11:00 - 23:00`
export function workingHours(schedule) {
  if (!schedule.length) return '';

  const daysOfWeek = ['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT'];
  const sortedSchedule = schedule.sort((a, b) => daysOfWeek.indexOf(a.day) - daysOfWeek.indexOf(b.day));

  const result = [];
  let startDay = sortedSchedule[0].day;
  let prevDay = startDay;
  let currentHours = sortedSchedule[0].hours;

  for (let i = 1; i <= sortedSchedule.length; i++) {
    const day = sortedSchedule[i]?.day;
    const hours = sortedSchedule[i]?.hours;

    if (hours === currentHours && daysOfWeek.indexOf(day) - daysOfWeek.indexOf(prevDay) === 1) {
      prevDay = day;
    } else {
      if (startDay === prevDay) {
        result.push(`${startDay}: ${currentHours}`);
      } else {
        result.push(`${startDay} - ${prevDay}: ${currentHours}`);
      }
      if (day) {
        startDay = day;
        prevDay = day;
        currentHours = hours;
      }
    }
  }

  return result.join(', ');
}
