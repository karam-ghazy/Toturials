async function getData() {
  let data = await fetch(
    "https://api.currencyfreaks.com/v2.0/rates/latest?apikey=00425e16e1c34b8d808479aa36d03409"
  );
  let My_Data = await data.json();
  // console.log(My_Data.rates);
  let amount = document.querySelector(".amount").innerHTML;
  // console.log(amount);
  let SarAmount = document.querySelector(".sar span");
  let EgyAmount = document.querySelector(".egy span");
  SarAmount.innerHTML = Math.round(My_Data.rates["SAR"] * amount);
  EgyAmount.innerHTML = Math.round(My_Data.rates["EGP"] * amount);
}
getData();
