//2025.11.14 Bodlogo String method//

//1.1. Доторх үгсийг урвуу болгох. Эхний болон сүүлийн үгийг өөрчлөхгүй. Жишээ: Оролт: "JavaScript бол үнэхээр сонирхолтой хэл" Гаралт: "JavaScript лоб рээхнеүн йотлохронис хэл"

// const ugnuud = (uguulber) => {
//   const word = uguulber.split(" ");

//   for (let i = 1; i < word.length - 1; i++) {
//     word[i] = word[i].split("").reverse().join("");
//   }
//   return word.join(" ");
// };

// const ug = "JavaScript бол үнэхээр сонирхолтой хэл";
// console.log(ugnuud(ug));

//2. Өгүүлбэр дэх давтагдахгүй үсгүүдийг тоолох (том жижиг ялгахгүй) Зөвхөн a–z үсгийг тоолно. Оролт: "Сайн уу?" Гаралт: 4//

// const room = {};
// const text = "Sain uu?";
// let j = 0;

// for (let char of text) {
//   const seenLetters = room[char];

//   if ((char >= "a" && char <= "z") || (char >= "A" && char <= "Z")) {
//     if (!seenLetters) {
//       room[char] = 1;
//       j++;
//     } else {
//       delete room[char];
//       j--;
//     }
//   }
// }
// console.log(room);
// console.log(j);

//3. Давхардсан үсгүүдийг арилгаж дарааллыг хадгалах. Оролт: "aabbccddeeff" Гаралт: "abcdef"//

// let result = "";

// const orolt = "aabbccddeeff";
// for (let char of orolt) {
//   if (!result.includes(char)) {
//     result += char;
//   }
// }
// console.log(result);

//4. kebab-case → camelCase болгох. Оролт: "hello-world-example" Гаралт: "helloWorldExample"//

// const kebab = "hello-world-exemple";
// const hab = kebab.split("-");

// for (let i = 0; i < hab.length; i++) {
//   hab[i] = hab[i][0].toUpperCase() + hab[i].slice(1);
// }
// const camel = hab.join("");

// console.log(camel);

//5. Урт нь 4-өөс их бол дундах үсгүүдийг “*” болгох. Эхний 2 ба сүүлийн 2 үлдэнэ. Оролт: "mongolia" Гаралт: "mo****ia"//

// const uls = "mongolia";

// let masked;
// if (uls.length > 4) {
//   masked = uls.slice(0, 2) + "*".repeat(uls.length - 4) + uls.slice(-2);
// } else {
//   masked = uls;
// }

// console.log(masked);

//Bodlogo Object method//

//1. Объектын бүх key-үүдийг camelCase руу хөрвүүлэх. Дотроо объект байвал тэрийг ч хөрвүүлнэ.//

// const person = {
//   name: "khulan",
//   age: 18,
//   city: "UB",
//   email: "khulan77@gmail.com",
// };
// const keys = Object.keys(person);

// for (let i = 1; i < keys.length; i++) {
//   keys[i] = keys[i][0].toUpperCase() + keys[i].slice(1);
// }
// console.log(keys.join(""));

//2. Объект доторх утгуудын төрлийг тоолох. Тоо, стринг, boolean, массив, объект – тус бүр хэд байгааг тооцно.

// const person = {
//   name: "khulan",
//   age: 18,
//   city: "UB",
//   email: "khulan77@gmail.com",
// };

// const values = Object.values(person);

// const obj = {
//   string: 0,
//   number: 0,
//   boolean: 0,
//   object: 0,
// };

// for (let value of values) {
//   if (typeof value === "string") {
//     obj.string = obj.string + 1;
//   }
//   if (typeof value === "number") {
//     obj.number = obj.number + 1;
//   }
// }

// console.log(obj);

//3. Объектыг Deep Freeze хийх. Object.freeze()-ийг ашигла.

// const person1 = {
//   firstName: "John",
//   lastName: "Doe",
//   age: 50,
//   eyeColor: "blue",
// };

// Object.freeze(person1);
// console.log(person1);

//4.Тодорхой утгатай бүх key-ийг олох. Давхар объектууд дундаас ч хайна. Жишээ: утга нь "admin" бол "role": "admin" гэх бүх key-г буцаах.//

const person = {
  name: "khulan",
  age: 18,
  job: "developer",
  role: "user",
};

//5. Объектын key ба value-г сольж шинэ объект үүсгэх.  Жишээ: { a: 1, b: 2 } → { 1: "a", 2: "b" }

// const number = {
//   a: 1,
//   b: 2,
//   c: 3,
//   d: 4,
// };

// const result = {};

// for (let key in number) {
//   const value = number[key];
//   result[value] = key;
// }

// console.log(result);

//11.14 Bodlogo Array method//

//1.Массив доторх сөрөг тоонуудыг устгаж шинэ массив гаргах. for, while г.м callback бус аргаар//

