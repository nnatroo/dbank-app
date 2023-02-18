import { dbank } from "../../declarations/dbank"

window.addEventListener("load", async () => {
  // console.log("Finished loading");
  const currentAmout = await dbank.checkBalance();
  document.getElementById("value").innerText = currentAmout.toFixed(2);

});

document.querySelector("form").addEventListener("submit", async (event) => {
  event.preventDefault();

  const button = event.target.querySelector("#submit-btn")

  const inputAmount = parseFloat(document.getElementById("input-amount").value);
  const outputAmount = parseFloat(document.getElementById("withdrawal-amount").value);
  
  button.setAttribute("disabled", true)

  await dbank.topUp(inputAmount);
  // await dbank.withdraw(outputAmount);

  const currentAmout = await dbank.checkBalance();
  document.getElementById("value").innerText = currentAmout.toFixed(2);

  button.removeAttribute("disabled");

})