// const rasxod = 9732735;

// let a = prompt("Pulingizni kiriting:");

// if (a >= rasxod) {
//   console.log("Oq, yo'l sizga");
// } else {
//   console.log(`Sizga, ${rasxod - a}  so'm pul yetmayapti.`);
// }

// IF MASALALARI BOSHLANDI

// 1)

// let a = Number(prompt("Butun son kiriting:"));

// if (a > 0) {
//   let result = `Bu son musbat son ${a + 1}`;
//   console.log(result);
// } else {
//   console.log(`Bu son manfiy son ${a}`);
// }

// 2)

// let a = Number(prompt("Butun son kiriting:"));

// if (a > 0) {
//   let result = `Bu son musbat son ${a + 1}`;
//   console.log(result);
// } else {
//   console.log(`Bu son manfiy son ${a - 2}`);
// }

// 3)

// let a = Number(prompt("Butun son kiriting:"));

// if (a > 0) {
//   let result = `Bu son musbat son ${a + 1}`;
//   console.log(result);
// } else if (a == 0) {
//   console.log(10);
// } else {
//   console.log(`Bu son manfiy son ${a - 2}`);
// }

// 4)

// let n1 = Number(prompt("Birinchi sonni kiriting:"));
// let n2 = Number(prompt("Ikkinchi sonni kiriting:"));
// let n3 = Number(prompt("Uchinchi sonni kiriting:"));
// let sum = 0;

// if (n1 > 0) {
//   sum = sum + 1;
// }
// if (n2 > 0) {
//   sum = sum + 1;
// }
// if (n3 > 0) {
//   sum = sum + 1;
// }
// console.log(`Musbat sonlar ${sum} ta.`);

// 5)

// let n1 = Number(prompt("Birinchi sonni kiriting:"));
// let n2 = Number(prompt("Ikkinchi sonni kiriting:"));
// let n3 = Number(prompt("Uchinchi sonni kiriting:"));
// let summanfiy = 0;
// let summusbat = 0;

// if (n1 > 0) {
//   summusbat = summusbat + 1;
// } else {
//   summanfiy = summanfiy + 1;
// }
// if (n2 > 0) {
//   summusbat = summusbat + 1;
// } else {
//   summanfiy = summanfiy + 1;
// }
// if (n3 > 0) {
//   summusbat = summusbat + 1;
// } else {
//   summanfiy = summanfiy + 1;
// }
// console.log(`Musbat sonlar ${summusbat} ta.
// Manfiy sonlar ${summanfiy} ta.`);

// 6)

// let n1 = Number(prompt("Birinchi sonni kiriting:"));
// let n2 = Number(prompt("Ikkinchi sonni kiriting:"));

// if (n1 > n2) {
//   console.log(`Birinchi son katta`);
// } else {
//   console.log(`Ikkinchi son katta`);
// }

// 7)

// let n1 = Number(prompt("Birinchi sonni kiriting:"));
// let n2 = Number(prompt("Ikkinchi sonni kiriting:"));

// if (n1 > n2) {
//   console.log(`${n2}`);
// } else {
//   console.log(`${n1}`);
// }

// 8)

// let n1 = Number(prompt("Birinchi sonni kiriting:"));
// let n2 = Number(prompt("Ikkinchi sonni kiriting:"));

// if (n1 > n2) {
//   console.log(`Kattasi ${n1}, kichigi ${n2}`);
// } else {
//   console.log(`Kattasi ${n2}, kichigi ${n1}`);
// }

// 9)

// let n1 = Number(prompt("Birinchi sonni kiriting:"));
// let n2 = Number(prompt("Ikkinchi sonni kiriting:"));

// if (n1 > n2) {
//   console.log(`${n2}, ${n1}`);
// } else {
//   console.log(`${n1}, ${n2}`);
// }

// 10)

// let n1 = Number(prompt("Birinchi sonni kiriting:"));
// let n2 = Number(prompt("Ikkinchi sonni kiriting:"));

// if (n1 == n2) {
//   console.log(`0`);
// } else {
//   console.log(`${n1 + n2}`);
// }

// 11)

// let n1 = Number(prompt("Birinchi sonni kiriting:"));
// let n2 = Number(prompt("Ikkinchi sonni kiriting:"));

// if (n1 == n2) {
//   console.log(`0`);
// } else if (n1 > n2) {
//   console.log(n1);
// } else {
//   console.log(n2);
// }

// 12)

// let n1 = Number(prompt("Birinchi sonni kiriting:"));
// let n2 = Number(prompt("Ikkinchi sonni kiriting:"));
// let n3 = Number(prompt("Uchinchi sonni kiriting:"));

// if (n1 < n2 && n1 < n3) {
//   console.log(`Kichigi ${n1}`);
// } else if (n2 < n3 && n2 < n1) {
//   console.log(`Kichigi ${n2}`);
// } else if (n3 < n1 && n3 < n2) {
//   console.log(`Kichigi ${n3}`);
// } else {
//   console.log();
// }

// 13)

// let n1 = Number(prompt("Birinchi sonni kiriting:"));
// let n2 = Number(prompt("Ikkinchi sonni kiriting:"));
// let n3 = Number(prompt("Uchinchi sonni kiriting:"));

// if ((n1 > n2 && n1 < n3) || (n1 < n2 && n1 > n3)) {
//   console.log(`O'rtanchasi ${n1}`);
// } else if ((n2 > n1 && n2 < n3) || (n2 < n1 && n2 > n3)) {
//   console.log(`O'rtanchasi ${n2}`);
// } else if ((n3 > n1 && n3 < n2) || (n3 < n1 && n3 > n2)) {
//   console.log(`O'rtanchasi ${n3}`);
// } else {
//   console.log();
// }

// 14)

// let n1 = Number(prompt("Birinchi sonni kiriting:"));
// let n2 = Number(prompt("Ikkinchi sonni kiriting:"));
// let n3 = Number(prompt("Uchinchi sonni kiriting:"));

// if (n1 < n2 && n2 < n3) {
//   console.log(`Kichigi ${n1} Kattasi ${n3}`);
// } else if (n2 < n3 && n3 < n1) {
//   console.log(`Kichigi ${n2} Kattasi ${n1}`);
// } else if (n3 < n1 && n1 < n2) {
//   console.log(`Kichigi ${n3} Kattasi ${n2}`);
// } else {
//   console.log();
// }

// 15)

// let n1 = Number(prompt("Birinchi sonni kiriting:"));
// let n2 = Number(prompt("Ikkinchi sonni kiriting:"));
// let n3 = Number(prompt("Uchinchi sonni kiriting:"));

// if (n1 > n2 && n3 > n2) {
//   console.log(`Ikkita kattalari ${n1}, ${n3}`);
// } else if (n1 > n3 && n2 > n3) {
//   console.log(`Ikkita kattalari ${n1}, ${n2}`);
// } else if (n2 > n1 && n3 > n1) {
//   console.log(`Ikkita kattalari ${n1}, ${n3}`);
// } else {
//   console.log();
// }

// IF MASALALARI TUGADI