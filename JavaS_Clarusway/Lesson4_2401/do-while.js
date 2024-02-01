// * ============================================
// *            DONGULER(LOOPS)- DO-WHILE
// * ============================================

// console.log("****** DO-WHILE *******")
// let sayac = 1
// do {
//   console.log("Cohort16", sayac)
//   sayac++
// } while (sayac <= 10)

//? EXEMPLE

let devam = ""
do {
  let vize = Number(prompt("Lütfen vize notunu giriniz:"))
  let final = Number(prompt("Lütfen final notunu giriniz:"))
  let ortalama = vize * 0.3 + final * 0.7

  const sonuc =
    ortalama >= 50 ? `${ortalama} ile Geçti` : `${ortalama} ile Kaldı`
  console.log(sonuc)

  devam = prompt("Hesaplamaya devam etmek ister misiniz? e")
} while (devam === "e" || devam === "E")
console.log("Uygulama kapaniyor")