// const number = [3, -1, 5, -7, 9, -2];
// const result = [];

// for (let i = 0; i < number.length; i++) {
//   if (number[i] >= 0) {
//     result.push(number[i]);
//   }
// }

// console.log(result);

//2.Массивыг дахин давтагдахааргүй болгох. Set ашиглаж болохгүй.//

// const arr = [1, 2, 3, 3, 4, 4, 5];
// const result = [];

// for (let i = 0; i < arr.length; i++) {
//   if (!result.includes(arr[i])) {
//     result.push(arr[i]);
//   }
// }

// console.log(result);

//3.Хоёр массивыг нийлүүлээд давхардлыг арилгах. callback function (map/filter) ашиглахгүй.//
// const number = [1, 2, 7, 7, 4, 4, 9, 9];
// const number1 = [3, 5, 5, 7, 8, 6];

// number.push(...number1);
// const result = [];

// for (let i = 0; i < number.length; i++) {
//   if (!result.includes(number[i])) {
//     result.push(number[i]);
//   }
// }

// console.log(result);

//4.Массив доторх хамгийн урт стрингийг олох//
// const ug = "Hamgiin urt ug";

// const words = ug.split(" ");

// let longest = "";

// for (let i = 0; i < words.length; i++) {
//   if (words[i].length > longest.length) {
//     longest = words[i];
//   }
// }

// console.log(longest);

//5.Массивыг эрэмбэлэх sortl

// const arr = ["banana", "apple", "cherry", "date"];

// arr.sort();
// console.log(arr);

//Bodlogo Array method with callback//

//1. Тооноос бүрдэх массивыг квадрат болгон буцаах (map). Оролт: [1, 2, 3] → [1, 4, 9].//

// const numbers = [1, 2, 3];

// const squared = numbers.map((num) => num * num);

// console.log(squared);

//2. Сөрөг тоонуудыг шүүх (filter).  Оролт: [1, -3, 4, -2] → [1, 4]//

// const num = [1, -3, 4, -2];

// const sum = num.filter((num) => num >= 0);
// console.log(sum);

//3. Массивын нийлбэрийг олох (reduce). Оролт: [5, 10, 3] → 18//

// const number = [5, 10, 3];
// const add = number.reduce((acc, value) => (acc += value));

// console.log(add);

//4. Объектуудын массивыг нэрcийн жагсаалт болгож хувиргах. map ашиглана.
//Жишээ: [{name: "Bold"}, {name: "Suren"}] → ["Bold", "Suren"]

// const naMe = [
//   { name: "bold" },
//   { name: "bat" },
//   { name: "suren" },
//   { name: "dulam" },
// ];
// const namesList = naMe.map((item) => item.name);

// console.log(namesList);

//5. Массив доторх үгсийн уртын нийлбэрийг ол (reduce). Оролт: ["hi", "hello", "mongolia"]. Гаралт: 2 + 5 + 8 = 15//

// const words = ["hi", "hello", "mongolia"];

// const worDs = words.reduce((acc, words) => acc + words.length, 0);

// console.log(worDs);

//Array methods with callback (Өөрсдөө dataгаа зохио).//

//MAP (10 бодлого)//

//1.Тоон массивыг квадратласан шинэ массив болго.//

// const number = [8, 9, 10];
// const square = number.map((too) => too * too);

// console.log(square);

//2.Тоонуудыг “тэгш” эсвэл “сондгой” гэсэн стринг болгон хувирга.//

// const number = [7, 24, 33, 67, 99];
// const tegshSondgoi = number.map(
//   (value) => (value % 2 === 0 && "tegsh") || (value % 2 === 1 && "sondgoi")
// );
// console.log(tegshSondgoi);

//3.Объектын массив дотроос зөвхөн name утгуудын массив үүсгэ.//

// const nameS = [
//   { name: "khulan", age: 18 },
//   { name: "bat", age: 30 },
//   { name: "dulam", age: 20 },
// ];
// const namesll = nameS.map((item) => item.name);

// console.log(namesll);

//4.Наснуудын массиваас 2025 он дээр үндэслэн төрсөн жилүүдийн массив гарга.//
// const age = [18, 26, 32, 78];

// const year = age.map((age) => 2025 - age);

// console.log(year);

//5.Стринг бүрийн эхний үсгийг том болго.//

// const bigBolgo = ["sun", "moon", "star"];

// const big = bigBolgo.map((a) => a[0].toUpperCase() + a.slice(1));

// console.log(big);

//6.Стринг массивыг тэдгээрийн уртын массив болгон хувирга.//
// const uRt = ["sun", "moon", "star"];
// const urt = uRt.map((a) => a.length);
// console.log(urt);

//7.Бүтээгдэхүүний массив дахь бүх үнэд 10% нэмсэн шинэ массив гарга.//

// const buteegdehuun = [100, 200, 300];

// const tenhuwi = buteegdehuun.map((a) => a * 0.1 + a);
// console.log(tenhuwi);

