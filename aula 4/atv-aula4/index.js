console.log("--- aula 4: Estruturas de repetição ---");

//ex1: usando o for para listar horários no console

console.log("--Horários de atendimento ---");

for(let horario = 8; horario <= 17; horario++) {
    console.log(`Horário disponível: ${horario}h00`);//outra forma de trazer texto junto de varíavel (colocando crase (shift + ´ )) e ${}
}

//ex2: usando while para simular um estoque 

console.log("--- Simulação de venda de estoque ---");
//fora da estrutura cira-se a variável a ser verificada, 
let estoqueBrinquedos = 5;
//abrimos um while com a condição e neste caso a repetição mostra um decréscimo!
while(estoqueBrinquedos > 0) {
    console.log(`Vendendo 1 brinquedo, restam: ${estoqueBrinquedos - 1}`)
    estoqueBrinquedos--; //Decrementa o estoque, reduz 1 em 1
}
console.log("Estoque esgotado!");

//ex3: O laço/loop for aplicado no front-end para gerar HTML dinamicamente 

//criei uma variável chamada listaServicos que guarda uma tag. Para guardar a tag é preciso utilizar document para referência o documento html, getElementById(pegar elemento pelo ID) utilizo esse para específicar dentro do meu documento html qual a tag vou usar e dentro do parenteses coloco o NOME da ID  
const listaServicos = document.getElementById("lista-servicos");

//vamos criar uma variável vazia para acumular o nosso HTML gerado na repetição 
let htmlAcumulado = ""; // "" vazio

//o laço for que constrói a string de html: vamos criar 6 itens 
//inicia o laço da repetição que irá de 1 a 6 
for(let i = 1; i <= 6; i ++){
    //htmlAcumulado = htmlAcumulado + <li>html que estamos inserindo pela repetição</li>
    //o resultado é guardado até que seja impresso no html do navegador, todos os 6 itens da lista estarão guardados no htmlAcumulado ao final da repetição
    htmlAcumulado += `
    <li class="servico-card">
    <h3>Serviço #${i}</h3>
    <p>Uma breve descrição sobre o serviço</p>
    </li>
    `
}
//chamando a variável que guarda a nossa tag que vai conter todo esse html, innerhtml(dentro do html)
//dentro da tag listaServicos no html imprimir tudo que foi acumulado na variável htmlAcumulada
listaServicos.innerHTML = htmlAcumulado;
