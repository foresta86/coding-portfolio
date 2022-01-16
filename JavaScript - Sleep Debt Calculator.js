const getSleepHours = day => {
  switch (day) {
    case "Monday":
      return 9;
    case "Tuesday":
      return 10;
    case "Wednesday":
      return 9;
    case "Thursday":
      return 8;
    case "Friday":
      return 9;
    case "Saturday":
      return 7;
    case "Sunday":
      return 9;
  }
}

const getActualSleepHours = () => getSleepHours("Monday") + getSleepHours("Tuesday") + getSleepHours("Wednesday") + getSleepHours("Thursday") + getSleepHours("Friday") + getSleepHours("Saturday") + getSleepHours("Sunday");

const getIdealSleepHours = () => {
  const idealHours = 8;
  return idealHours * 7;
}

const calculateSleepDebt = () => {
  const actualSleepHours = getActualSleepHours();
  const idealSleepHours = getIdealSleepHours();
  if (actualSleepHours === idealSleepHours) {
    console.log(`You got ${actualSleepHours} this week. You got the perfect amount of sleep!`);
  } else if (actualSleepHours > idealSleepHours) {
    console.log(`You got ${actualSleepHours - idealSleepHours} hour(s) more sleep than you needed this week!`);
  } else {
    console.log(`You got ${idealSleepHours - actualSleepHours} hour(s) less sleep than you needed this week. You should get some rest!`);
  }
}

calculateSleepDebt();
