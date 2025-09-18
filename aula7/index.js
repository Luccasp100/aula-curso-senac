console.log("---Aula 7 DOM ---");


//buscando elementos dos meus documentos HTML e CSS para manipulá-los!

const tituloPrincipal = document.getElementById("titulo-principal");
const subtitulo = document.querySelector("#subtitulo");//Geralmente utilizado para trabalhar com CSS, mas é possivel usar para HTML também
const lista_servicos = document.getElementById("lista-servicos"); //e este aqui também pode ser usado para trocar estilo

console.dir(tituloPrincipal);// inspecionar a tag no DOM (tras o "objeto")
console.log(tituloPrincipal); // tras tudo

//modificando os conteúdos e estilos

tituloPrincipal.textContent = "Boas vindas ao mundo Mágico do Petshop Patas & Pelos!";
tituloPrincipal.style.color = "#ff7f50";
tituloPrincipal.style.textAlign = "center";
tituloPrincipal.style.fontWeight = "800";

subtitulo.textContent = "O melhor lugar para o seu melhor amigo!";
subtitulo.style.backgroundColor = "#ff7f50";
subtitulo.style.padding = "15px";
subtitulo.style.borderRadius = "10px";
subtitulo.style.textAlign = "center";
subtitulo.style.color = "#444";
subtitulo.style.boxShadow = "10px 10px 10px rgba(1, 1, 1, 0.5)";

//Criando HTML
const arrayServicos = ["Banho e tosa", "consulta veterinária", "aplicação de vacinas", "Adestramento", "venda de ração", "venda de brinquedos", "hotel para pets"];

function criarHTMLDeServicos (lista) {
    let htmlAcumulado = "";

    for(let i = 0; i < lista.length; i++) {
        htmlAcumulado += `<li class="servico-card">
        <h3>${lista[i]}</h3>
        <p>Descrição do serviço de ${lista[i].toLowerCase()}</p>
        </li>`;
    }
    return htmlAcumulado;
}
    lista_servicos.innerHTML = criarHTMLDeServicos(arrayServicos);