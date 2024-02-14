//? OPERATORS

//! Arithmethic Operators

let a = 10
let  b = 2

console.log(a + b)
console.log(a - b)
console.log(a * b)
console.log(a / b)
console.log(a ** b)  // Us alma
console.log(a % b)
console.log(a % (b+1))

let result = 365/6
console.log(result)
console.log(Math.trunc(result))
console.log(result.toFixed(2))
console.log(typeof result.toFixed(3))

// Saat ve Dakika Bulma

let minutes = 375
let hour = Math.trunc(minutes/60)
console.log(hour)

let Minutes = minutes % 60
console.log(`375 dakika = ${hour} saat:${Minutes} dakika.`)

// INCREMENT - DECREMENT
// Post ve pro olarak adlandirilir.

//! Post Increment
let x = 5

console.log(x++)
console.log(x)

//Pre Increment

console.log(++x)
console.log(x)

//! Post Decrement
let y = 5

console.log(y--)
console.log(y)

//Pre decrement
console.log(--y)
console.log(y)

let a1 = 5;
let b1 = a1++;
let c1 = b1++;
console.log(a1);
console.log(b1);
console.log(c1);

// ASSIGNMENT OPERATORS

console.log("Merhaba")

let t1 = 10
let t2 = 5

console.log(t1)
console.log(t2)

console.log(t1 = t1 + t2)
console.log(t1 += t2)
console.log(t1 -= t2)
console.log(t1 *= t2)
console.log(t1 /= t2)
console.log(t1 %= t2)
console.clear()


// COMPARISON OPERATORS
// Boolean deger dondurur

let t3 = 2
let t4 = "2"

console.log(typeof t3)
console.log(typeof t4)

console.log(t3 == t4)
console.log(t3===t4)

console.log(t3!==t4)  // Esit degil mi? - False 2 2'ye esit.
console.log(t3!=t4)  // Esit degil mi? - True : Integer ve String


// LOGICAL OPERATORS
// AND - &&(Or) - !(Not)

console.log("Merhaba")
console.log(Boolean("Merhaba"))
console.log(Boolean("0"))
console.log(Boolean("-0"))
console.log(Boolean("null"))
console.log(Boolean("NaN"))
console.log(Boolean("[]"))
console.log(Boolean("undefined"))

// AND Operatoru False arar ve dondurur, bulamazsa son True degerini dondurur.
console.log(0  && [] && 2)
console.log([] && "M" && 5)
console.log("Semaù")

console.log(4 < 5 && 5 > 3)
console.log("55" < 56 && 67 === "67" || 253 % 11 && !false)
console.log(Boolean(0))

console.log("55" < 56)  //True
console.log(Boolean(67 === "67"))  //False


console.log(Math.round(15.67))


