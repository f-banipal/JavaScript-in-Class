console.log("** NEW OPERATORS **")

//* =============================================
//*  DESTRUCTURING (OBJECT)
//* =============================================

const product = {
    id: "10000",
    brand: "Apple",
    type: "smart phone",
    price: 3000,
}
const product1 = {
    id: "10005",
    brand: "Samsung",
    type: "I phone",
    price: 4500,
}

//? . notasyonu:

console.log(product.price);
let proPrice = product.price;
console.log(proPrice);
proPrice += 100
console.log(proPrice);

//? Square bracket 

const proId = product["id"]
console.log(proId);

//? Destructuring
// Degisken ismleri  objedeki key'lerle es olmalidir.
let { id, price} = product;
console.log("ID:", id);

price += 500
console.log("Price", price);
console.log(product);

const {type} = product;
console.log("Type:", type);

// key'ler isim degisikligi : ile yapilabilir.
const { id:pro1Id, price:pro1Price} =product1
console.log("PRO1:", pro1Id);
console.log("PRO1:", pro1Price);



//! destr ile tek satir bir cok objenin key'i degisken haline getirilebilir.
// const { id, brand, price, type } = product;

//? NESTED DESTR

const insanlar = {
    kisi1: {
      kimlikNo: "1234567890",
      adi: "Ahmet",
      soyadi: "Can",
      meslek: "Mimar",
      maas: 30000,
    },
    kisi2: {
      kimlikNo: "44234567890",
      adi: "Canan",
      soyadi: "Can",
      meslek: "Sosyal Gelişim Uzmani",
      maas: 25000,
    },
  }

  // icerige erismek
  //*! 1. yontem
  console.log(insanlar.kisi2.meslek);

  //*! 2. yontem
  console.log(insanlar["kisi2"]["meslek"]);

  //*! 3. yontem

  //? Level1 destr.
//   const { kisi1, kisi2 } = insanlar;
//   console.log(kisi1);

   //? Level2 destr.
//   const { adi, maas } = kisi1
//   console.log(adi, maas);

//!  iki seviyeli DecompressionStream.

const { 
    kisi1: {adi, meslek},
    kisi2: {adi: kisi2Ad, meslek: kisi2Meslek },
} = insanlar

console.log(adi, meslek);
console.log(kisi2Ad, kisi2Meslek);
 
//----------------------------------------------------------
//* Example
//----------------------------------------------------------
const team = [
    {
      name: "Josh",
      surname: "Barry",
      job: "developer",
      age: 30,
    },
    {
      name: "John",
      surname: "Barry",
      job: "tester",
      age: 45,
    },
    {
      name: "Hazel",
      surname: "Nut",
      job: "team lead",
      age: 40,
    },
  ]
  console.log("************")

team.forEach ((person) => console.log(person))
team.forEach ((person) => console.log(person.name))
team.forEach ((person) => console.log(person.job))


team.forEach ((person) => {
    console.log("Name:", person.name);
    console.log("Surname:", person.surname);
    console.log("Job:", person.job);
    console.log("Age:", person["age"]);
    console.log("****************");
})


team.forEach ((person) => {
    const { name, surname, job, age } = person
    console.log("Name:", name);
    console.log("Surname:", surname);
    console.log("Job:", job);
    console.log("Age:", age);
    console.log(" -  -  -  - ");
})


team.forEach ((name, surname, job, age) => {

    
    console.log("Name:", name);
    console.log("Surname:", surname);
    console.log("Job:", job);
    console.log("Age:", age);
    console.log(" + + + + + ++ + + + ++ + + + ");
})

//! ----- FUNCTIONLARDA DESTRUC KULLANIMI -----

const objGoster = function () {
    return  {
        name: "Hazel",
        surname: "Nut",
        job: "team lead",
        age: 40,
      }
}


//* function doldurdugu obje dogrudan dest yapilabilir.
// console.log(objGoster());
let {name, surname, job, age} = objGoster()
console.log(name, surname, );
console.log("Age:", ++age);

//? Function parametresi
const data = {
    id: "123",
desc: "This is top secreet information.",
createdTime: "1900"
}

const printData = (data) => {
    console.log(data);
    console.log(`${data.id} - ${data.desc} - ${data.createdTime}`);
}

const printDataDestr = (data) => {
    const { id, desc, createdTime} = data
    console.log(`${id} - ${desc} - ${createdTime}`);
}

const printDataDestrAir = ({id, desc, createdTime}) => {
    console.log(`${id} - ${desc} - ${createdTime}`);
}
printData (data);
printDataDestr(data);
printDataDestrAir(data);

//! Daha cok objelerde kullanilir


//* =============================================
//*  DESTRUCTURING (ARRAY)
//* =============================================

const people = ["Ali", "Veli", "Canan", "Can"]
let ali = people[0]

ali = "John"
console.log(people);

people[0] = ali
console.log(people);

const [kisi1, kisi2, kisi4] = people  // sirasi ile 1., 2. ve 3. kisiyi alir.
console.log(kisi1, kisi2, kisi4);

const [kisia, kisib, , kisic] = people // "," ile pas gecip 4. kisiyi aliriz
console.log(kisia, kisib, kisic);







//* ==============================================
//*  REST (...)
//* =============================================

//* =============================================
//*  SPREAD (...)
//* =============================================