alert("--- Verificador de itens no estoque ---");
let qtdEstoque = parseInt(prompt("Digite o seu saldo atual: "));

if (qtdEstoque >= 10){
    alert("Estoque alto!");
} else if( qtdEstoque >= 1) {
    alert("Estoque baixo, precisa repor!");
} else {
    alert("Estoque vazio");
}