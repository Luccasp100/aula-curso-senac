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

function criarHTMLdeServicos(lista){
    let htmlAcumulado = "";
    for(let i = 0; i < lista.length; i++) {
        htmlAcumulado += `<li class="servico-card"><h3>${lista[i]}</h3>
        <p>Descrição do serviço de ${lista[i].toLowerCase()}.</p></li>`;
    }
    return htmlAcumulado;
}
//console.log(criarHTMLdeServicos());
lista_servicos.innerHTML= criarHTMLdeServicos(array_servicos);

/////////////////////////////////////////////////////////////////////////////

console.log("---Aula 8: Ouvindo eventos!");
//4. Selecionando e modificando vários elementos juntos

const todos_os_cards = document.querySelectorAll('.servico-card');

for(let i = 0; i < todos_os_cards.length; i++) {
    todos_os_cards[i].style.borderLeft = '5px solid #ffd5c2';
    todos_os_cards[i].style.transition = 'border-color 0.3s ease';

    // () => {bloco_de_código} --- é uma forma reduzida de declarar uma função é o mesmo que: function nome_função() {bloco_de_código}

    //Funções independentes funcionam sem a estrutura de outro bloco de código, geralmente criamos por completo: function nome_função(parametro){Código a ser executado}

    //Funções dependentes funcionam a partir de uma outra estrutura de código(como: for, while, eventos e demais), geralmente são declaradas de forma reduzida: (parametro) => {Código a ser executado}

    todos_os_cards[i].addEventListener('mouseenter', () => {
        todos_os_cards[i].style.borderLeft = '5px solid #ff7f50';
    });
    todos_os_cards[i].addEventListener('mouseleave', () => {
        todos_os_cards[i].style.borderLeft = '5px solid #ffd5c2';
    });
}

// --- TEMA ESCURO ---- // 
let temaEscuro = false;
// const botao guarda nossa tag button e let temaEscuro guarda o valor false para que quando o usuário clique no botao trocar para true e aplicar o tema escuro
const botao = document.getElementById('btn-mudar-tema');
const body = document.querySelector('body');

// este if irá utilizar a tag button para ajudar na execução do evento, SE (botão estiver no html) ENTÃO excutar o código

if(botao) {
    botao.addEventListener('click', ()=> {
        if (temaEscuro === false) {
            body.style.backgroundColor = '#2c3e50';
            tituloPrincipal.style.color = '#043642ff';
            botao.textContent = 'Mudar para Tema Claro';
            temaEscuro = true;
        } else {
            body.style.backgroundColor = '#fff';
            tituloPrincipal.style.color = '#4a90e2';
            botao.textContent = 'Mudar para Tema Escuro';
            temaEscuro = false;

        }
    });
}


// --- Aula 9 ---
console.log("---Aula 9: Formulário e Validação de dados!");

//Chamando os elementos do formulário!
const form = document.getElementById('form-agendamento');
const inputNomePet = document.getElementById('nome-pet');
const inputEmailTutor = document.getElementById('email-tutor');
const msgErroNome = document.getElementById('msg-erro-pet');
const msgErroEmail = document.getElementById('msg-erro-email');

//OUVINTE DE EVENTO DE SUBMISSÃO DE DADOS VIA FORMULÁRIO

//Adicionamos um ouvinte de evento no nosso form para que toda vez que ouvir o "submit" seja executada a função de validação dos dados!
form.addEventListener('submit', (event)=> {
    //1.Precisamos previnir o comportamento padrão de recarregar a página, pois toda vez que recarrega o formulário zera e não conseguimos coletar os dados!
    //Sempre que for formulário vem o evento como parâmetro, pode ser escrito como event ou apenas 'e' e só vai executar o preventDefault, pois apenas o evento para a atualização.

    event.preventDefault(); //Sempre será a primeira linha da função de formulário 
    console.log("Tentativa de envio interceptada!");

    //Variáveis de controle de validação! 
    //Sempre assumimos que o formulário pode vir errado, por isso começamos considerando o valor como false para evitar cadastrar algo errado. "Usuário errado até que ele prove o contrário!"

    let nomeValido = false;
    let emailValido = false;

    //Validação do campo Nome Pet 
    const nomePetValue = inputNomePet.value;
    //após guardarmos o valor do input, começamos a verificar. Se estiver vazio vamos adicionar através do JS um texto de erro para a tag small mostrar.
    if(nomePetValue === ""){
        msgErroNome.textContent = 'O nome do pet é obrigatório!';
        //adicionamos uma class ao nosso input para que assim o css(estilo) de erro seja aplicado ao input!
        inputNomePet.classList.add('input-error');
        nomeValido = false;
    } else {
        msgErroNome.textContent = "";
        inputNomePet.classList.remove('input-error');
        nomeValido = true;
    }

    //Validação  do campo Email do Tutor
    const emailTutorValue = inputEmailTutor.value;

    if(emailTutorValue === "") {
        msgErroEmail.textContent ='O e-mail do tutor é obrigatório!';
        inputEmailTutor.classList.add('input-error');
        emailValido = false;
    } else {
        msgErroEmail.textContent = "";
        inputEmailTutor.classList.remove('input-error');
        emailValido = true;
    }

    //VALIDAÇÃO FINAL DOS DOIS CAMPOS QUANDO VÁLIDOS E AO MESMO TEMPO

    if(nomeValido  && emailValido) {
        //Vamos verificar se nomeValido e emailValido estão ambos com o valor true ao mesmo tempo e se sim, "salvamos", se não, não
        console.log("Dados do formulário válidos! Enviando para o servidor....");
        console.log(`Nome do Pet: ${nomePetValue}`);
        console.log(`E-mail do Tutor: ${emailTutorValue}`);

        //No futuro, aqui seria a parte que enviamos os dados para verificação no back-end e daí salvar no banco de dados!
        alert("Agendamento realizado com sucesso!");
        form.reset(); //Depois que estiver tudo ok, limpa o formulário automáticamente, deixando pronto para o próxim agendamento!
    }
})





 