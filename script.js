const inputBuscador = document.getElementById("buscador");
const button = document.getElementById("boton");
const pokemonCard = document.getElementById("pokemon-card")

function makePokemonCard(obj){
  pokemonCard.innerHTML = ""
  const name = document.createElement("p")
  name.innerText = `${obj.name.toUpperCase()}`
  pokemonCard.appendChild(name)
  pokemonCard.innerHTML += `<img src="${obj.sprites.front_default}" alt="imagen de ${obj.name}">`
  pokemonCard.innerHTML += `<p> Peso promedio ${obj.weight} kgs</p>`
}

function getShowData (){
  const pokemonName = inputBuscador.value.toLowerCase()
  const url = `https://pokeapi.co/api/v2/pokemon/${pokemonName}`
  fetch(url)
  .then((response) => response.json())
  .then((data) => makePokemonCard(data))
}

button.addEventListener("click", getShowData)