// * ============================================
// *               KARAR YAPILARI
// * ============================================

console.log("*** CONDITIONS ***")

//! Ornek1
// const num1 = +prompt("Bir sayi giriniz:")
// const num1 = Number(prompt("Bir sayi giriniz:"))
const num1 = 5
// console.log(num1, typeof num1)
// console.log("Toplam:", num1 + num2) //? String birleştirme (concatination)

//! String birleştirme (concatination)

const m1 = 5;
const m2 = 5;
const m3 = "5";
const m4 = 5;
console.log("Toplam :", m1 + m2 + m3 + m4);

if (num1 < 0) {
  console.log("Girilen sayi negatiftir")
} else if (num1 > 0) {
  console.log("Girilen sayi pozitiftir")
} else {
  console.log("Girilen sayi 0'a eşittir")
}
//! Ornek2: 3 sayinin en buyugu

// const sayi1 = NaN
// const sayi2 = ""
// const sayi3 = 3

//? 1.yontem built-in fonks yardimiyla
// const enBuyuk = Math.max(sayi1, sayi2, sayi3)
// console.log("EnBuyuk:", enBuyuk)

//? 2.yontem (nested if)
// if (sayi1 >= sayi2) {
//   if (sayi1 >= sayi3) {
//     console.log("Enbuyuk:", sayi1)
//   }
// }
// if (sayi2 >= sayi1) {
//   if (sayi2 >= sayi3) {
//     console.log("Enbuyuk:", sayi2)
//   }
// }
// if (sayi3 >= sayi1) {
//   if (sayi3 >= sayi2) {
//     console.log("Enbuyuk:", sayi3)
//   }
// }

//? 3.yontem (Logic operatorler ile)
// if (sayi1 >= sayi2 && sayi1 >= sayi3) {
//   console.log("Enbuyuk:", sayi1)
// } else if (sayi2 >= sayi1 && sayi2 >= sayi3) {
//   console.log("Enbuyuk:", sayi2)
// } else if (sayi3 >= sayi1 && sayi3 >= sayi2) {
//   console.log("Enbuyuk:", sayi3)
// } else {
//   console.log("yanlis sayi formati")
// }

// console.log(sayi2 === sayi3) //? 3'lü operatorler type kontrolü yapar
// console.log(true == "true")

//? 4.yontem (Logic operatorler ile)
const sayi1 = 5
const sayi2 = 6
const sayi3 = 7

let enBuyuk = sayi1

if (sayi2 > enBuyuk) {
  enBuyuk = sayi2
}
if (sayi3 > enBuyuk) {
  enBuyuk = sayi3
}

console.log("EnBuyuk:", enBuyuk)

//! Ornek: Condition birleştirme

const yaş = 20
const cinsiyet = "erkek"
const sağlıklı = true

//? string.toLowerCase()  --> built-in fonksiyon (JS nin içerisinde tanımlı olan fonksiyonlar)

const koşul =
  yaş >= 18 && cinsiyet.toLowerCase() === "erkek" && sağlıklı === true

if (koşul) {
  console.log("Askerlik Yapmalı")
} else {
  console.log("Askerlik Yapması gerekmez")
}

//! ORNEK:
//!----------------------------------------------------------------
const liseDiplomasiVar = true;
const universiteSinaviniGecti = "gectI";
const yasDurumu = 18;

const universiteBaslamaDurumu = liseDiplomasiVar ===true && universiteSinaviniGecti.toLowerCase() === "gecti" && yasDurumu >= 18;

if (universiteBaslamaDurumu){
  console.log("Bu kisi universite okuyabilir.");
} else {
  console.log("Maalesef sartlar uymuyor");
}


//? if(koşul === true)  ==> if(koşul)
//* if(koşul === false)  ==> if(!koşul)

const cumle = "Bugün günlerden Cumartesi"
const kucukHarfler = cumle.toLowerCase()
const buyukHarfler = cumle.toUpperCase()
console.log(kucukHarfler)
console.log(buyukHarfler)

//*****************************************************************
//* TERNARY
//*****************************************************************


//! ORNEK!
//!-----------------"TERNARY"-----------------------------------------
const yas = 14
//? Ternary
yas >= 18 ? console.log("Askerlik yapmalı") : console.log("Askerlik yapmaz")

//!-------------------" if-else" --------------------------------------
if (yas > 18) {
  console.log("Askerlik yapmalı")
} else {
  console.log("Askerlik yapmaz")
}

//!ORNEK
//--------------------- nested ternary ---------------------

