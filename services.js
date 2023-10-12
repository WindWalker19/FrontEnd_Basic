/*
var cells = document.querySelectorAll('td');
console.log(cells[2].textContent);
//We don't need to change the first three array values.
let PN =[];
let PAP = [];
let PSP = [];
//Below are the array values that need to be changed.
let NOPS = [];
let PRC = [];
let PSC = [];

for (let i = 0; i < cells.length ; i++){
    console.log(cells[i].textContent);
}
*/

function calculation(){
    let ProductAcutalPrice1 = parseFloat(document.getElementById("PAP1").value);
    let ProductAcutalPrice2 = parseFloat(document.getElementById("PAP2").value);
    let ProductSoldPrice1 = parseFloat(document.getElementById("PSP1").value);
    let ProductSoldPrice2 = parseFloat(document.getElementById("PSP2").value);
    let NumberOfSoldProduct1 = parseFloat(document.getElementById("NPS1").value);
    let NumberOfSoldProduct2 = parseFloat(document.getElementById("NPS2").value);
    document.getElementById("PRC1").textContent = ProductAcutalPrice1 *  NumberOfSoldProduct1;
    document.getElementById("PSC1").textContent = ProductSoldPrice1 * NumberOfSoldProduct1;
    document.getElementById("PRC2").textContent = ProductAcutalPrice2 *  NumberOfSoldProduct2;
    document.getElementById("PSC2").textContent = ProductSoldPrice2 * NumberOfSoldProduct2;
    

}

console.log(calculation());