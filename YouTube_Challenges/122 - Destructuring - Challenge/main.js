/*
  Destructuring
  - Challenge
*/

let chosen = 3;

let myFriends = [
  { title: "Osama", age: 39, available: true, skills: ["HTML", "CSS"] },
  { title: "Ahmed", age: 25, available: false, skills: ["Python", "Django"] },
  { title: "Sayed", age: 33, available: true, skills: ["PHP", "Laravel"] },
];

({ title: t, age: a, available: av, skills: [, Sk2] } = myFriends[chosen - 1]);

console.log(t);
console.log(a);
console.log(av ? "Available" : "Not Available");
console.log(Sk2);