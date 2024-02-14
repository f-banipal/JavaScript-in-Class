/// ? =====================================
// ?              FUNCTIONS
// ? ======================================

console.log("*** ARROW ****")

//? Arrow func declaration

const mesajVer = () => console.log("JS is browser language");

//? Invoke
mesajVer()

// ORNEK - 2

const kareAl = x => x * x
console.log(kareAl(3));

// ORNEK - 3


// const yasHesapla = (yil) => 2024 - yil

// const yil = Number(prompt("Dogum Yili: "))
// console.log(`Yasiniz ${yasHesapla(yil)} dir.`);

const yasHesapla = (yil) => new Date().getFullYear() - yil

const yil = Number(prompt("Dogum Yili: "))
console.log(`Yasiniz ${yasHesapla(yil)} dir.`);

// console.log(new Date());