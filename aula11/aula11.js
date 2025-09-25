console.log("--- Aula 7: O DOM ---");

// --- 1. SELEÇÃO DOS ELEMENTOS ---
// Selecionando elementos da página para poder manipulá-los.
const tituloPrincipal = document.getElementById('titulo-principal');
const subtitulo = document.querySelector('#subtitulo');
const containerDeServicos = document.getElementById('lista-servicos');
const botaoTema = document.getElementById('btn-mudar-tema');

// Inspecionando o objeto no console
console.dir(tituloPrincipal);


// --- 2. MODIFICAÇÃO DO CONTEÚDO E ESTILO ---
// Alterando o texto e o estilo dos elementos selecionados.
tituloPrincipal.textContent = "Bem-vindo ao Mundo Mágico do Petshop Patas & Pelos! 🐾";
tituloPrincipal.style.color = "#27ae60"; // coral para combinar com h3
tituloPrincipal.style.textAlign = 'center';
tituloPrincipal.style.fontWeight = '800';

subtitulo.innerHTML = "O <strong>melhor</strong> lugar para o seu melhor amigo!";
subtitulo.style.padding = '15px';
subtitulo.style.borderRadius = '10px';
subtitulo.style.textAlign = 'center';
subtitulo.style.color = "#2c3e50";
subtitulo.style.backgroundColor = "rgba(39, 174, 96, 0.08)";
subtitulo.style.boxShadow = '0 2px 6px rgba(0,0,0,0.05)';

// --- 3. GERANDO CONTEÚDO DINÂMICO (Revisão da Aula 6) ---
const servicosOferecidos = [
    'Banho e Tosa', 'Consulta Veterinária', 'Aplicação de Vacinas',
    'Adestramento', 'Venda de Ração', 'Hotel para Pets'
];

function criarHtmlParaServicos(lista) {
    let htmlParaInserir = "";
    for (let i = 0; i < lista.length; i++) {
        htmlParaInserir += `
            <li class="servico-card">
                <h3>${lista[i]}</h3>
                <p>Descrição do serviço de ${lista[i].toLowerCase()}.</p>
            </li>
        `;
    }
    return htmlParaInserir;
}

// Inserindo o HTML gerado na página
containerDeServicos.innerHTML = criarHtmlParaServicos(servicosOferecidos);


// --- 4. SELECIONANDO MÚLTIPLOS ELEMENTOS E MODIFICANDO EM LOTE ---
const todosOsCards = document.querySelectorAll('.servico-card');
for (let i = 0; i < todosOsCards.length; i++) {
  todosOsCards[i].style.borderLeft = "5px solid #a8edea";
  todosOsCards[i].style.transition = "border-color 0.3s ease";
  todosOsCards[i].addEventListener("mouseenter", () => {
    todosOsCards[i].style.borderLeft = "5px solid #27ae60";
  });
  todosOsCards[i].addEventListener("mouseleave", () => {
    todosOsCards[i].style.borderLeft = "5px solid #a8edea";
  });
}
let temaEscuro = false;
botaoTema.addEventListener("click", () => {
  if (!temaEscuro) {
    // Ativa tema escuro
    document.body.style.background = "#1b2b2b";
    document.body.style.color = "#ecfdf5";
    tituloPrincipal.style.color = "#2ecc71";
    subtitulo.style.backgroundColor = "rgba(46, 204, 113, 0.15)";
    subtitulo.style.color = "#03301bff";
    botaoTema.textContent = "Mudar para Tema Claro";
    temaEscuro = true;
  } else {
    // Volta para tema claro
    document.body.style.background = "linear-gradient(135deg, #a8edea, #fed6e3)";
    document.body.style.color = "#2c3e50";
    tituloPrincipal.style.color = "#27ae60";
    subtitulo.style.backgroundColor = "rgba(39, 174, 96, 0.08)";
    subtitulo.style.color = "#2c3e50";
    botaoTema.textContent = "Mudar para Tema Escuro";
    temaEscuro = false;
  }
});

// Adicione no CSS: .selecionado { border-color: #f39c12; }
console.log("--- Aula 9: Formulários ---");

// --- SELEÇÃO DOS ELEMENTOS DO FORMULÁRIO ---
const form = document.getElementById('form-agendamento');
const inputNomePet = document.getElementById('nome-pet');
const inputEmailTutor = document.getElementById('email-tutor');
const msgErroNome = inputNomePet.nextElementSibling; // Pega o <small> logo após o input
const msgErroEmail = inputEmailTutor.nextElementSibling; // Pega o <small> logo após o input

