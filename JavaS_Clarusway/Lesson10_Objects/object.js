//* ============================================
//*                 (OBJECTS)
//* =============================================

//? Diziler sirali bellek bolgeleridir.Bu yuzden dizilere
//? indeksleme ile erisebiliriz. Ancak daha karmasik (unstructured)
//? verilerimiz icin  Object'leri kullanabiliriz.

//? Object'lerde Key-value (property-value) yapisi kullanilir.
//? Herhangi bir veriyi erismek icin property (key) adi kullanilir.

console.log("*** Objects ***")

//? Array'lerde iliskisel veriler

let ogrİsim = ["Ahmet", "Ismet", "Affet"];
let ogrSoyisim = ["Yılmaz", "Can", "Baki"];
let ogrAdres = ["Kadıköy", "Seebinkarahisar", "Seferihisar"];

console.log(`${ogrİsim[0]} - ${ogrSoyisim[0]} - ${ogrAdres[0]}`);

//! 3 farkli yontem ile Object olusturulabilir
//* ===========================================================
//*   1 - Object Literal (En cok tercih edilen yontem)
//* ===========================================================

const kisi = {
    isim: "Ahmet",//ilk yazılan key :'den sonrası value
    soyİsim: "Yılmaz",
    kimlikNo: "123123341112",    
    maas: 70000,
    ehliyet: true,
    diller: ["English", "French", "Assyrian"],
    notlar: {mat101:"AA", tur101: "BB", ECE101: "AA"},
    dogumTarihi: 1990,
    yasHesapla: function(){
        return new Date().getFullYear() -this.dogumTarihi
    },
    
}


//! this keywordu icerisinde bulundugumuz objeyi refere eder.
//! Global alanda yazilan this ise haliyle global objeyi refere eder.
//! Window tarayicinin herseyini barindiran temel bir objedir.
console.log(this); //? global alanda (Window nesnesi gosterir.)



//*  -------------OBJEDEN VERI OKUMA -----------------------

//? A.  "." notasyonu ile erisim
console.log(kisi.isim);
console.log(kisi.soyİsim);


console.log(kisi.notlar.ECE101);

console.log(kisi.yasHesapla());
console.log(new Date().getDay());

//? B.  "[]" Square bracket ile erisim
console.log(kisi["kimlikNo"]);
console.log(kisi.kimlikNo);
console.log(kisi["notlar"]["tur101"]);

// const secici = prompt("Kisinin hangi bilgisine erismek istersiniz?  isim, soyIsim, kimlikNo, maas, dogumTarihi, yasHesapla?")

// console.log(kisi[secici]); //! square bracket yonteminde key bir degisken olabilir
// console.log(kisi.kimlikNo);
// console.log(kisi.dogumTarihi);

// console.log(kisi.secici); //! . notasyonunda key bir degisken olamaz.

console.log(kisi);

//*  -------------OBJEYE VERI YAZMA -----------------------

kisi.dogumTarihi = 2000
kisi.diller = "Turkce - Ingilizce"
console.log(kisi);
kisi.kilo = 80
kisi.isim = "Ferit"
console.log(kisi);

kisi["ehliyet"] = false
console.log(kisi);


//* ===========================================================
//*                     NESTED OBJECTS
//* ===========================================================
//! Objeler itere edilebilir yapilar degildir. Yani dongu gibi dolasamayiz. Cunku sirali yapilar degil. key ile erisilir.

const kisiler = {
    Ahmet: {
soyİsim: "Yılmaz",
    kimlikNo: "123123341112",    
    maas: 70000,
    },
    mehmet: {
        soyİsim: "Ozturk",
    kimlikNo: "123123341113",    
    maas: 50000,
    }
}

console.log(kisiler.Ahmet.kimlikNo);
console.log(kisiler["mehmet"]["maas"]);

const isim = "Ahmet"
console.log(kisiler[isim]);

//* ===========================================================
//*          JSON =>  JavaScript Object Notation
//* ===========================================================

const people = [
    {
    isim: "Ahmet",
    soyİsim: "Yılmaz",
    kimlikNo: "123123341112",    
    maas: 70000,
    job: "developer"
    },
    {
    isim: "Mehmet",
    soyİsim: "Ozturk",
    kimlikNo: "123123341113",    
    maas: 50000,
    job: "tester"
    }
]

// const key = prompt("Kisilerin hangi bilgisini ogrenmek istersiniz: isim, soyIsim, kimlikNo, maas?")
// people.forEach((p) => console.log(p.isim))
// people.forEach((p) => console.log(p.maas))
// people.forEach((p) => console.log(p["kimlikNo"]))

// people.forEach((p) => console.log(p[key]))


//? Maaslarin Toplami
//! -----------------------------------------------------
const toplamMaas = people.reduce((t, p) => t + p.maas, 0)
console.log(toplamMaas);

//? job, developer olanlarin isim + soyisim yazdirma

const devs = people.filter((p) => p.job === "developer")
console.log(devs);

const devNames = people.filter((p) => p.job === "developer").map((p) => `${p.isim} + ${p.ogrSoyisim}`)

const myObj = {
    course: "Clarus"
}
myObj.course = "Clarusway"
console.log(myObj.course);

const pen ={}
pen.ink = "blue"
if(pen["ink"]){
    console.log(`Color os ${pen["ink"]}`);
}else{
    console.log("Color is end");
}

const weekdays ={
    0:"Sunday",
    1:"Monday",
    2:"Tuesday"

}
const day = 0
const isWeekDaysOrEnds = weekdays[day] === "Sunday" || weekdays[day] === "Saturday" ? "weekends" : "weekdays";
console.log(isWeekDaysOrEnds);