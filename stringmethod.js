///String method bodlogo. Function ashiglaj bodno.//

//1.const text = "JavaScript"; svvliin characteriin indexiig ol.//

// const textText = (text) => {
//   const textLength = text.length - 1;
//   console.log(textLength);

//   const result = text.indexOf(textLength);

//   return result;
// };

// const sum = textText("JavaScript");

// //2.const letter = "A"; ascii table deerh codiig ol.//

// const ascAscii = (ascii) => {
//   const asciiCose = ascii.codePointAt(0);

//   return asciiCose;
// };

// console.log(ascAscii("A"));

// //3.const str = "JavaScript"; Script gedeg vgiig salgaj aw.//

// const salgajAwah = (str) => {
//   const sum = str.slice(4, 10);
//   return sum;
// };

// const num = salgajAwah("JavaScript");
// console.log(num);

// //4.const sentence = "I like cats"; cats gdeg ugiig dogs oor solino uu.

// const catDog = (cat) => {
//   const dog = cat.slice(7, 11);
//   return dog;
// };
// const total = catDog("I like cats");
// console.log(total.replaceAll("cats", "dogs"));

// //5.const msg = "wow wow wow"; wow gdeg ugiig haha bolgoj solino uu.//

// const wowWow = (haha) => {
//   const num = haha.slice(0, 11);
//   return num;
// };

// const total1 = wowWow("wow wow wow");
// console.log(total1.replaceAll("wow", "haha"));

// //6.const sentence = "apple,banana,orange"; , aar ni salgana uu.//

// const sentenceSen = (jims) => {
//   console.log(jims.split(","));
// };
// sentenceSen("apple,banana,orange");

// //7.const email = "sumiya@gmail.com"; email esehiig shalga.

// const email = "sumiya@gmail.com";
// console.log(email.includes("@"));

// //8.const laugh = "haha"; 5 udaa dawtaj shine string uusge.//

// const laugh = "haha";
// const result = laugh.repeat(5);
// console.log(result);

// //9.const msg = "apple ++++ banana  ++++apple"; msg ees  "apple banana apple" gsen string vvsge.//
// const msg = "apple ++++ banana  ++++apple";
// const msg1 = msg.slice("++++");
// console.log(msg1[0].trim().concat(" ", msg1[1].trim(), " ".concat()));

// //10.const text = "javascript"; ehnii usgiin UpperCase bolgo.
// const java = "javascirpt";
// console.log(java.charAt(0).toUpperCase() + java.slice(1));

//string method///

//1."Javascript is fun" дотор "fun" үгийн байршлын index-г ол.

// const funFun = (a) => {
//   const word = "fun";
//   const fun = a.indexOf(word);

//   return fun;
// };

// const num = funFun("Javascript is fun");
// console.log(num);

//2."a,b,c,d" → бүх , ийг  - тэмдэгтээр солино.//

// const str = "a,b,c,d";
// const newStr = str.replaceAll(",", " - ");

// console.log(newStr);

//3.JavaScript хэдэн гийгүүлэгч хэдэн эгшиг байгааг тоол.//

// const javas = (a) => {
//   let giiguulegch = "qwrtpsdfghjklzxcbnm";
//   let egshig = "eyuioav";
//   let niilberegshig = [];
//   let niilbergiigvvlegch = [];

//   for (let i = 0; i < a.length; i++) {
//     for (let j = 0; j < giiguulegch.length; j++) {
//       if (a[i] == giiguulegch[j]) {
//         niilbergiigvvlegch.push(a[i]);
//       }
//       if (a[i] == egshig[j]) {
//         niilberegshig.push(a[i]);
//       }
//     }
//   }
//   return {
//     egshig: niilberegshig.length,
//     giiguulegch: niilbergiigvvlegch.length,
//   };
// };

// const utga = javas("Javascript");
// console.log(utga);

//4."1234567890" сүүлийн 4 оос бусад тоог нь * оор орлуул.//
// const numBers = (number) => {
//   let last1 = number.slice(-4);
//   let hidden = "*".repeat(number.length - 4);
//   return hidden + last1;
// };
// const total = numBers("1234567890");
// console.log(total);

//5.Өгүүлбэр доторх хамгийн урт үгийг ол. Example "I love JavaScript programming" → "programming"//

//11.12 hicheeliin array method bodlogo//

//1.Өөрийн дуртай 5 жимсний жагсаалт үүсгээд, хамгийн эхний болон хамгийн сүүлийн жимсийг хэвлэ.//

// const fruits = ["banana", "apple", "mango", "strawberry", "kiwi"];

// console.log(fruits[0]);
// console.log(fruits[fruits.length - 1]);

//2.['apple', 'banana'] массивын төгсгөлд 'mango' нэм.//

// let fruits1 = ["apple", "banana"];

// fruits1.push("mango");

// console.log(fruits1);

//3.[1, 2, 3, 4] массиваас сүүлийн элементийг pop() ашиглан устга.//

// const number = [1, 2, 3, 4];

// number.pop(1, 2, 3, 4);
// console.log(number);

//4.[10, 20, 30] массивын эхэнд 5 нэм.//

// const numbers = [10, 20, 30];

// numbers.unshift(5);
// console.log(numbers);

//5.[100, 200, 300] массиваас эхний элементийг shift() ашиглан устга.//

// const numbers1 = [100, 200, 300];

// numbers1.shift([100, 200, 300]);
// console.log(numbers1);

