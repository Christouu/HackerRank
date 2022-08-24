function timeConversion(s) {
  const amPm = s.charAt(8);
  let hour = "";

  if (amPm === "A") {
    if (s.substring(0, 2) === "12") {
      hour = "00";
    } else {
      hour = s.substring(0, 2);
    }
  } else {
    // P
    if (s.substring(0, 2) === "12") {
      hour = s.substring(0, 2);
    } else {
      hour = parseInt(s.substring(0, 2), 10) + 12;
    }
  }

  return hour + s.substring(2, 8);
}

//convert time like 07:05:45PM to 19:05:45
