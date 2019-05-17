var a = 10;
var b = true;
var c = "Hello World";
var myArray = [1, 2, 3];
// tuple type to restrict type passed to an array
var tplArr = [1, true];
tplArr.push(1);
tplArr.push(true);
tplArr.push(1);
console.log(tplArr);
// optional input args---- can be a? or a:number=8 for default
function add(a, b, c, d) {
    if (c === void 0) { c = 5; }
    console.log(d);
    return a + b + c;
}
var sum1 = add(1, 3);
var sum2 = add(1, 3, 5);
var sum3 = add(1, 3, 5, "test add");
console.log(sum1);
console.log(sum2);
console.log(sum3);
// inline declaration sets a type
var test1 = 10;
// test1 =true; will not work
// implicit any typing ----var test2:any;
var test2;
test2 = true;
test2 = 1;
var test3 = "Hello";
test2 = true;
test2 = 1;
function greet() {
    return "Good Morning";
}
var greeting = greet();
var greeting2;
greeting2 = greet();
greeting2 = 1;
// union for multi typing
var union;
union = 1;
union = true;
//union="Hello"; will not work
