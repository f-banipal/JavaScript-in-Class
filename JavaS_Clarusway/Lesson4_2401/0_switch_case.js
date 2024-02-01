let gun = +prompt("Gun: 1-7")

switch (gun) {
    case 1:
        gun = "Pazartesi";
        break;
    case 2:
        gun = "Sali";
        break;
    case 3:
        gun = "Carsamba";
        break;
    case 4:
        gun = "Persembe";
        break;
    case 5:
        gun = "Cuma";
        break;
    case 6:
        gun = "Pazartesi";
        break;
    case 7:
        gun = "Pazartesi";
        break;
    default:
        alert("Gun 1-7 arasinda olmalidir");
        break;
}
console.log(gun);