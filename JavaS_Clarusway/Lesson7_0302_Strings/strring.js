

/**************************************************************** */
/*                      STRINGLER                                */
//**************************************************************** */

//? String olusturma yontemleri

const str1 = "new string"
const str2 = 'new string'
const str3 = `new string`  // backtickler ile template literal

const str4 = new String("new string")

console.log(str1);
console.log(str2);
console.log(str3);
console.log(str4);
const deger = "Gunaydin"
console.log(`${deger} Baba`);

//! --------------- ESCAPE CHARACTERS ---------------------------------*/


// "Escape characters" (kacis karakterleri), ozel bir anlami olan karakterlerin belirtilmis bir amac icin kullanilmasini saglayan karakterlerdir.

// Escape karakterler "\" isareti ile  kullanilir. 

// "\" Hemen yanindaki karakteri goz ardi edilmesini saglar.

let metin = "Omer'in kalemi"
// let matin2 = 'Omer'in kalemi' //dogru olan 'Omer\'in kalemi' 

let path = "c:\\Users\\Kullanicilar"
console.log(path);

// '\n' new line => Bir alt satira gecmesini saglar.
// '\t' tab boslugu verir (- karakterlik bosluk)
const parag = "\tMerhaba Cohort 16 sakinleri \nGunumuz guzel gecsin"
console.log(parag);

// Unicode karakterleri icin

console.log("\u2615");
console.log("\uD83C\uDF39");
console.log("\uD83D\uDCB2");
console.log("\u00A9");

console.log(`   Merhaba Dunya 
sakinleri nasilsiniz`); 


// -----------------------------------------------------------------
/****************************************************************** */
//*                       STRING YAPISI VE INDEXLEME                */
// ******************************************************************

let course = "Clarusway"  // Immutable degiller yani parca degisikligi yapilamaz
console.log(course);

console.log(course[6]);  // 5 numarali index karakteri (0'dan itibaren)
console.log(course[7]);
console.log(course[8]);

course = "Clarus-WAY"
console.log(course);

for (let i = 0; i <= 9; i++ ) {
    console.log(course[i]);
}

for (let i = 7; i <= 9; i++ ) {
    console.log(course[i]);
}

// *********************************************************************
//!                       STRRING PROPERTY AND METHOD
// ********************************************************************

//! ********   STRING PROPERTY (Ozellikleri) **************************

// Property bir stringin kendi özelliğidir bir method(fonksiyon) değildir bu nedenle parantez açıp kapatmaya gerek yoktur.

//? length
//? prototype

console.log(course.length);
console.log(typeof course);

for (let i = 0; i<course.length; i++)
console.log(course[i]);

console.log(typeof course);
for (let i = 0; i<=course.length-1; i++)
console.log(course[i]);

console.log(typeof course);
for (let i = course.length-1; i>=0; i--)
console.log(course[i]);

//!  ***************  STRING METHODS **********************************
//***************************************************************** */

//! 1 - STRING BIRLESTIRME

const name = "John"
const surname = "Due"
const job = "Developer"

// +
console.log(("Our customer's name :" + name + " surname: " + surname + "  and his job: " + job ));

// OR

console.log(`Our customer's name: ${name}, surname: ${surname} and his job: ${job}`);
const fullname = name.concat(surname)
console.log(fullname);

//! *********************************************************************
// toLowerCase()
//! *******************************************************************

console.log(fullname.toLowerCase());

const giris = "clarusway"
const girisKodu = "ClarusWay"

if (giris === girisKodu.toLowerCase()){
    console.log("Girisiniz onaylandi.");
}else {
    console.log("Giris Hatali");
}
console.clear()

//! *********************************************************************
// toUpperCase()  : Buyuk harfe cevir
//! *******************************************************************

const statement = "Guzel bir gun, kahve ve hurma ile iyi gidiyor."
console.log(statement.toUpperCase());
console.log(statement);

//**************************************************************** */
//***************************STRING PARCALAMA *********************/
// ****************************************************************/

//! split() : Kelime veya cumle parcalama

// split parcaladigi bolumleri diziye cevirir.
// str.split(seperator) => seperator bir ayrac: "", " ", ",", "/"

let text = "Clarusway It bootcamp"
console.log(text.split(""));
const splitedText = text.split(" ")
console.log(splitedText); 

for (let i = 0; i <= splitedText.length; i++){
    console.log(splitedText[i]);
}

for (let i = splitedText.length-1; i >= 0; i--){
    console.log(splitedText[i]);
}

let months = "Jan / Feb / Mar / Apr / May / Jun / Jul / Aug / Sep / Oct / Nov / Dec "
console.log(months.split("/"));
console.log(months.toUpperCase().split("/"));

let liste = "Harry Trump; Fred Barney; Helen Rigby; Bill Abel; Chris Hand"
console.log(liste.split(";"));  // Sonuc bir ARRAY yani LISTE dir. []

console.log(liste.split("; ")[0]);
console.log(liste.split("; ")[1]);
console.log(liste.split("; ")[2]);
console.log(liste.split("; ")[3]);
console.log(liste.split("; ")[4]);

//! DIKKAT: JOIN ve REVERSE string methodu degildir ama split ile cok kullanilir.

