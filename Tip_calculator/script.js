function calculateTip(){

let bill = document.getElementById("bill").value;
let tip = document.getElementById("tip").value;
let people = document.getElementById("people").value;

let tipAmount = bill * tip / 100;
let totalBill = parseFloat(bill) + tipAmount;
let perPerson = totalBill / people;

document.getElementById("result").innerText =
"Each person should pay: $" + perPerson.toFixed(2);

}