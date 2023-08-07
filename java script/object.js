var Shaon = {
  fullname: "Shaon",
  Age: 30,
  address: "Rajshahi",
  Education: "MBA",
};
console.log(Shaon.fullname);
// নতুন কোনো আইটেম অ্যাড
Shaon.zipcode = 1200;
console.log(Shaon);
// অলরেডি আছে এমন একটা আইটেমের ভ্যালু চ্যাঞ্জ করতে চাইঃ

Shaon.Education = "PHD";
console.log(Shaon);
// অবজেক্ট এর ভিতরে অ্যারেঃ
var objArr = {
  normal: "Normal Item",
  name: ["Rahim", "Karim", "Rafiq", "Shafiq"],
  age: [10, 20, 30, 40, 50],
};
console.log(objArr);
console.log(objArr.name[2]);
// অ্যারের ভিতরে অবজেক্টঃ
var arrObj = [
  "Zonayed",
  { name: "Rafiq", age: 21, job: "Student" },
  "Bangladesh",
];
console.log(arrObj[1].name);
// function in function
