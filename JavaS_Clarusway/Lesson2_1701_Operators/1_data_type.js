// STRINGS DATA TYPE:

let str1 = "Merhaba Dunya"
let str2 = 'Merhaba Dunya'
let str3 = `Merhaba Dunya`  

console.log(str1)   
console.log(str2)   
console.log(str3)

ad = "George"
let str4 = `Merhaba ${ad}`
console.log(str4)

let str5 = new String("Merhaba")
console.log(str5)
console.log(typeof str5)

// Kacis Isareti (\):

let str6 = "Merhaba\" nasilsiniz"
console.log(str6)


// Index Numaralari

console.log(str1[4])

// Stringler Immutable : bu sekilde degistirilemez ama icindeki degere ulasilir.
str1[4] = "u"
console.log(str1)

let kimlik = 12345678901
let adSoyad = "John Smith"
console.log("Personelimiz ", adSoyad, "'in kimlik numarasi", kimlik)

// veya

console.log(`Personelimiz ${kimlik}`) //$ isareti islevini yapmak icin tick kesme isareti kullanilmalidir.

//! BOOLEAN
// True veya False degeri WebTransportDatagramDuplexStream.

let deger = 0.1
console.log(Boolean(deger))

let deger1 = 1
console.log(Boolean(deger1))

let deger2 = 0
console.log(Boolean(deger2))

let deger3 = undefined
console.log(Boolean(deger3))

let deger4 = {}
console.log(Boolean(deger4))

let deger5 = NaN
console.log(Boolean(deger5))

let isOpen = "evet"

if (isOpen == "evet"){
    console.log("Evet")
}
else{
    console.log("Hayir")
}

//! NULL

let personel = null
console.log(personel)
console.log(typeof personel)

console.log(null + 5)


// UNDEFINED

let phoneNumber;
console.log(phoneNumber)
console.log(typeof phoneNumber)

let myPhoneNumber = "Herkes Buraya"
console.log(typeof myPhoneNumber)

// NaN - Not a number

let n;

let result = n + 15
console.log(result)
console.log(isNaN(result))  //result sayi olmayan bir element mi. Evet. n + 15

let m = 4;

let result1 = n + 15
console.log(result1)
console.log(isNaN(result))  //result sayi olmayan bir element mi. Evet. n + 15

// NON PRIMITIVE
// Array, Object, function

let personelList = ["Ali", "Ayse", "George"]  //Array
let personelData = {name:"Ali", surname:"Guven", age:"45"}  //Object

function sum(){  //function
    return "toplam=4"
}