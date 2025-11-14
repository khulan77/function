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

//5. Объектын key ба value-г сольж шинэ объект үүсгэх.  Жишээ: { a: 1, b: 2 } → { 1: "a", 2: "b" }

//11.14 Bodlogo Array method//

//1.Массив доторх сөрөг тоонуудыг устгаж шинэ массив гаргах. for, while г.м callback бус аргаар//

//2.Массивыг дахин давтагдахааргүй болгох. Set ашиглаж болохгүй.//

//3.Хоёр массивыг нийлүүлээд давхардлыг арилгах. callback function (map/filter) ашиглахгүй.//

//4.Массив доторх хамгийн урт стрингийг олох//

//5.Массивыг эрэмбэлэх sortl
