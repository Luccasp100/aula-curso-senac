console.log("---Aula 5: Arrays (listas)");

//1. nossa fonte de dados: uma array com os nomes dos serviços 

//criar uma variável para guardar minha lista, minha lista precisa estar entre colchetes para ser considerada um array(lista). os valores são separados por vírgula e precisa de fechamento no final
const arrayServicos = ["Banho e tosa", "consulta veterinária", "aplicação de vacinas", "Adestramento", "venda de ração", "venda de brinquedos", "hotel para pets"]; 

//2. explorando nossa array
//explorar pelo índice [0] e também o [4]
console.log("primeiro serviço da lista: " + arrayServicos[0]);
console.log(arrayServicos[4]);
//verificar a extenção da array
console.log("Qual o tamanho dessa array: " + arrayServicos.length);

//3.métodos
const frutas = ["maçã", "uva", "kiwi", "goiaba", "abacaxi", "abacate",];

console.log(frutas);
//push é utilizado para inserir um novo dado no final de uma array
frutas.push("banana"); //adiciona um item a lista
console.log(frutas);

frutas.pop(); // sempre vai tirar o ultimo elemento de uma lista 
console.log(frutas);

frutas.unshift("morango"); //adiciona um elemento no início de uma array (antes do 0)
console.log(frutas);

frutas.shift(); // remove sempre o primeiro elemento de uma array
console.log(frutas);

//splice() ele consegue remover, substituir e adicionar elementos em qualquer  posição

frutas.splice(1,2); //removi os dados nas posições 1 e 2
console.log(frutas);
//minha array agora conta com 4 elementos nas posições 0, 1, 2, 3

frutas.splice(5, 6, "uva","kiwi"); //para adicionar é preciso colocar a posição e o valor no final
console.log(frutas);

frutas.splice(1,"limão", "PERÂ"); //para trocar um valor é só chamar a posição 
console.log(frutas);

//4. Trabalhando com array serviços e HTML

const listaServicos = document.getElementById("lista-servicos");

let htmlAcumulado = "";

//o loop for irá percorrer toda a array e construir no nosso html de acordo com os serviços fornecidos 
//enquanto i for menor que a extensão da minha lista de serviços ele vai repetir e citar um html, para cada repetição adiciona +1
for (let i = 0; i < arrayServicos.length; i++){
    const nomeServico = arrayServicos[i];
    //utilizamos essa variável para guardar o nome do valor específico de cada posição para inserir no html
    htmlAcumulado += `<li class="servico-card">
    <h3>${nomeServico}</h3>
    <p>Clique para saber mais sobre o serviço${nomeServico}</p>
    </li>`
}
listaServicos.innerHTML = htmlAcumulado;