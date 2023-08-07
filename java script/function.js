function firstfunc() {
  console.log("hello i am function");
}
firstfunc();
// or
var func1 = function () {
  console.log("hello");
};
func1();

/*function aFunc(parameters) {
   do something with the parameters
   return the result
}

aFunc(arguments);*/
function sumMachine(a, b) {
  var sum = a + b;
  return sum;
}

console.log(sumMachine(2, 2));
console.log(sumMachine(4, 4));
// parameter and arguments
function myname(name, age) {
  console.log("my name: " + name + " age " + age + " years  old");
}

myname("Rezwan", 30);

// another function call
function callMyName(name, callback) {
  var myAge = 20;
  callback(myAge);
  console.log("myname " + name);
}

function hello(age) {
  console.log(" my age is: " + age);
}

callMyName("Zonayed Ahmed", hello);

// 2

function mygoal(goal1, goal2) {
  var goal3 = "Ai expart";
  goal2(goal3);
  console.log("i want to ba a : " + goal1);
}
function appsDeveloper(changeGoal) {
  console.log("than i want to be a " + changeGoal);
}

mygoal("web developer", appsDeveloper);

// সেইম কারণে আপনি একটা ফাংশন থেকে আরেকটা ফাংশনও রিটার্ণ করতে পারবেনঃ

function wellcomemsg(name) {
  console.log("well come MR: " + name);
  return function foodName(food) {
    console.log("do you like: " + food);
  };
}

wellcomemsg("Rezwan")("coffe");
// ড্রাই প্রিন্সিপ্যাল অথবা ইংরেজীতে DRY মানে হচ্ছে Don’t Repeat Yourself

function add2Number(x, y) {
  var sum = x + y;
  console.log("sum of " + x + " and " + y + " is equal to: " + sum);
}
add2Number(20, 5);
// again
function welmsg(male, female) {
  console.log("well come mr : " + male);
  console.log("well come misses : " + female);
}
welmsg("rezwan", "MiM");
