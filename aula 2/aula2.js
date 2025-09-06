//--ficha cadastral do pet--

//usamos let para informações que podem mudar 
let nomePet = "fido";
let idadePet = 4;
let vacinado = false;

//usamos const para informações que não mudam 
const especiePet = "gato";
const racapet = "siamês"
const dataNasc = "10/05/2021"

//exibindo as informações iniciais no console
console.log("ficha cadastral do pet:");
console.log("nome: " + nomePet);
console.log("idade: " + idadePet);
console.log("vacinado: " + vacinado);
console.log("especie: " + especiePet);
console.log("raça: " + racapet);
console.log("data de nascimento: " + dataNasc);

//atualizando as informações do pet 
nomePet = "abacate";
//toda vez que chamarmos nomePet daqui em diante vem com o novo valor
idadePet = 5;
vacinado = true
console.log(nomePet);
console.log(idadePet);
console.log(vacinado);

