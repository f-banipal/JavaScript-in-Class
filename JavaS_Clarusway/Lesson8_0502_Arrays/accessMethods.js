//? =================================================================
//!              DIZIYI ERISIM METOTLARI
//? =================================================================

const numbers = [3, 5, 2, "4", "bes", "four", 3, "4", "bes", "1", 3, "bes"]

//* includes()
//*-----------------------------------------------------------

console.log(numbers.includes("4"));
console.log(numbers.includes("44"));
console.log(numbers.includes("Bes".toLowerCase()));
console.log(numbers.includes("bes", 5));

//* indexOf(), lastIndexOf();
// ***********************************************************
//* Ilk eslenen indeksi dondurur. Bulunmazsa -1 dondurur.

console.log(numbers.indexOf("bes"));  // 4
console.log(numbers.lastIndexOf("bes"));  // 11
console.log(numbers.indexOf("bes", 5));  
console.log(numbers.indexOf("beslik"));  


if (numbers.indexOf("bes") < 0) {
    console.log("Aranan bulunamadi!");
}else {
    console.log(`Aradiginiz sayi ${numbers.indexOf("bes")} indisinde bulunmustur.`);
}


//* join()

//* --------------------------------------------------------------
//? join dizisinin elemanlari birlestirip string'e cevirir.

const joinedArray = numbers.join("");
console.log(joinedArray);

const joinedArray1 = numbers.join(" ");
console.log(joinedArray1);

const joinedArray2 = numbers.join(" - ");
console.log(joinedArray2);

console.log(numbers);

//* toString()
//? toString fonksiyonu sadece dizinin elemanlarini aralarina virgul koyarak birlestirir ve string yapar

console.log(numbers.toString());

//* concat()
const message = ["The weather", "is", "very", "nice"];
const time = new Date().toDateString();
console.log(time, message);

const concatedArray = time.concat(message);
console.log(concatedArray);

const concatedArray1 = message.concat(time);
console.log(concatedArray1);

console.log(concatedArray1.reverse().join(" "));

//* slice(start, end) -- end exclusive

//* --------------------------------------------------------------------

let cars = ["BMW", "Mercedes", "Fiat", "Togg"];
const slicedCars = cars.slice(1);

console.log(slicedCars, cars);
console.log(cars.slice(0, 2));

console.log("Merh");
let arr = ["Apple", "Samsung", "Lenovo"]

const myArr = [1, 2, 5, 6, 7, 3, 4]
const newArr = myArr
myArr.sort()
console.log(newArr);