//8.Тоонуудыг “₮1,200” гэх мэт форматтай мөнгөн дүнгийн стринг болго.//

//9.Boolean утгуудыг “ТИЙМ” эсвэл “ҮГҮЙ” стринг болгон хувирга.//

// const number = [];

// const boolean = number.map(
//   (a) => (a % 2 === 0 && "ТИЙМ") || (a % 2 === 1 && "ҮГҮЙ")
// );
// console.log(boolean);

//10.firstName, lastName талбартай объектуудыг “lastName, firstName” стринг болгон хувирга.//

// const people = [
//   { firstName: "khu", lastName: "lan" },
//   { firstName: "tegsh", lastName: "duuren" },
// ];

// const dd = people.map((a) => a.firstName + a.lastName);

// console.log(dd);

//FILTER (10 бодлого)//

//11.Массив дахь бүх сөрөг тоонуудыг шүүж хая.

// const surug = [2, 77, -12, -21, 55];
// const sum = surug.filter((num) => num >= 0);
// console.log(sum);

//12.Урт нь 5-аас дээш бүх стрингийг үлдээ.//

// const strinG = ["pentagon", "circle", "rectangle", "star", "sun"];

// const a = strinG.filter((a) => a.length > 5);

// console.log(a);

//13.Хэрэглэгчдийн массиваас 18+ настай хэрэглэгчдийг шүүнэ.//

// const herelegch1 = [
//   { name: "darkhanbaatar", age: 51 },
//   { name: "ulzii", age: 50 },
//   { name: "dashnym", age: 23 },
//   { name: "tegshduuren", age: 13 },
//   { name: "khulan", age: 18 },
//   { name: "dashdulam", age: 20 },
// ];

// const deesh = herelegch1.filter((a) => a.age > 18);
// console.log(deesh);

//14.Үнэ нь 5000-аас дээш бүтээгдэхүүнүүдийг шүүнэ.//

// const une = [8500, 9900, 3200, 7600, 2500];

// const shuuh = une.filter((a) => a > 5000);
// console.log(shuuh);

//15.Массив дотроос зөвхөн тэгш тоонуудыг үлдээгээрэй.//
// const number = [11, 22, 33, 44, 55, 66, 99, 77, 88];

// const tegshToo = number.filter((a) => a % 2 === 0);
// console.log(tegshToo);

//16.Оноо нь 80-аас дээш оюутнуудыг шүүнэ.//
// const students = [
//   { name: "Бат", score: 70 },
//   { name: "Сара", score: 92 },
//   { name: "khulan", score: 100 },
// ];

// const dun = students.filter((a) => a.score > 80);
// console.log(dun);

//17.“а” үсэг агуулсан бүх үгийг шүүнэ.//

// const aUseg = ["apple", "cherry", "banana", "strawberry", "kiwi"];

// const aA = aUseg.filter((a) => a.includes("a"));
// console.log(aA);

//18.filter ашиглан массивын давхардсан утгуудыг устга.//

// const number = [2, 3, 4, 55, 66, 55, 8, 8, 3];
// const unique = [];
// const dawHardsan = number.filter((a) => !unique.includes(a) && unique.push(a));

// console.log(unique);

//19.Үнэн (truthy) утгуудыг үлдэж, бусдыг хая.//

const truthy = [2, 5, 6, 9];

//20.isActive = true объектуудыг шүүнэ.//

// const users = [
//   { name: "Bold", isActive: true },
//   { name: "Suren", isActive: false },
//   { name: "Bat", isActive: true },
//   { name: "Naraa", isActive: false },
// ];

// const activeUsers = users.filter((user) => user.isActive);

// console.log(activeUsers);

//REDUCE (10 bodlogo)

//21.Тоон массивын нийлбэрийг ол.//

// const number = [1, 2, 3];
// const nemeh = number.reduce((a, b) => a + b, 0);
// console.log(nemeh);

//22.Тоон массивын дунджийг reduce ашиглан ол.//

const numbers = [1, 2, 3, 4, 5, 6, 7, 8];
const rec = numbers.reduce((a, b) => a + b, 0) / numbers.length;
console.log(rec);

//23.Үгсийн массиваас үгийн давтамжийн объект үүсгэ.//

//24.Худалдан авалтын массивын нийт үнийг ол.

//25.Массивын хамгийн том утгыг reduce ашиглан ол.//

//26.Массив дахь хамгийн урт стрингийг ол.//

//27.Объектын массивыг ID-ээр нь объект болгон хувирга (id-тэй map).//

//28.Тоонуудаас нийлбэр, хамгийн их, хамгийн бага утгуудыг нэг reduce-ээр гарга.//

//29.Стринг массивыг нэг мөр болгон хооронд нь таслалтайгаар нэгтгэ.//

//30.Массив дахь эерэг ба сөрөг тоонуудын тоог нэг reduce дээр тоол.//
