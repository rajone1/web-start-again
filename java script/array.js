var arryname = ["rahim ", "karim", "rafiq", "jabbar", "salam", "shaon"];
arryname[3];
arryname.length;

// for (var i = 0; i < arryname.length; i++) {
//   console.log("Name:" + arryname[i]);
// }

var arryname = ["rahim ", "karim", "rafiq", "jabbar", "salam", "shaon"];
arryname.push("mim");
arryname.shift("rahim");
arryname.unshift("Rezwan");
// নির্দিষ্ট কোনো আইটেম এর ইন্ডেক্স নাম্বার জানতেঃ
arryname.indexOf("Mim");
// ইন্ডেস্ক নাম্বার দিয়ে কোনো আইটেম রিমুভ করতেঃ
arryname.splice(1, 2);
//  নির্দিষ্ট ইন্ডেক্স নাম্বার থেকে শুরু করে বাকি সবগুলো রিমুভ

var arryname1 = ["rahim ", "karim", "rafiq", "jabbar", "salam", "shaon"];
arryname1.splice(3);
// রিমুভ করা ডাটাগুলোও আবার আরেকটা ভ্যারিয়েবলে স্টোর
