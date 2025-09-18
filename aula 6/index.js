console.log("--- aula 6: funções e escopo ---");

//dados mantidos da aula 5! otimizando nosso código  e lógica

const arrayServicos = ["Banho e tosa", "consulta veterinária", "aplicação de vacinas", "Adestramento", "venda de ração", "venda de brinquedos", "hotel para pets"];

//--- funções (máquinas reutilizáveis!)

//nossa função recebe uma array de strings (tipo texto) como PARÂMETRO e RETORNA uma string de HTML com os cards de serviços

//PARÂMETROS são os valores a serem aplicados na execução do código! os parâmetros não são obrigatórios, sua utilização dependerá da necessidade da solução

//@ param {string[]} -> significa que o parâmetro é uma array de string, no nosso caso a arrayServicos 

//@return {string} -> o retorno é uma string, no nosso caso as strings html prontas para serem inseridas


//declarei uma função, dei um nome e atribui um parâmetro (arrayServicos)
function criarHTMLDeServicos(arrayServicos) {
    let htmlAcumulado = ""; //vazio

    for(let i = 0; i < arrayServicos.length; i++) {
        const nomeServicos = arrayServicos[i];

        htmlAcumulado += `<li class="servico-card">
        <h3>${nomeServicos}</h3>
        <p>clique aqui para saber mais sobre o serviço ${nomeServicos}</p>
        </li>`;
    }
    return htmlAcumulado; // a função retorna o html construído
}
//EXECUÇÃO

//1. vamos chamar a nossa tag <ul> aqui para o js, para que o html acumulado no container certo
const lista_servicos = document.getElementById("lista-servicos");

//2. vamos chamar a função, passando a nossa array de dados como parâmetro
//a função nos devolve o HTML, que guardamos como retorno

const servicos = criarHTMLDeServicos(arrayServicos);

//3. Inserir no HTML
lista_servicos.innerHTML = servicos

