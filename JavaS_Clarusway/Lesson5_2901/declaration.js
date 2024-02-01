// ? ===========================
// ?        FUNCTIONS
// ? ============================

console.log("** FUNC DECLARATION **")

//* ORNEK1:
//*******************************/


//! Parametresiz Fonksiyon ornegi:
// selamla()  
//? Hoisted (var degiskeni gibi) her yerden cagrilabilir.
//? Parametresiz bir fonk. Disaridan deger almiyor

//? Fonksiyonun tanimlanmasi : bir kere yapilir
// function selamla() {
//     console.log("Selam Cohort16");
// }
// selamla() //? Invoke (Call)
// selamla() 


//! Parametreliu Fonksiyon ornegi:
// Tek parametre ile cagirma
// function selamVer(mesaj) {
//     console.log(`Merhaba ${mesaj}`);
// }

// selamVer("Cohort16")
// selamVer("Cohort17")
// selamVer("JavaScript")

//Iki parametre ile cagirma

// function selamVer1(cohort, ders) {
//     console.log(`Merhaba ${cohort} - ${ders}`);
// }

// selamVer1("Cohort16", "Javascript") 

//! TOPLA FONKSIYONU

// function topla(s1, s2) {
//     console.log("Toplam: ", s1 + s2);
// }
// topla(4, 0)

//! Disaridan giris olursa
// function topla1(say1, say2) {
//     console.log("Toplam: ", say1 + say2);
// }

// const say1 = +prompt("Sayi1: ")
// const say2 = +prompt("Sayi2: ")
// topla(say1, say2)


//! Carpma FONKS.
// function carpma(sayi3, sayi4){
//     console.log("Carpma sonucu: ", sayi3 * sayi4);

    
// }
// const sayi3 = +prompt("Sayi1: ")
// const sayi4 = +prompt("Sayi2: ")

// carpma(sayi3, sayi4)

//VEYA

// function carpma1(x, y) {
//     return x * y;
// }

// const z = carpma1(5, 7);
// console.log("Carpma sonucu: ", z);


function carpma1(x, y) {
    console.log("Carpma sonucu: ", x * y);
    
}

carpma1(6, 9);
