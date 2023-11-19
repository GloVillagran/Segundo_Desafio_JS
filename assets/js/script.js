// Ejercicio 1

const imgRainbow = document.getElementById("imgClick");

imgRainbow.addEventListener("click", () => {
  imgRainbow.classList.toggle("borderRed");
});

// Ejercicio 2

const btnBuy = document.querySelector(".btnStickers");

btnBuy.addEventListener("click", () => {
  const one = document.querySelector("#rainbow1").value;
  const two = document.querySelector("#rainbow2").value;
  const three = document.querySelector("#rainbow3").value;
  const four = document.querySelector("#rainbow4").value;

  const total = Number(one) + Number(two) + Number(three) + Number(four);
  //const total = +one + +two + +three + +four
  //con los operadores logicos se convierten automaticamente en number

  if (total <= 10) {
    document.querySelector("#result").innerHTML =
      "You have " + total + " stickers";
  } else {
    document.querySelector("#result").innerHTML =
      "You have too many stickers!!";
  }
});

// Ejercicio 3

const btnPassword = document.querySelector(".buttonPassword");
const passwordMessage = document.querySelector("#password");

btnPassword.addEventListener("click", () => {
  const oneValue = document.querySelector("#first").value;
  const twoValue = document.querySelector("#second").value;
  const threeValue = document.querySelector("#third").value;

  if (oneValue === "9" && twoValue === "1" && threeValue === "1") {
    passwordMessage.innerHTML = "Password One Correct";
    passwordMessage.classList.remove("incorrect-password");
    passwordMessage.classList.add("correct-password");
  } else if (oneValue === "7" && twoValue === "1" && threeValue === "4") {
    passwordMessage.innerHTML = "Password Two Correct";
    passwordMessage.classList.remove("incorrect-password");
    passwordMessage.classList.add("correct-password");
  } else {
    passwordMessage.innerHTML = "Incorrect Password";
    passwordMessage.classList.remove("correct-password");
    passwordMessage.classList.add("incorrect-password");
  }
});
