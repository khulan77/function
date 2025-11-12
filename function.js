// //1.//
// const totalParimetr = (a, b, c) => {
//   return a + b + c;
// };

// const get = totalParimetr(2, 4, 6);

// console.log(get);

// //2.//

// const numberPar = (a, b, c, d, e) => {
//   return a + b + c + d + e;
// };

// const sum = numberPar(1, 3, 5, 7, 8.7);

// console.log(sum);

// //3.//
// const onePar = (a, b) => {
//   const p = a + b;
//   const s = (a + b) * 2;

//   return { p, s };
// };

// const num = onePar(10, 5);
// // console.log(onePar(10, 5));
// console.log(num);

// //4.//
// const secondS = (a) => {
//   const min = parseInt(a / 60);
//   const sec = a % 60;

//   return { min, sec };

//   // return a / 60;
// };

// console.log(secondS(98));

// //5.//
// const numberPar1 = (a) => {
//   const hour = parseInt(a / 3600);
//   const min = parseInt(a / 60);
//   const sec = a % 60;

//   return { hour, min, sec };
// };

// console.log(numberPar1(1297));

// //6.//

// const zeroNew = (a, b) => {
//   const sec1 = a * 60 + b;
//   return sec1;
// };
// console.log(zeroNew(875, 88));

// //7.//
// const threeNu = (a, b, c) => {
//   const sum1 = a * 3600;
//   const sum2 = b * 60;
//   const sum3 = sum1 + sum2 + c;

//   return { sum3 };
// };
// console.log(threeNu(83, 84, 85));

//bodlogo2//
// //1.//
// const dayOne = (a) => {
//   const day1 = parseInt(a / 24);
//   const day2 = a - 24;

//   return { day1, day2 };
// };

// console.log(dayOne(38));

// //2.//

// const dayMIn = (a, b) => {
//   const hour1 = a * 24;
//   const hour2 = hour1 + b;

//   return { hour2 };
// };

// console.log(dayMIn(4, 40));

// //3.//

// const yearMOnth = (a) => {
//   const year = parseInt(a / 12);
//   const month = a % 12;

//   return { year, month };
// };

// console.log(yearMOnth(106));

// //4.//

// const yearNe = (a, b) => {
//   const month1 = a * 12 + b;

//   return { month1 };
// };

// console.log(yearNe(90, 98));

// //5.//

// const tooNeg = (a, b, c, d) => {
//   const h = Math.min(a, b, c, d);

//   return `hamgiinbaga: ${h}`;
// };

// console.log(tooNeg(9, 3, 2, 8));

// //6.//

// const tooHoyr = (a, b, c, d) => {
//   let xaxx = 1;

//   if (a < 5) {
//     xaxx = xaxx * a;
//   }

//   if (b < 5) {
//     xaxx = xaxx * b;
//   }

//   if (c < 5) {
//     xaxx = xaxx * c;
//   }

//   if (d < 5) {
//     xaxx = xaxx * d;
//   }

//   return `5-aas baga toonuudiin urjwer: ${xaxx}`;
// };

// console.log(tooHoyr(1, 9, 4, 3));

// //7.//

// const tooGurv = (a, b, c, d) => {
//   let j = 1;

//   if (a > 5) {
//     j *= a;
//   }
//   if (b > 5) {
//     j *= b;
//   }
//   if (c > 5) {
//     j *= c;
//   }
//   if (d > 5) {
//     j *= d;
//   }

//   return `5-aas ih toonuudiin urjwer: ${j}`;
// };

// console.log(tooGurv(11, 9, 4, 3));

//Bodlogo2-2 shine hicheeliin bodlogo shuu//

//1.2 тоог оруулж ихийг нь хэвлэх//

// const ihToo = (a, b) => {
//   const ih = Math.max(a, b);

//   return `ih too:${ih}`;
// };

// console.log(ihToo(9, 3));

// //2.Тоог тэгш/сондгой шалгах//

// const tegshsondgoi = (a) => {
//   const tegsh = a % 2 === 0;
//   const sondgoi = a % 2 === 1;

//   return `tegsh; ${tegsh}, sondgoi; ${sondgoi}`;
// };

// console.log(tegshsondgoi(8));

// //3.3 ширхэг тоон дундах хамгийн их/хамгийн бага//

// const threeTeg = (a, b, c) => {
//   const ih = Math.max(a, b, c);
//   const baga = Math.min(a, b, c);

//   return `ih: ${ih}, baga: ${baga}`;
// };

// console.log(threeTeg(77, 51, 64));

// //4.Стрингийн уртыг хэвлэх//

// const stringUrt = (a) => {
//   return a;
// };

// console.log(stringUrt("Khulan"));

// //5.Стринг эхний болон сүүлчийн тэмдгийг нийлүүлэх//

// const stringTem = (a) => {
//   const frist = a[0];
//   const last = a[a.length - 1];

//   return frist + last;
// };

// console.log(stringTem("khulan"));

// //6.Стрингийг том үсэг болгож хувиргах//

// const stringBig = (a) => {
//   return a;
// };

// console.log(stringBig("khulan".toUpperCase()));

