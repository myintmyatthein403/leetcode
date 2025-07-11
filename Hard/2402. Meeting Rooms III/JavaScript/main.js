/**
 * @param {number} n
 * @param {number[][]} meetings
 * @return {number}
 */
var mostBooked = function (n, meetings) {
  // Step 1: Sort meetings by start time
  meetings.sort((a, b) => a[0] - b[0]);

  // Step 2: Available rooms min-heap (sorted by room number)
  const availableRooms = Array.from({ length: n }, (_, i) => i);
  availableRooms.sort((a, b) => a - b); // ensure smallest room number first

  // Step 3: Occupied rooms min-heap: [endTime, roomNumber]
  const busyRooms = [];

  // Step 4: Count meetings per room
  const meetingCount = Array(n).fill(0);

  for (let [start, end] of meetings) {
    // Free up rooms that have finished before current meeting starts
    while (busyRooms.length && busyRooms[0][0] <= start) {
      const [_, room] = busyRooms.shift();
      insertSorted(availableRooms, room);
    }

    const duration = end - start;

    if (availableRooms.length) {
      // Use the smallest available room
      const room = availableRooms.shift();
      meetingCount[room]++;
      insertBusyRoom(busyRooms, [end, room]);
    } else {
      // Delay the meeting until the earliest room is free
      const [endTime, room] = busyRooms.shift();
      const newEnd = endTime + duration;
      meetingCount[room]++;
      insertBusyRoom(busyRooms, [newEnd, room]);
    }
  }

  // Find the room with the most meetings (lowest index in tie)
  let maxMeetings = 0;
  let resultRoom = 0;
  for (let i = 0; i < n; i++) {
    if (meetingCount[i] > maxMeetings) {
      maxMeetings = meetingCount[i];
      resultRoom = i;
    }
  }

  return resultRoom;

  // Helper: Insert into sorted array (binary insertion for availableRooms)
  function insertSorted(arr, val) {
    let left = 0, right = arr.length;
    while (left < right) {
      let mid = Math.floor((left + right) / 2);
      if (arr[mid] < val) left = mid + 1;
      else right = mid;
    }
    arr.splice(left, 0, val);
  }

  // Helper: Insert into busyRooms keeping it sorted by [endTime, room]
  function insertBusyRoom(arr, val) {
    let left = 0, right = arr.length;
    while (left < right) {
      let mid = Math.floor((left + right) / 2);
      if (arr[mid][0] === val[0]) {
        if (arr[mid][1] < val[1]) left = mid + 1;
        else right = mid;
      } else if (arr[mid][0] < val[0]) left = mid + 1;
      else right = mid;
    }
    arr.splice(left, 0, val);
  }
};
