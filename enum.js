var DaysOfTheWeek;
(function (DaysOfTheWeek) {
    DaysOfTheWeek[DaysOfTheWeek["SUN"] = 0] = "SUN";
    DaysOfTheWeek[DaysOfTheWeek["MON"] = 1] = "MON";
    DaysOfTheWeek[DaysOfTheWeek["TUE"] = 100] = "TUE";
    DaysOfTheWeek[DaysOfTheWeek["WED"] = 101] = "WED";
    DaysOfTheWeek[DaysOfTheWeek["THU"] = 106] = "THU";
    DaysOfTheWeek[DaysOfTheWeek["FRI"] = 107] = "FRI";
    DaysOfTheWeek[DaysOfTheWeek["SAT"] = 108] = "SAT";
})(DaysOfTheWeek || (DaysOfTheWeek = {}));
var day = DaysOfTheWeek.MON;
if (day === DaysOfTheWeek.MON) {
    console.log("Go to go to work");
}
