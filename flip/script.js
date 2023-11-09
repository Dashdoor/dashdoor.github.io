function calc(ore, air, gold) {
    let counter = oreNeeded = airNeeded = 0;
    let profit = gold;

    for (let i = 0; gold > 0; i++) {
        gold = gold - (ore * 14 + air / 5)
        if (gold > 0) {
            counter++;
        }
    }

    oreNeeded = 14 * counter;
    airNeeded = Math.ceil((counter * 2) / 10);
    profit = counter * 25 - profit;

    document.querySelector(".eredmeny").innerHTML = `
<div> Darab: ${counter}</div>
<div> Saronite Ore: ${oreNeeded}</div>
<div> Eternal Air: ${airNeeded}</div>
<div> Profit: ${profit}</div>`;
}