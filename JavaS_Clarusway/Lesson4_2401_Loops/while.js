// * ============================================
// *            DONGULER(LOOPS)- WHILE
// * ============================================

console.log("****** WHILE *******")

let i = 1
while (i <= 10) {
    console.log(i, "Cohort16");
    i++
}

console.log("Dongu bitti.")

//? Kullanicidan 0-100 arasinda bir not isteyen ve girilen not
//? 0-100'den farkli ise Kullaciniyi uyararak yeniden 0-100 arasinda
//? not girmeye zorlayan kodu while dongusu ile yaziniz.

//! Tek basina karar yapilari ile tekrarlama islemi yapilamaz.
//! Tekrar varsa dongu var demektir.
//! Karar yapisi kontrol eder ve duruma gore programin akisini yonlendirir ama tekrar yaptirmaz.

// let sayi = prompt("0-100 arasinda bir sayi giriniz: ")

//     if (sayi <0 || sayi > 100) {
//         alert('Sayi 0-100 arasinda olmalidir.')
//     }

// let sayi1 = +prompt("0-100 arasinda bir sayi giriniz: ")
// let exit = false
// while (sayi1 <0 || sayi1 > 100){
//     console.log("Girilen sayi 0-100 arasinda olmalidir.")
//     sayi1 = prompt("0-100 arasinda bir sayi giriniz veya cikmak icin q tusuna basiniz!: ")

//     if (sayi1 ==="q"){
//         exit = true
//         break
//     }
// }
// exit ? console.log("Cikis yapildi"): console.log("Girilen sayi :", sayi1)
// console.log("Girilen sayi:", sayi1);

let sayi2 = +prompt("0-100 arasinda bir sayi giriniz: ")
let cikis1 = false //Flag mechanisme
for (; sayi2 < 0 || sayi2 > 100;) {

    console.log("Girilen sayi 0-100 arasinda olmalidir");
    sayi2 = prompt("0-100 arasinda bir sayi giriniz!")
    if (sayi2 === "q"){
        cikis1 =true
        break
    }
}
cikis1 ? console.log("Cikis yapildi") console.log("Girilen sayi:", sayi2);;