// //7.Стринг дотор тодорхой тэмдэгт байгаа эсэхийг шалгах. Жишээ: "banana", "n" → true//

// const stringShalgah = (a, b) => {
//   return a.includes(b);
// };

// console.log(stringShalgah("khulan", "a"));

// //8.Тоог 3-аар болон 5-аар хуваагддаг эсэхийг шалгах. 3-т хуваагдал Fizz, 5-т хуваагдал Buzz, хоюуланд нь хуваагддаг бол FizzBuzz гэх хэвлэ//
// const FizzBuzz = (a) => {
//   if ((a % 3 === 0, a % 5 === 0)) {
//     return `FizzBuzz ${a}`;
//   }
//   if (a % 3 === 0) {
//     return `Fizz ${a}`;
//   }
//   if (a % 5 === 0) {
//     return `Buzz ${a}`;
//   }
// };

// console.log(FizzBuzz(15));

// //9.Хоёр string-ийг нэгтгэх a = Hello b = World//

// const stringTwo = (a, b) => {
//   return a + b;
// };

// console.log(stringTwo("Hello", "world"));

// //10.2 тооны дундаж//

// const numberNaw = (a, b) => {
//   return (a + b) / 2;
// };

// console.log(numberNaw(5, 6));

// //11.Тоо эерэг эсвэл сөрөг эсэхийг шалгах - "эерэг", "сөрөг" эсвэл "тэг"
// const sunA = (moon) => {
//   if (moon > 0) {
//     return `eyreg ${moon}`;
//   } else if (moon < 0) {
//     return `surug ${moon}`;
//   } else if ((moon = 0)) {
//     return `teg ${moon}`;
//   }
// };
// console.log(sunA(21));

// //12.Тоог 10-аас их эсэхийг шалгах//

// const tenIh = (a) => {
//   if (a > 10) {
//     return `10-ass ih: ${a}`;
//   } else if (a < 10) {
//     return `10-aas baga: ${a}`;
//   }
// };

// console.log(tenIh(9));

// //13.Хоёр тоо тэнцүү эсэхийг шалгах - "тэнцүү" эсвэл "ялгаатай"//

// const tentsuuYlgaatai = (a, b) => {
//   if (a === b) {
//     return `tentsuu`;
//   } else {
//     return `ylgaatai`;
//   }
// };

// console.log(tentsuuYlgaatai(11, 1));

// //14.Тоог 0-аас их, 100-аас бага эсэхийг шалгах//

// const oneZero = (a) => {
//   return a > 0 && a < 100;
// };
// console.log(oneZero(77));

// //15.Тоог 10%, 20% эсвэл 30% өсгөх//

// const tooIhesgeh = (a) => {
//   const ten = (a * 10) / 100 + a;
//   const twenty = (a * 20) / 100 + a;
//   const thirty = (a * 30) / 100 + a;

//   return { ten, twenty, thirty };
// };

// console.log(tooIhesgeh(77));

// //16.Тоог 100-аас хэтэрвэл 100 болгож хэвлэх//

// const oneHundry = (a) => {
//   if (a < 100) {
//     return `zuw`;
//   } else {
//     return `100`;
//   }
// };
// console.log(oneHundry(103));

// //17.Хоёр тэмдэгт ижил эсэхийг шалгах === ашиглах//

// const ijilHoyr = (a, b) => {
//   if (a === b) {
//     return `adil`;
//   } else {
//     return `uur`;
//   }
// };
// console.log(ijilHoyr(55, 55));

// //18.Хоёр оронтой тооны цифрүүдийг сольж урвуулах//

// const toUrwuulah = (a) => {
//   const an = a[a.length - 1];
//   const aan = a[0];

//   return an + aan;
// };

// console.log(toUrwuulah("25"));

// //19.Тоо сөрөг бол эерэг болгож, эерэг бол хэвээр үлдээх//

// const surugEyreg = (a) => {
//   if (a > 0) {
//     return `eyreg`;
//   }
//   if (a * -1) {
//     return `surug`;
//   }
// };
// console.log(surugEyreg(77));

// //20.1970.01.01 -ээс яг одоог хүртэл хэдэн он, сар, өдөр, цаг, минут, секунд, дооль, милисекунд өнгөрсөнг ол.//
// const milliseconds = Date.now();

// const seconds = parseInt(milliseconds / 1000);
// const minutes = parseInt(seconds / 60);
// const hours = parseInt(minutes / 60);
// const days = parseInt(hours / 24);
// const years = parseInt(days / 365);
// const months = parseInt(days / 30);

// const realMonths = days % 30;
// const realDays = days % 365;
// const realHours = (hours % 24) + 8;
// const realMinutes = minutes % 60;
// const realSeconds = seconds % 60;
// const realMilliseconds = milliseconds % 1000;

// console.log(
//   `${years} jil ${realDays} odor ${realHours} tsag ${realMinutes} minut ${realSeconds} second ${realMilliseconds} milliseconds`
// );
//21.Дугаарын хязгаарлалтаар машин чинь хэд хэд дэх өдөр явахгүйг хэвлэнэ.//
