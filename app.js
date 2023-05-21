//2 task
console.log("Romanchuk");

//3 task
let a;
let b;
a = "JS";
b = 2023;

console.log(a);
console.log(b);

// a = b; //змінна a cкопіює значення змінної b
// console.log(a);
// console.log(b);

b = a; //змінна b cкопіює значення змінної a
console.log(a);
console.log(b);

// 4 task
const user = {
  name: "Vlad",
  age: 6,
  playfootball: true,
  friend: undefined,
  pet: null,
};
//5 task
let isAdult = confirm("Шановний користувач, чи досягли ви повноліття?");
console.log(isAdult);
//6 task
const name = "Nadia";
const surname = "Romanchuk";
const studyGroup = "JS";
const yearOfBirth = 1993;
let status = true;

console.log(typeof yearOfBirth);
console.log(typeof status);
console.log(typeof name);
console.log(typeof surname);
console.log(typeof studyGroup);

let habits = null;
let skillFastRun;
console.log(typeof habits);
console.log(typeof skillFastRun);

//7 task
let login = prompt("Please enter your login");
let email = prompt("Please enter your e-mail");
let password = prompt("Please enter your password");

alert(`Dear ${login}, your e-mail is ${email}, your password is ${password}`);

//8 task
const secondsPerMin = 60;
const minsPerHour = 60;
const hoursPerDay = 24;
const daysPerMonth = 30;

let valueHour = prompt(
  `Введіть кількість годин, щоб визначити скільки дана кількість годин має секунд`
);
let secondsPerHour = valueHour * secondsPerMin * minsPerHour;
alert(`Секунд в ${valueHour} годин ${secondsPerHour}  seconds`);

let valueDay = prompt(
  `Введіть кількість днів, щоб визначити скільки дана кількість днів має секунд`
);
let secondsPerDay = valueDay * secondsPerMin * minsPerHour * hoursPerDay;
alert(`Секунд в ${valueDay} добах ${secondsPerDay}  seconds`);

let valueMonth = prompt(
  `Введіть кількість місяців, щоб визначити скільки дана кількість місяців має секунд`
);
let secondsPerMonth =
  valueMonth * secondsPerMin * minsPerHour * hoursPerDay * daysPerMonth;
alert(`Секунд в ${valueMonth} місяцях ${secondsPerMonth}  seconds`);