const age = 19
const sonuc = age <= 14 ? "cocuk " : age <= 18 ? "ergen" : "yetiskin"
console.log(sonuc)

//! if-else hali
//!--------------------------------------------------------------
let durum = ""
if (age <= 14) {
  durum = "cocuk"
} else if (age <= 18) {
  durum = "ergen"
} else {
  durum = "yetiskin"
}

console.log(durum)


const sonucc = "65" === 65 ? "Success" : "finally";
console.log(sonucc);

//! ORNEK
//---------------------------------------------------------------------
// const myAge = prompt("cocugunuzun yasini giriniz");
// const buyukluk = myAge <= 2 ? "Bebek" : myAge <= 7 ? "Kucuk cocuk" : myAge <= 12 ? "Cocuk" : myAge <= 18 ? "Ergen" : myAge <= 65 ?"Yetiskin" : myAge > 65 ? "Yasli" : "Gecerli bir sayi giriniz"

// console.log(buyukluk);

//! if-else ile-------------------------------------------------

const YasiKac = 111
let onunYasi ="Bilinmiyor"

if (YasiKac <= 14){
  onunYasi = "Cocuk";
}else if (YasiKac <= 18){
  onunYasi = "Ergen";
}else {
  onunYasi = "Yetiskin"
}

console.log(onunYasi);


//! MAAS ZAMMI YAPMA
//!---------------------------------------------------------------

const calismaSuresi = 10;
let maas = 25000


// calismaSuresi >= 10 ? maas *= 1.5 : ""

maas = calismaSuresi >= 10 ? maas *= 1.5 : "Zam yok"

console.log("Yeni Maas : ", maas );


//*********************************************************************
//* SHORT CIRCUIT
//******************************************************************** 

let salary = 40000
let year = 10
let marriage = true


//! && Operatoru (True ise yanindaki ifadeyi calistir)
//? Tek condition ve tek durum:
year >= 10 && (salary = salary * 1.5)

//? Cift condition ve tek durum:
// year >= 10 && marriage === true && (salary = salary*1.5)


console.log("Salary : ", salary);

//! || OPERATORU (False ise yanindaki idadeyi calistir)

const sene = 14;
let result = "Joseph"
sene >= 18 || (result = "cocuk")

console.log(result);

//? falst bir degerin tespit edilip buna gore bir degiskene baslangic degeri vermek icin kullanimina uygundur.

result = "Joseph";
let myVar = result || "noname"
console.log(myVar);


//? tek durum var ise short-circuit
//? 2 durum var ise ternary
//? 3-6 arasi durum var ise if-else
//? 6 dan fazla durum var ise switch-case


//********************************************************************
//*  SWITCH - CASE
//**********************************************************************
//! ORNEK - Haftanin Gunleri
//!-------------------------------------------------
// let gun = +prompt("Gun: 1-7")

// switch (gun) {
//     case 1:
//         gun = "Pazartesi";
//         break;
//     case 2:
//         gun = "Sali";
//         break;
//     case 3:
//         gun = "Carsamba";
//         break;
//     case 4:
//         gun = "Persembe";
//         break;
//     case 5:
//         gun = "Cuma";
//         break;
//     case 6:
//         gun = "Pazartesi";
//         break;
//     case 7:
//         gun = "Pazartesi";
//         break;
//     default:
//         alert("Gun 1-7 arasinda olmalidir");
//         break;
// }
// console.log(gun);

//! ORNEK - HESAP MAKINESI
//!--------------------------------------------------------------------

const sayi_1 = Number(prompt("Lutfen ilk sayiyi giriniz : "));
const islemOperatoru = (prompt("Lutfen yapacaginiz islemi : +, -, *, / *: "));

const sayi_2 = Number(prompt("Lutfen ikinci sayiyi giriniz : "));
let sonucOlarak = 0

if (!sayi_2){  // null, undefined, "", false, Nan, Boolean(0) => falsy 5'li
  alert("Gecerli bir sayi giriniz: ")
}

switch (islemOperatoru){

  case "+":
    sonucOlarak = sayi_1 + sayi_2;
    break;

  case "-":
    sonucOlarak =  sayi_1 - sayi_2;
    break;
  
  case "*":
    sonucOlarak = sayi_1 * sayi_2;
    break;

  case "/":
    sonucOlarak = sayi_1 / sayi_2;
    break;

  default:
    alert("[+, -, *, /] islemlerinden birini seciniz: ")
    break;
}


// template literal kullanimi `${degisken} string`

console.log(`${sayi_1} ${islemOperatoru} ${sayi_2} = ${sonucOlarak}`);


