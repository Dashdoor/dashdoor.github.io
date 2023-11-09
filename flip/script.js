function calc(ore, air, gold) {
    let counter = oreNeeded = airNeeded = 0;
    let profit = gold;

    if (ore === "420" && gold === "420" && air === "420") {
        document.querySelector(".eredmeny").innerHTML = `<div class="valasz">Dannte?</div>`;
        return false;
    } else if ((ore === "0" || ore === "") || (air === "0" || air === "") || (gold === "0" || gold === "")) {
        return false;
    } else if ((ore <= 0 || ore >= 100000) || (air <= 0 || air >= 100000) || (gold <= 0 || gold >= 100000)) {
        return false;
    }

    for (let i = 0; gold > 0; i++) {
        gold = gold - (ore * 14 + air / 5)
        if (gold > 0) {
            counter++;
        }
    }

    oreNeeded = 14 * counter;
    airNeeded = Math.ceil((counter * 2) / 10);
    profit = counter * 25 - profit;

    document.querySelector(".eredmeny").innerHTML = `<div class="valasz"> Darab: ${counter}</div><div class="valasz"> Saronite Ore: ${oreNeeded}</div><div class="valasz"> Eternal Air: ${airNeeded}</div><div class="valasz"> Profit: ${profit} <img src="img/money-gold.gif" alt=""></div>`;
}
function myFunction() {
    var x = document.getElementById("myDIV");
    if (x.style.display === "none") {
        x.style.display = "block";
    } else {
        x.style.display = "none";
    }
}