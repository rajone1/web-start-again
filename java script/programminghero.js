// var age = 30;
// console.log(age);

// var name1 = "Rezwan";
// console.log(typeof name1);

// var status1 = true;
// console.log(typeof status1);

// var num1 = "20";
// var num2 = 30.33;
// var numall = parseInt(num1) + num2;
// var numall = parseFloat(num1) + num2;

// console.log(numall);
// if else

// var age = 20;
// if (age > 50) {
//   console.log("you are old");
// } else if (age < 30) {
//   console.log("you are not an adult");
// } else if (age <= 40) {
//   console.log("you are successful");
// } else {
//   console.log("you are perfect");
// }
// object
/*object a property and valu thakba ex: manuser hat property and 2 ta hath hosce valu */

/*var person = {
  name: "Shaon",
  age: "30",
  status: "single",
};
console.log("person.age");
// array = [1,2,3];

var array = ["a", "b", "c", "d", "e"];
console.log(array[3]);
// push or pop last add
array.pop("4");
array.push("f");

console.log(array);
// shift an unshift first add  or substraction
array.shift("0");
array.unshift("z");
console.log(array);*/

/*loop sudhu matro array r opora chola */
/*var numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
for (var i = 0; i < numbers.length; i++) {
  console.log(numbers[i]);
}

// or
var allnumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
for (var i = 0; i < allnumbers.length; i++) {
  var element = allnumbers[i];
  if (element == 5) {
    console.log("paise tora");
  } else {
    ("isss miss");
  }
}
*/

// function
// function addnumber() {
//   console.log(10 + 20);
// }
// addnumber();
// function addnumber(a, b) {
//   console.log(a + b);
// }
// addnumber(10, 50);

function addtwonumber(a, b) {
  var add = a * b;
  return add;
}

var result = addtwonumber(3, 5);
console.log(result);

// second

function addnum(a, b) {
  var x = a + b;
  return x;
}

var result = addnum(5, 6);
console.log(result);

// even and odd number
function even_odd(number) {
  if (number % 2 == 0) {
    return "its a even number";
  } else {
    return "its a odd number";
  }
}

var findvalue = even_odd(51);
console.log(findvalue);