// --- OUVINTE DE EVENTO DE SUBMISSÃO ---
form.addEventListener('submit', function(event) {
    // 1. Previne o comportamento padrão de recarregar a página.
    event.preventDefault();
    console.log("Tentativa de envio interceptada.");

    // Variáveis de controle de validação
    let nomeValido = false;
    let emailValido = false;

    // 2. Validação do campo Nome do Pet
    const nomePetValue = inputNomePet.value.trim();
    if (nomePetValue === '') {
        msgErroNome.textContent = 'O nome do pet é obrigatório.';
        inputNomePet.classList.add('input-error');
        nomeValido = false;
    } else {
        msgErroNome.textContent = '';
        inputNomePet.classList.remove('input-error');
        nomeValido = true;
    }

    // 3. Validação do campo Email do Tutor
    const emailTutorValue = inputEmailTutor.value.trim();
    if (emailTutorValue === '') {
        msgErroEmail.textContent = 'O email do tutor é obrigatório.';
        inputEmailTutor.classList.add('input-error');
        emailValido = false;
    } else {
        msgErroEmail.textContent = '';
        inputEmailTutor.classList.remove('input-error');
        emailValido = true;
    }

    // 4. Verificação final
    if (nomeValido && emailValido) {
        console.log("Dados do formulário válidos! Enviando para o 'servidor'...");
        console.log(`Nome do Pet: ${nomePetValue}`);
        console.log(`Email do Tutor: ${emailTutorValue}`);

        // Aqui, no futuro, você enviaria os dados para um servidor.
        alert("Agendamento realizado com sucesso!");
        form.reset(); // Limpa o formulário
    }
});


//Lógica da Dialog 

console.log("--- Aula 10: Modal utilizando dialog");

//Chamamos os nossos elementos do HTML para construir a funcionalidade da nossa dialog
const dialog = document.getElementById("detalhes-dialog");
const btnFechar = document.getElementById("btn-fechar");
const btnAbrir = document.getElementById("btn-promocao");

//Abrindo a dialog com estrutura de fluxo separada.

//Estamos conferindo se há interação com o botão de abrir, caso haja o click então irá mostrar a dialog
if(btnAbrir){
    btnAbrir.addEventListener('click', ()=>{
        dialog.showModal();
    });
}

//Fechar ao clicar no 'X'
if(btnFechar){
    btnFechar.addEventListener('click', ()=>{
        dialog.close();
    });
}

//Fechar a dialog clicando no fundo de tela (backdrop)
if(dialog){
    dialog.addEventListener('click', (event)=>{
        //Verifica se o clique foi no própio elemento (dialog) ou fora em outros elementos e fundos
        if(event.target === dialog){
            dialog.close();
        }
    });
}

//lógica do carrossel aula 11
console.log("---Aula 11: carrossel dinâmico e manual---");

const imagensCarrossel = [
    'img/buck1.jpeg',
    'img/foto-Mel.jpg',
    'img/buck2.jpeg',
    'img/foto-Hope.jpg',
    'img/buck3.jpeg',
    'img/foto-Blue.jpg',
    'img/buck4.jpeg',
    'img/Image.jpg',
    'img/buck5.jpeg',
    'img/55DA3207-99A7-43D4-A38E-D932A5BC1884.JPG',
    'img/buck6.jpeg',
    'img/IMG-20250727-WA0064.jpeg',
    'img/buck7.jpeg',
    'img/buck8.jpeg',
    'img/Mídia.jpg',
    'img/buck9.jpeg',
    'img/buck10.jpeg',
    'img/IMG-20250725-WA0016.jpg',
    'img/IMG-20250725-WA0014.jpg',
    'img/IMG_0490.JPG',
    'img/foto-Safira.jpg',
    'img/foto-Pantera.jpg',
];

//quando se usa class do HTML coloque querySelector
const track = document.querySelector(".carousel-track");
const nextBtn = document.getElementById("btn-next");
const prevBtn = document.getElementById("btn-prev");

//slideAtual é uma variável do tipo let porque seu valor vai alterar de acordo com as mudanças do slide, seu valor inicial será 0, pois a array começa em indice 0, o translateX vai começar com 0% e até o momento não estamos tendo nenhuma visualização, então 0 também. (funciona tipo um contador)
let slideAtual = 0;

if(track){
    //agora com a verificação estiver tudo ok com a track (pista), criamos o carrossel

    const img = document.createElement("img");//criamos uma tag <img> para o nosso documento HTML

    img.className = "carousel-slide"; //adicionei uma class a tag <img class="carousel-img"> 
    track.innerHTML = ""; //confirmo a existencia da lista limpando seu conteúdo
    track.appendChild(img); //adiciono a tag img que acabamos de criar dentro da track

    function mostrarSlide(indice) {
        img.src = imagensCarrossel[indice];
    }

    nextBtn.addEventListener("click", ()=>{
        slideAtual = (slideAtual + 1) % imagensCarrossel.length;
        mostrarSlide(slideAtual);
    });

    prevBtn.addEventListener("click", ()=>{
        slideAtual = (slideAtual - 1 + imagensCarrossel.length) % imagensCarrossel.length;
        mostrarSlide(slideAtual);
    });
    mostrarSlide(mostrarAtual);

    //adiciona avanço automático a cada 3 segundos
    setInterval(()=>{
        slideAtual = (slideAtual + 1) % imagensCarrossel.length;
        mostrarSlide(slideAtual);
    }, 3000);
}
