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
tituloPrincipal.textContent = "Bem-vindo ao Mundo Mágico do Petshop Patas & Pelos!";
tituloPrincipal.style.color = '#ff7f50'; // coral para combinar com h3
tituloPrincipal.style.textAlign = 'center';
tituloPrincipal.style.fontWeight = '700';

subtitulo.innerHTML = "O <strong>melhor</strong> lugar para o seu melhor amigo!";
subtitulo.style.backgroundColor = '#fff7f2'; // tom pastel suave
subtitulo.style.padding = '15px';
subtitulo.style.borderRadius = '10px';
subtitulo.style.textAlign = 'center';
subtitulo.style.color = '#444';
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
    todosOsCards[i].style.borderLeft = '5px solid #ffd5c2';
    todosOsCards[i].style.transition = 'border-color 0.3s ease';
    todosOsCards[i].addEventListener('mouseenter', () => {
        todosOsCards[i].style.borderLeft = '5px solid #ff7f50';
    });
    todosOsCards[i].addEventListener('mouseleave', () => {
        todosOsCards[i].style.borderLeft = '5px solid #ffd5c2';
    });
}

// Variável para controlar o estado do tema
let temaEscuro = false; 

if (botaoTema) {
    botaoTema.addEventListener('click', function() {
        if (temaEscuro === false) {
            document.body.style.backgroundColor = '#2c3e50';
            tituloPrincipal.style.color = '#043642ff';
            botaoTema.textContent = 'Mudar para Tema Claro';
            temaEscuro = true;
        } else {
            document.body.style.backgroundColor = '#fff';
            tituloPrincipal.style.color = '#4a90e2';
            botaoTema.textContent = 'Mudar para Tema Escuro';
            temaEscuro = false;
        }
    });
}

// Efeito de zoom e sombra nos cards ao passar o mouse
for (let i = 0; i < todosOsCards.length; i++) {
    const card = todosOsCards[i];
    card.addEventListener('mouseover', function() {
        card.style.transform = 'scale(1.05)';
        card.style.boxShadow = '0 8px 16px rgba(0,0,0,0.2)';
    });
    card.addEventListener('mouseout', function() {
        card.style.transform = 'scale(1)';
        card.style.boxShadow = '0 1px 3px rgba(0,0,0,0.05)';
    });
}

// Delegação de evento para seleção de card
containerDeServicos.addEventListener('click', function(event) {
    const cardClicado = event.target.closest('.servico-card');
    if (cardClicado) {
        todosOsCards.forEach(card => card.classList.remove('selecionado'));
        cardClicado.classList.add('selecionado');
        console.log("Card selecionado:", cardClicado.querySelector('h3').textContent);
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