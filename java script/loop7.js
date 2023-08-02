/* for(শুরু; কন্ডিশন; স্টেপ) {
     স্টেটমেন্ট;
 }

*/
for (var i = 0; i < 10; i++) {
  console.log(i + " step");
}
for (var i = 0; i < 10; i++) {
  console.log("step" + i);
}
// করো {
//     স্টেটমেন্ট
//  }
//  যতক্ষন(আমি সত্য);

var num;
do {
  console.log("inside the loop");
  num = prompt("Enter the number:");
} while (num < 10);
console.log("outside the loop");

// while
// যতক্ষন(আমি সত্য) {
//     স্টেটমেন্ট;
//  }
var num = 10;
while (num < 10) {
  console.log("inside the loop");
  num = prompt("enter");
}
console.log("out of the loop");

// break

for (var i = 0; i < 10; i++) {
  if (i === 5) {
    break;
  }
  console.log("i is now at :" + i);
}
for (var i = 0; i < 10; i++) {
  if (i === 5) {
    break;
  }
  console.log("i is now at :" + i);
}

// continue loop
for (var i = 0; i < 10; i++) {
  if (i === 5) {
    console.log(i + " is skipped");

    continue;
  }

  console.log("i is now at: " + i);
}
