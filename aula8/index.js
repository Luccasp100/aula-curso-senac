console.log("---Aula 7 - DOM ---");

//Buscando elementos dos meus documentos HTML e CSS para manipulá-los!
//camelCase - snake_case - SCREAMING_SNAKE_CASE - PascalCase -> formas de nomear 

const tituloPrincipal = document.getElementById('titulo-principal');
const subtitulo = document.querySelector('#subtitulo'); //Geralmente usado para trabalhar o CSS, mas é possível utilizar para HTML também
const lista_servicos = document.getElementById("lista-servicos"); // E este aqui também pode ser usado para trocar estilo.

console.dir(tituloPrincipal); // inspecionar a tag  no DOM
console.log(tituloPrincipal);
//MODIFICANDO OS CONTEÚDOS E ESTILOS

tituloPrincipal.textContent = "Boas vindas ao Mundo Mágico do Petshop Patas & Pelos!";
tituloPrincipal.style.color = '#ff7f50';
tituloPrincipal.style.textAlign = 'center';
tituloPrincipal.style.fontWeight = '800';

subtitulo.textContent = "O melhor lugar para o seu melhor amigo!";
subtitulo.style.backgroundColor = '#ff7f50';
subtitulo.style.padding = '15px';
subtitulo.style.borderRadius = '10px';
subtitulo.style.textAlign = 'center';
subtitulo.style.color = '#444';
subtitulo.style.boxShadow = '0 2px 6px rgba(1, 1, 1, 0.5)';


// Criando HTML
const array_servicos = ["Banho e Tosa", "Consulta Veterinária", "Aplicação de Vacinas", "Adestramento", "Venda de Ração", "Venda de Brinquedos", "Hotel para Pets"];

const array_racas = ["poodle", "yorkshire", "caramelo"];
const lista = "lista";

function criarHTMLdeServicos(lista) {
    let htmlAcumulado = "";
    for (let i = 0; i < lista.length; i++) {
        htmlAcumulado += `<li class="servico-card"><h3>${lista[i]}</h3>
        <p>Descrição do serviço de ${lista[i].toLowerCase()}.</p></li>`;
    }
    return htmlAcumulado;
}
//console.log(criarHTMLdeServicos());
lista_servicos.innerHTML = criarHTMLdeServicos(array_servicos);

/////////////////////////////////////////////////////////////////////////////////////

console.log("--- aula 8: ouvindo eventos! ---");

//4. Selecionando e modificando vários elementos juntos 

const todosOsCards = document.querySelectorAll(".servico-card");

for (let i = 0; i < todosOsCards.length; i++) {
    todosOsCards[i].style.borderLeft = "5px solid #ffd5c2";
    todosOsCards[i].style.transition = "border-color 0.3s ease";

    //() => {} (arrow function) é uma forma reduzida de declarar função é o mesmo que function nomeFuncao() {}

    //funções independentes funcionam sem  a estrutura de outro bloco de código geralmente criamos por completo(parametro){código a ser executado}
    //funções dependentes funcionam a partir de uma outra estrutura de código(como: for, while, eventos e demais), geralmente são declaradas de forma reduzida: (parametro) => {código a ser executado}

    todosOsCards[i].addEventListener("mouseenter", () => {
        todosOsCards[i].style.borderLeft = "5px solid #ff7f50";
    });
    todosOsCards[i].addEventListener("mouseleave", () => {
        todosOsCards[i].style.borderLeft = "5px solid #ffd5c2";
    });
}

// --- tema escuro ---

let temaEscuro = false;

//const botao guardar nossa tag button e elt temaEscuro guarda o valor false para que quando o usuário clique no botao trocar para true e aplicar o tema escuro
const botao = document.getElementById("btn-mudar-tema");
const body = document.querySelector("body");

//este if irá utilizar a tag button para ajudar na execução do evento, SE (botão estiver no html) ENTÃO executar o código 
if(botao) {
    botao.addEventListener("click", () => {
        if(temaEscuro === false) {
            body.style.backgroundColor = "#2c3e50";
            tituloPrincipal.style.color = "#043642ff";
            botao.textContent = "Mudar para tema claro";
            temaEscuro = true;
        } else {
            body.style.backgroundColor ="#fff";
            tituloPrincipal.style.color = "#4a90e2";
            botao.textContent = "Mudar para tema escuro";
            temaEscuro = false;
        }
    })
}