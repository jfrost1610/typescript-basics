enum DaysOfTheWeek {
    SUN, MON, TUE = 100, WED, THU = 106, FRI, SAT
}

let day: DaysOfTheWeek = DaysOfTheWeek.MON;

if (day === DaysOfTheWeek.MON) {
    console.log("Go to go to work");
}
