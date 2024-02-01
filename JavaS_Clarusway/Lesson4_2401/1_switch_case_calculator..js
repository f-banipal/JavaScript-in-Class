const num1 = Number(prompt("1. sayiyi giriniz: ")) //Number yerine "+" da kullanabiliriz.
const islem = prompt("Islemi giriniz: +, -, /, *")
const num2 = Number(prompt("2. sayiyi giriniz: "))

if (isNaN(num1) || isNaN(num2))
    alert('Lutfen gecerli bir sayi giriniz:')

let sonuc = 0

switch (islem) {
    case "+" :
        sonuc = num1 + num2;
        break;
    case "-" :
        sonuc = num1 - num2;
        break;
    case "/" :
        sonuc = num1 / num2;
        break;
    case "*" :
        sonuc = num1 * num2;
        break;
    default:
        alert("Yanlis islem girildi!");
        break;
}

console.log(`${num1} ${islem} ${num2} = ${sonuc}`);
