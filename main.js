// 1. user nomli object yarating. Ichida: name va age bo‘lsin. Keyin faqat name ni console.log qiling.
// let user = {
//   name: "Olloberdi",
//   age: 19,
// };
// console.log(user.name);

// 2. product object yarating. Ichida: title va price bo‘lsin. Keyin price ni chiqaring.
// let product = {
//   title: "Najot talim",
//   price: 1200,
// };
// console.log(product.price);

// 3. student object yarating. Ichida: name va active (true yoki false) bo‘lsin. Keyin active ni chiqaring.
// let student = {
//   name: "Olloberdi",
//   active: true,
// };
// console.log(student.active);

// 4. car object yarating. Ichida: brand, color, year bo‘lsin. Keyin color ni chiqaring.
// let car = {
//   brand: "Malibu",
//   color: "black",
//   year: 2025,
// };
// console.log(car.color);

// 5. phone object yarating. Ichida: brand va model bo‘lsin. Keyin model ni ['model'] orqali chiqaring.
// let phone = {
//   brand: "BmW",
//   model: "BmW M5 Competion",
// };
// console.log(phone["model"]);

// 6. user object yarating. Ichida: name va address object bo‘lsin. address ichida: city bo‘lsin. Keyin
// city ni chiqaring.
// let user = {
//   name: "Olloberdi",
//   addres: {
//     city: "Andijon",
//   },
// };
// console.log(user.addres.city);

// 7. users nomli array yarating. Ichida 2 ta object bo‘lsin (name va age bilan). Keyin birinchi
// objectning name ni chiqaring.
// let users = [
//   {
//     name: "Olloberdi",
//     age: 19,
//   },
//   {
//     name: "Husanboy",
//     age: 17,
//   },
// ];
// console.log(users[0].name);

// 8. student object yarating. Ichida: name va subjects (array) bo‘lsin. subjects ichida 2 ta fan yozing.
// Keyin birinchi fanni chiqaring.
// let student = {
//   name: "Olloberdi",
//   subjects: ["IT", "English"],
// };
// console.log(student.subjects[0]);

// 9. company object yarating. Ichida: name va employees (array) bo‘lsin. employees ichida 2 ta
// object (name va role) bo‘lsin. Keyin ikkinchi employee role ni chiqaring.
// let company = {
//   name: "Epam",
//   employess: [
//     {
//       name: "Olloberdi",
//       role: "Frontend developer",
//     },
//     {
//       name: "Husanboy",
//       role: "Backend developer",
//     },
//   ],
// };
// console.log(company.employess[1].role);

// 10. user object yarating. Ichida: name, hobbies (array), address (object) bo‘lsin.
//  address ichida city yozing. Keyin hobbies[0] va city ni chiqaring.
// let user = {
//   name: "Olloberdi",
//   hobbies: ["Futbol"],
//   addres: {
//     city: "Andijon",
//   },
// };
// console.log(user.hobbies[0], user.addres.city);
//==============================================================
// 50.Kinoteatrga bollar kino ko’rgani kirmoqchi bunda 2ta talab
// mavjud. Shunda funksiya 2ta argument qabul qiladi. Bolaning
// yoshini va ota-onasi bilan birgami degan boolean qiymat. Agar
// bolaning yoshi kamida 15 bo’lsa va ota-onasi bilan birga bo’lsa
// funksiya true qaytarsin aks holda false.
// function kinogaKirish(yosh, otaOna) {
//   if (yosh >= 15 && otaOna) {
//     return true;
//   } else {
//     return false;
//   }
// }
// console.log(kinogaKirish(15, false));
//======================================================================
// 51.Quyidagi namunalarda kamchilik bor funksiya aslida har
// bir massivning elementiga 1 qo’shishi kerak. Funksiya to’g’ri
// yasang.
// let massiv = [0, 1, 2, 3];
// function oshirBirga(arr) {
//   let qosh = [];
//   for (let i of arr) {
//     qosh.push(i + 1);
//   }
//   return qosh;
// }
// console.log(oshirBirga(massiv));
// ================================================================
// 52.Template string yordamida ya’ni backticlar orqali “ ushbu
// formatdagi stringni hosil qiling.
// var natija; -> sizning kodingiz.
// Natija: “Donyor Olimov” ko’rinishida bo’lsin.
// var ism = "Donyor";
// var familiya = "Olimov";
// console.log(`${ism} ${familiya}`);
//================================================================
// 53.Quyidagi namunani ternary operator ko’rinishida yozing.
// var holatiYaxshimi = true;
// var holati = holatiYaxshimi ? "yaxshi" : "yaxshi emas";
// console.log(holati);
//===============================================================
// 54.Funksiya string qabul qiladi. Agar ushbu stringning uzunligi.
// juft bo’lsa funksiya true qaytarsin, aks holda false
// function sozUzunligi(str) {
//   if (str.length % 2 === 0) {
//     return true;
//   } else {
//     return false;
//   }
// }
// console.log(sozUzunligi("olma"));
// ===============================================================
// 55.Funksiya 2ta argument qabul qiladi. Ikkala argument ham
// son, funksiya 1-sonni 2-songa darajaga ko’tarilgan qiymatni
// qaytarsin.
// function daraja(x, y) {
//   return x ** y;
// }
// console.log(daraja(10, 10));
// ===============================================================
// 56.Funksiya massiv qabul qiladi. Ushbu funksiya massivning
// so’nggi elementini qaytarib bersin.
// function songiElement(arr) {
//   return arr[arr.length - 1];
// }
// console.log(songiElement([1, 2, "olma"]));
//====================================================================
// 57.Kabisa yilini aniqlaydigan funksiya yasang. Agar kiritilgan
// yil kabisa bo’lsa funksiya true qaytaradi, aks holda false. Kabisa
// yili 4ga bo’linadigan yil bo’lib, lekin 100ga bo’linsa u holda
// 400ga ham bo’linganidagina kabisa hisoblanadi.
// function kabisa(yil) {
//   if ((yil % 4 === 0 && yil % 100 !== 0) || yil % 400 === 0) {
//     return true;
//   } else {
//     return false;
//   }
// }
// console.log(kabisa(1968));
//==================================================================
// 58.Funskiyaga so’z kiritilsa funksiya ushbu so’zni birinchi
// harfisiz qaytarib bersin.
// function soz(word) {
//   return word.slice(1);
// }
// console.log(soz("olloberdi"));
//============================================================
// 59.Boolen qiymatini teskarisini qaytarib beradigan funksiya
// yasang.
// function teskariBool(bool) {
//   return !bool;
// }
// console.log(teskariBool(false));
//==========================================================
// 60.Funskiya son qabul qiladi, agar son juft bo’lsa funskiya “juft”
// qaytaradi, agar toq bo’lsa “toq” qaytarsin.
// function juftMiToqmi(son) {
//   if (son % 2 === 0) {
//     return "juft";
//   } else {
//     return "toq";
//   }
// }
// console.log(juftMiToqmi(3));
