import { dbank } from "../../declarations/dbank"

window.addEventListener("load", async () => {
  update();
});

document.querySelector("form").addEventListener("submit", async (event) => {
  event.preventDefault();

  const button = event.target.querySelector("#submit-btn")

  const inputAmount = parseFloat(document.getElementById("input-amount").value);
  const outputAmount = parseFloat(document.getElementById("withdrawal-amount").value);
  
  button.setAttribute("disabled", true)

  if (document.getElementById("input-amount").value.length != 0) {
    await dbank.topUp(inputAmount);
  };

  if (document.getElementById("withdrawal-amount").value.length != 0) {
    await dbank.withdraw(outputAmount);
  };

  update()

  document.getElementById("input-amount").value = "";
  document.getElementById("withdrawal-amount").value = "";
  button.removeAttribute("disabled");

  var audio = new Audio('success.mp3');
  audio.play();
 
});

const update = async () => {
  const currentAmout = await dbank.checkBalance();
  document.getElementById("value").innerText = currentAmout.toFixed(2);
}