//! FOR LOOP
// let sonuc = 0;

// for (let i = 1; i <= 3; i++) {
//   const sayi = Number(prompt(`${i}. sayiyi giriniz: `));
//   sonuc += parseInt(sayi);
// }
// console.log(sonuc);


let sum = 0;
let ortalama = 0;
let i;
for (i = 1; i<= 50; i++){
    
    const grade = Number(prompt(`Enter ${i}. grade:`))
    sum += parseInt(grade)
    ortalama = sum / i
}
console.log(ortalama);

