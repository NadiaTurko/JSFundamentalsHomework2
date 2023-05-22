// 2. OPERATORS. TYPE CONVERSIONS. ARRAYS. CONDITIONAL STATEMENT
// 📀💿

// 1.
// Дано три цілих числа: a, b, c. Перевірте істинність висловлювання:
//  a < b < c
// const a = 5;
// const b = 15;
// const c = 65;

// console.log(a < b < c);//true
// 2.
// Є такий код:

// let x = 1;
// let y = 2;

// let res1 = // Допишіть код, необхідно використовувати змінні x і y
// console.log(res1); // ""12""
// console.log(typeof res1); // ""string""
// let res1 = String(x)+String(y);// Допишіть код, необхідно використовувати змінні x і y
// console.log(res1); // ""12""
// console.log(typeof res1); // ""string""

// let res2 = String("x" < "y"); // Допишіть код, необхідно використовувати змінні x і y
// console.log(res2); // ""true""
// console.log(typeof res2); // ""string""

// let res3 = x < y; // Допишіть код, необхідно використовувати змінні x і y
// console.log(res3); // true
// console.log(typeof res3); // ""boolean""

// let res4 = `y` - `x`; // Допишіть код, необхідно використовувати змінні x і y
// console.log(res4); // NaN
// console.log(typeof res4); // ""number""

// Допишіть код, щоб в консолі браузера з'явилися рядки, які написані в коментарях, оперуючи при цьому змінними х і у.

// 3.
// Використовуючи функцію prompt() задайте користувачу питання про досягнення ним повнолітнього віку.
// Результат запишіть в змінну isAdult. В залежності від отриманого значення виведіть відповідне повідомлення про статус особи.
//  Наприклад: при виконанні умови вік більше 18 вивести “Ви досягли повнолітнього віку”. Якщо вік менше 18 років вивести
//  “Ви ще надто молоді”,

// let isAdult = prompt('Чи досягли Ви повнолітнього вік?');
// const getAge = (isAdult >= 18) ? 'Ви досягли повнолітнього віку': 'Ви ще надто молоді';
// console.log(getAge);

// 4.
// Задано масив чисел, знайти число яке найбільш часто входить в масив, занести це число в новий масив
//і видалити всі входження цього числа із поточного масиву.
// let arr1 = [4, 5, 2, 1, 6, 5, 3, 5, 2, 5];
// let mf = 1;
// let m = 0;
// let data;
// for (let i = 0; i < arr1.length; i++) {
//   for (let j = i; j < arr1.length; j++) {
//     if (arr1[i] == arr1[j]) m++;
//     if (mf < m) {
//       mf = m;
//       data = arr1[i];
//     }
//   }
//   m = 0;
// }
// arr1 = arr1.filter(function (value) {  return value != data;});
// console.log(data);
// console.log(arr1); // [4, 2, 1, 6, 3, 2]

// 5.
// Користувач вводить три довжини сторін трикутника (використовуйте prompt () три рази для введення кожної сторони).
// Необхідно
//     a) визначити і вивести в консоль площу трикутника
//     b) перевірити чи цей трикутник є прямокутним і вивести в консоль результат перевірки.
// Здійснювати перевірку чи введені користувачем значення коректні, в іншому випадку вивести 'Incorrect data‘. Результат обчислення площі трикутника виводити в консоль з точністю 3 знаки після коми (наприклад:  8.42355465 =>  8.424).
// const a = Number(prompt("Введіть сторону a в трикутнику"));
// const b = Number(prompt("Введіть сторону b в трикутнику"));
// const c = Number(prompt("Введіть сторону c в трикутнику"));
// const halfP = (a + b + c) / 2;
// const formulaHerona = Math.sqrt(
//   halfP * (halfP - a) * (halfP - b) * (halfP - c)
// ).toFixed(3);
// const areaTriangle = a > 0 && b > 0 && c > 0 ? formulaHerona : `Incorrect data`;
// console.log(areaTriangle);
// 6.
// Напишіть функцію calc(a, b, op), яка виконує над числами a і b одну із арифметичних операцій та повертає її результат.
// Вид операції визначається цілим числом op: 1 – віднімання, 2 – добуток, 3 – ділення, інші значення – додавання.
// let result;
// const number1 = Number(prompt("Enter first number: "));
// const operator = prompt("Enter operator ( either +, -, * or /");
// const number2 = Number(prompt("Enter second number: "));

// switch (operator) {
//   case "+":
//     result = number1 + number2;
//     alert(`${number1} + ${number2} = ${result}`);
//     break;

//   case "-":
//     result = number1 - number2;
//     alert(`${number1} - ${number2} = ${result}`);
//     break;

//   case "*":
//     result = number1 * number2;
//     alert(`${number1} * ${number2} = ${result}`);
//     break;

//   case "/":
//     result = number1 / number2;
//     alert(`${number1} / ${number2} = ${result}`);
//     break;

//   default:
//     console.log("Invalid operator");
//     break;
// }
// 7.
// Напишіть функцію findUnique(arr), яка приймає масив arr і перевіряє на унікальність його елементи.
//  Якщо всі елементи масиву унікальні (не мають дублів), то функція поверне true, інакше - false.
// findUnique([1, 2, 3, 5, 3]);  // => false
// findUnique([1, 2, 3, 5, 11]); // => true

// const arr1 = [1, 2, 3, 5, 3];
// const arr2 = [1, 2, 3, 5, 11];
// const findUnique = function (arr) {
//   const arrUnique = [...new Set(arr)];
//   return arrUnique.length === arr.length ? true : false;
// };

// console.log(findUnique(arr1));
// console.log(findUnique(arr2));
