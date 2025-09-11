const listaDeHobbies = ["Estudar", "sair com os amigos", "conversar", "jogar", "ver filmes"]

const informacaoDeHobbies = document.getElementById("meusHobbies");

let dadosHobbies = "";

for(let i = 0; i < listaDeHobbies.length; i++){
    const nomeDeHobbies = listaDeHobbies[i]
    dadosHobbies += `<li>
    <h2> ${nomeDeHobbies}</h2>
    </li>`
}
informacaoDeHobbies.innerHTML = dadosHobbies;