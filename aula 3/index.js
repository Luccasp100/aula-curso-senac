// alert("Positivo ou negativo");
// let numero = parseInt(prompt("Digite aqui um número: "));
// if (numero >= 0) {
//     alert("O número " + numero + " é positivo!");
// } else {
//     alert("O número " + numero + " é negativo!");
// }

//sistema de check-in e agendamentos
const idadePet = 10; //um = atribui valor a uma variavel
const petVacinado = true;
const portPet = "médio";
const fimDeSemana = true;
const feriado = true;

console.log("--- Iniciando Check-in ---");

//1. Verificar se o pet está vacinado (if/else)

//declaramos o if (a condição a ser verificada fica dentro dos pareteses) após abrimos chaves que sera o espaço onde vamos execitar um código caso a condição seja verdade

//o else deve ser declarado IMEDIATAMENTE APÓS as {}(chaves) do nosso bloco if! O else não acompanha uma condição própria, irá executar todavez que a nossa condição if for falsa

if (petVacinado == true){
    console.log("Que bom o seu pet esta vacinado!");
} else {
    console.log("Essa não, o seu pet ainda não esta vacinado :( ");
}

//2. Determinar o tipo de serviço de a cordo com a idade

//no nosso if verificamos se o nosso pet é filhote, abrimos um else if para verificar uma outra condição específica e por fim temos o nosso else que sempre será executado caso as duas primeiras condições forem falsas

console.log("--- Definindo a Categoria de Cuidado ---");
if(idadePet < 1){
    console.log("Categoria: filhote (cuidados baby)");
} else if (idadePet >= 1 && idadePet < 8){
    console.log("Categoria: Adulto (cuidados padrão)");
} else {
    console.log("Categoria: Idoso (cuidados premium)");
}

//3. Verificar se o pet é elegível para uma promoção de acordo com o seu porte
console.log("--- Verificando Promoções ---");
if (portPet == "pequeno" || idadePet >= 8){ 
    console.log("Status: pet elegível para a promoção Banho com desconto!")
} else {
    console.log("Status: pet não elegível para promoções!")
}

//4. desafio extra
// console.log("--- fim de semana ---");
// if (fimDeSemana == true) {
//     console.log("A loja esta aberta");
// } else {
//     console.log("A loja esta fechada");
// }

// console.log("--- feriado ---");
// if (feriado == true) {
//     console.log("A loja esta aberta");
// } else {
//     console.log("A loja esta fechada");
// }

console.log("--- fim de semana ---")
if(fimDeSemana == true || feriado == true){
    console.log("A loja esta fechada")
} else {
    console.log("A loja esta aberta")
}