//6.[1, 2, 3] ба [4, 5, 6] массивуудыг нэгтгэж шинэ массив үүсгэ.//

// const number1 = [1, 2, 3];
// const number2 = [4, 5, 6];

// const number3 = number1.concat(number2);
// console.log(number3);

//7.['apple', 'banana', 'orange'] массив дотор 'banana' байгаа эсэхийг шалга.//

// const fruits2 = ["apple", "banana", "orange"];

// console.log(fruits2.includes("banana"));

//8.['cat', 'dog', 'bird'] массив дотор 'dog' хэддэх индекст байгааг ол.//

// const animal = ["cat", "dog", "bird"];

// const index = animal.indexOf("dog");

// console.log(index);

//9.['I', 'love', 'JavaScript'] массивыг join() ашиглан нэг мөр болгон холбож хэвлэ.//

// const ug = ["I", "love", "JavaScript"];

// const sum = ug.join("I", "love", "JavaScript");

// console.log(sum);

//10.[10, 20, 30, 40, 50] массиваас эхний 3 элементийг slice() ашиглан аваад шинэ массив үүсгэ.//

// const number4 = [10, 20, 30, 40, 50];

// const nn = number4.slice(0, 3);

// console.log(nn);

//11.[1, 2, 3, 4] массиваас хоёр дахь элементийг splice() ашиглан устга.//

// const number5 = [1, 2, 3, 4];
// const two = number5.splice(2, 1);
// console.log(number5);

//12.[1, 2, 3, 4, 5] массивыг reverse() ашиглан урвуугаар эргүүл.//

// const number6 = [1, 2, 3, 4, 5];

// const a = number6.reverse();
// console.log(a);

//13.['banana', 'apple', 'cherry'] массивыг sort() ашиглан үсгийн дарааллаар эрэмбэл.//

// const fruits3 = ["banana", "apple", "cherry"];

// fruits3.sort();
// console.log(fruits3);

//14.Өгөгдсөн хувьсагч массив мөн эсэхийг Array.isArray() ашиглан шалга.//

// const num = ["anna", "elsa"];
// const sum = Array.isArray(num);
// console.log(sum);

//15.['red', 'blue', 'green'] массивын нийт уртыг хэвлэ.//

// const colors = ["red", "blue", "green"];

// const color = colors.length;

// console.log(color);

//16.[10, 20, 30] массивын дундах элемент (20)-ийг 25 болгож солино уу.

// const numbers2 = [10, 20, 30];

// const twentyfive = numbers2.splice(1, 1, 25);
// console.log(numbers2);

//17.['HTML', 'CSS'] ба ['JavaScript', 'React'] массивуудыг нэгтгээд нийт хэдэн элементтэй болохыг хэвлэ.//
// const project = ["HTML", "CSS"];
// const project1 = ["JavaScript", "React"];

// const hamtdaa = project.concat(project1);
// console.log(hamtdaa);

// console.log(hamtdaa.length);

//18.[1, 2, 3, 4, 5] массиваас сүүлийн 2 элементийг splice() ашиглан устга.//
// const numbers3 = [1, 2, 3, 4, 5];

// const namar = numbers3.splice(0, 3);
// console.log(namar);

//19.[5, 10, 15, 20] массиваас гурав дахь элементийг splice() ашиглан хас.//
// const numbers4 = [5, 10, 15, 20];
// const hawar = numbers4.splice(3, 2);
// console.log(numbers4);

//20.[100, 200, 300] массиваас 200 байгаа эсэхийг шалгаад, байвал “байна”, байхгүй бол “байхгүй” гэж хэвлэ.//
// const numbers5 = [100, 200, 300];

// if (numbers5.includes(200)) {
//   console.log("baina");
// } else {
//   console.log("baihgvi");
// }

//11.12 hicheeliin Object method bodlogo//

//1.Хүний нэр, нас, хот гэсэн 3 properties объект үүсгэ.//

// const properties = {
//   name: "Khulan",
//   ago: 20,
//   city: "ub",
// };
// console.log(properties);

//2.Объект дотор байгаа name шинж чанарын утгыг хэвлэ.//
// const properties = {
//   name: "Khulan",
//   ago: 20,
//   city: "ub",
// };
// console.log(properties.name);

//3.person.age утгыг шинэчлээд 30 болго.//const properties = {
const person = {
  name: "Khulan",
  ago: 20,
  city: "ub",
};
console.log(person.ago);

//4.person объектод шинэ job шинж чанар нэмээд 'developer' гэж оноо.//
// const person1 = {
//   name: "Khulan",
//   ago: 20,
//   city: "ub",
//   job: "developer",
// };
// console.log(person1);

//5.delete ашиглан person объектын city propertyg устга.//
// const person3 = {
//   name: "Khulan",
//   ago: 20,
//   city: "ub",
// };

// delete person3.city;
// console.log(person3);

//6.Хоёр объект (user1, user2)-ийг Object.assign() ашиглан нэгтгэ.//

const user1 = { name: "khulan", ago: 20 };
const user2 = { job: "developer" };

const hoyr = Object.assign({}, user1, user2);
console.log(hoyr);

//7.Object.keys() ашиглан объектын бүх түлхүүрүүдийг массив болгон ав.//

//8.Object.values() ашиглан бүх утгуудыг массив болгон ав.//

//9.Object.entries() ашиглан түлхүүр-утгын хосуудыг массив болгон ав.//

//10.Объект дотор тодорхой түлхүүр ("email") байгаа эсэхийг 'email' in user хэлбэрээр шалга.//
