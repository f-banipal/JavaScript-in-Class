

//? =================================================================
//?                   DIZILER (ARRAYS)
//? =================================================================

console.log("***** ARRAYS *****");

//* Dizi Tanimlama
//* ---------------------------------------------------------------------


//! Square Bracket (Array Literal : Koseli parantez)
const names = ["Ahmet", "Ismet", "Saffet", "Can", true, 6.5, [1,3,4], "Ara Vakti"];  // koseli parantezin ailesi Array'dir.
console.log(names);
console.log("Uzunluk : ", names.length);
console.log(typeof names);  //*object

//*  Diziden Veri Okuma - Yazma (Indisleme)
//* --------------------------------------------------------------------

console.log(names[4]);
console.log(names[0]);
console.log(names[3]);
console.log(names[6][0]);

//? Dizinin son elemanini bir degiskene aktaralim.
const lastElement = names[names.length-1]

console.log(lastElement);
console.log(names);


//?

names[4] = "Ferit"
console.log(names);


//! uncaught TypeError: Assignment to constant variable.
//!at arrays.js:39:7

//* names = [4, 6, 7]  // const ile tanimlanan names. Burada Stack alani stack ama Heap alani verileri guncellenir

// 5. indixdeki verinin degerinin bir artirmak istersek:

names[5]++
console.log(names);

console.log(names[2].toLocaleLowerCase());
names[2] = names[2].toLocaleLowerCase();
console.log(names);

//! 2.Yontem (Object Constructor)

const programmingLangs = new Array("GO", "JS", "Java");
console.log(programmingLangs);

const myArr = new Array(2);
console.log(myArr);

const myArrr = new Array(2, 3);  //? [empty × 2]
console.log(myArrr);  //? [2, 3]



//! 3. Yontem (Array.of)

const sayilar = Array.of(4);  //* [4]
console.log(sayilar);




//? =================================================================
//!              DIZIYI DEGISTIREN (MUTATOR) METODLAR
//? =================================================================

// Methodlar Array ler icin yazilmis fonksiyonlar. Built-in function or method

//? Diziyi degistiren (mutator) metodlar
//? Dizi erisim metodlari
//? Dizi iterasyon metotlari (dolasiyor)

// mdn Array Method
//!https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array

// 1 - Diziyi degistiren (mutator) metodlar

const cars = ["BMW", "Mercedes", "Audi", "Togg", "Anadol", "Devrim"];
cars[cars.length] = "Sahin"
console.log(cars);

//* push() dizinin sonuna eleman ekler ve dizinin son eleman sayisini dondurur. Orijinal dizi degisir.
const el = cars.push("Kartal")  // dizinin adi.metodun adi ("aldigi deger")

console.log(cars, el);

//** pop() son elemani siler ve sildigi elemani dondurur.
const deletedCar = cars.pop()
console.log(deletedCar, cars);

//* shift(), dizinin 0. elemanini siler ve silinen elemani dondurur.
const bmw = cars.shift();
console.log(bmw, cars);

//* unshift dizinin 0. indeksine eleman ekler ve dizinin son eleman sayisini dondurur.
const newEl = cars.unshift("Toros");
console.log(cars, newEl);

//* splice()
//? 1. parametre : eklenecek indis numarasi
//? 2. parametre : 0 ose araya ekleme, 1 ise uzerine yazma
//? 3. parametre : yeni eklenecek veri

cars.splice(1, 0, "Porsche"); //? o secildi yani araya eklendi
console.log(cars);

cars.splice(4, 0, "Serce", "Tofas"); //? o secildi yani araya eklendi
console.log(cars);


//* reverse()
cars.reverse()  // Diziyi ters cevir.
console.log(cars);

//! sort()
//sort metodu diziyi iterasyona ugratir ve ASCII karakterlere gore siralama yapar.
// Dolayisi ile string'le dogru sekilde siralama yapabilir.

cars.sort()  // siralama ASCII ye gore yapilir.
console.log(cars);

cars.reverse()
console.log(cars);

//! Ancak sayilar ile dogrudan siralama yapilirsa ASCII'den dolayi yanlis degerler siralanmis olabilir. 

const numbers = [3, 2, 22, 6, 1, 11, 9, 3];

numbers.sort( (a, b) => a - b); // Asc (kucukten buyuge)
console.log(numbers);
numbers.sort( (a, b) => b - a); // DESC (Buyukten kucuge)
console.log(numbers); 


//* fill()

const degerler = [2, 1, 4, 33, 7, 9, 22]
degerler.fill(0)

// let j = 1
// for(let i = 0; i< degerler.length; i++){
//     degerler[i] = j++
//     console.log(i);
// }
degerler.fill(77, 3)  //1. parametre: deger, 2. start index
console.log(degerler);
degerler.fill(44, 2, 5)  //1. parametre: deger, 2. start index, 3. end index (not inclusive)
console.log(degerler);