let cumle = "Merhaba degerli Cohort 16 sakinleri";

//Bu cumleyi tersten string olarak yazin
let yeniCumle = cumle.split(" ");
console.log(yeniCumle);
console.log(yeniCumle[2]);

// reverse: tersten yazdirma - Array Methodu
console.log(yeniCumle.reverse());

// Join - Array Methodu
console.log(yeniCumle.reverse().join(" - "));

//! ORNEK - Girilen kelime "POLINDRON" mudur?
//* Tersi kendisi ile ayni olan kelimeler - "KACAK"

// let kelime = prompt("Kelime Girin");
// let tersten = kelime.split("").reverse().join("");
// console.log(tersten);

// kelime === tersten ? console.log("polindron") : console.log("polindron degil");


//! SLICE
//*************************************************************** */
//? String içinde bir bölümü almak için kullanılır. (immmutable, kalıcı değişiklik olmaz)
// Slice(başlangıç index numarası, bitiş index numarası(bu numara dahil değildir))

let ataSozu = "Oku da adam ol"
console.log(ataSozu.slice(7, 11));  // Burasi gecici. Ama bir degiskene atarsam kalici olur.

console.log(ataSozu.slice(7));

//tersten erisim saglanabilir : Negatif deger kullanilir.
console.log(ataSozu.slice(-10, -6));

//! substring(baslangic index numarasi, bitis index numarasi)
// slice 'den  tek farki negatif deger kullanilmaz
console.log(ataSozu.substring(4, 8));

//************************************************************* */
/*                     //!String'de Degisiklik Yapma    ****
//************************************************************** */
//? replace : (aranan, degistirilecek)
//? replaceAll : (aranan, degistirilecek)
//! ---------------------------------------------------------------


let ozluSoz = "Tecrube tarak gibidir; ama hayat insana kel oldugu zaman verir"

console.log(ozluSoz.replace("kel", "sacli"));

let variable = "Kullanici adi"
let yeni = variable.replace(" ", "_");
console.log(yeni);

// replaceAll : tum "i" leri degistirir.
let yeniDeger = yeni.replaceAll('i', 'u'); 
console.log(yeniDeger);


//************************************************************* */
/*                     //!String icinde Arama Islemleri ****
//************************************************************** */

// includes, indexOf, search ,match() metodlarını kullanabiliriz

//!  includes()   ... yi iceriyor mu -> true ya da false bir deger dondurur.
// caseSensitive (kucuk buyuk harfe duyarli) bir ozelliktir.

console.log(`ozlusozde tarak kelimesi geciyor mu: ${ozluSoz.includes("tarak")}`);

let url = "https://clarusway.com"

let msg = url.includes("https") ? "Bu site guvenilir" : "Bu site guvenli degil"
console.log(msg);

let email = "helenclarusway.com"
msg = email.includes("@") ? "mail adresi gecerli" : "Mail adresi gecersiz"
console.log(msg);

// indexOf (aranacak metin)
//! Bir karakter yada karakter grubumun kaçıncı sırada olduğunu yani index numarasını verir.

console.log(email.indexOf("om")); 
console.log(email.indexOf(".om")); // Deger icinde yoksa "-1" dondurur.

msg = email.indexOf("edu") === -1 ? "Bu bir egitim sitesi degildir" : " Bu bir egitim sitesidir"
console.log(msg);

//***************************************************************** */
//! search
//**************************************************************** */

let metin1 = "Clarusway it bootcamp. Clarusway develop you IT field"
console.log(metin1.search("IT"));
console.log(metin1.search("it"));

//-------------------------------------------------------------------
// Regex / regular Expression
//    / ile ifade edilir.
//    /g => global, butun cumle icinde uygula
//    /i => case sensitive ozelligini kaldir. Kucuk - buyuk olmasina bakmadan bul


console.log(metin1.search(/it/i));
console.log(metin1.search(/IT/i, "Communication"));

//! Match => search ozelligine benzer
// string icinde aranan letin ve bir dizi dondurur.
// regex ifadeler de kullanilir

let metin2 = "Bugun gercekten cok guzel, hafif serin bugun"
console.log(metin2.match(/bugun/));
console.log(metin2.match(/bugun/g));
console.log(metin2.match(/bugun/i));
console.log(metin2.match(/bugun/gi));

let degistirilmisMetin = metin2.match(/bugun/gi)
console.log(degistirilmisMetin[0]);
console.log(degistirilmisMetin[1]);

let sentence1 = "          Clarusway      "
console.log(sentence1);
console.log(sentence1.trim());


metin = "Clarusway"
console.log(metin.startsWith("c"));
console.log(metin.startsWith("C"));
console.log(metin.endsWith("C"));
console.log(metin.endsWith("y"));

// ORNEK - 9

let myStr = "Hello, FS Cohort 16!"
console.log(myStr.length);

let myName = "Anthony Harold"

myName = myName.slice(8);

myName.toLowerCase()
console.log(myName);

// ORNEK - 8

let str = "Once a day";
let index = str.indexOf("a");
let index2 = str.lastIndexOf("a")
console.log(index2);
console.log(str.indexOf("a", 6));
console.log(str.indexOf("a", index + 1) === index2);

