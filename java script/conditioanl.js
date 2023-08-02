if (3 < 5) {
  console.log("i will be exicuted");
}

var myName = "Shaon";
if (myName == "Shaon") {
  console.log("permission guranted");
}

var age = 21;
if (age > 18) {
  console.log("you are adult");
} else {
  console.log("you are not adult");
}

// if...else...if
var whatDate = "tuesday";
if (whatDate == "friday") {
  console.log("its close today");
} else if (whatDate == "thursday") {
  console.log("its partially closed");
} else if (whatDate == "saturday") {
  console.log("some office are closed");
} else {
  console.log("its a normal working day");
}

// nested
var num = 10;
if (num > 1) {
  if (num > 10) {
    console.log("greter than ten");
  } else {
    console.log("less than ten");
  }
}

var a = 10;
var b = 40;
var c = 30;

if (a > b) {
  console.log("a is bigger");
} else if (b > c) {
  console.log("b is gretter than a");
} else {
  console.log("c is gretter than b");
}
// switch state ment

var weekday = "sunday";
switch (weekday) {
  case "saturday":
    console.log("some office are closed");
    break;

  case "sunday":
    console.log("today is closed in forign ");
    break;
  case "fryday":
    console.log("its a holyday");
    break;
  default:
    console.log("not a day");
}
