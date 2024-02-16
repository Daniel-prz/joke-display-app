"use strict";

const URL = `https://v2.jokeapi.dev/joke/Any?blacklistFlags=nsfw,religious,political,racist,sexist,explicit`;

async function fetchJoke() {
  const response = await fetch(URL);
  const joke = await response.json();

  console.log(joke);

  displayJoke(joke);
}

fetchJoke();

function displayJoke(joke) {
  const jokeSetup = document.createElement("p");
  jokeSetup.className = "setup";
  jokeSetup.innerText = joke.setup;
  const jokeDelivery = document.createElement("p");
  jokeDelivery.className = "delivery";
  jokeDelivery.innerText = joke.delivery;

  document.querySelector("div").appendChild(jokeSetup);
  document.querySelector("div").appendChild(jokeDelivery);
}

//document.querySelector("button").addEventListener("click");

// async function newJoke() {
//   const newSetup = document.getElementsByClassName("setup");
//   const newDelivery = document.getElementsByClassName("delivery");
// }
