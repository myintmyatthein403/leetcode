/**
 * @param {number} days
 * @param {number[][]} meetings
 * @return {number}
 */
var countDays = function (days, meetings) {
  if (meetings.length === 0) {
    return days;
  }

  meetings.sort((a, b) => a[0] - b[0]);

  const mergedMeetings = [];
  let currentMeeting = meetings[0];

  for (let i = 1; i < meetings.length; i++) {
    const nextMeeting = meetings[i];
    if (nextMeeting[0] <= currentMeeting[1]) {
      currentMeeting[1] = Math.max(currentMeeting[1], nextMeeting[1]);
    } else {
      mergedMeetings.push(currentMeeting);
      currentMeeting = nextMeeting;
    }
  }
  mergedMeetings.push(currentMeeting);

  let freeDays = 0;
  let lastEnd = 0;

  for (const meeting of mergedMeetings) {
    freeDays += Math.max(0, meeting[0] - 1 - lastEnd);
    lastEnd = meeting[1];
  }
  freeDays += Math.max(0, days - lastEnd);

  return freeDays;
};
