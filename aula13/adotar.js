

const tituloPrincipal = document.getElementById('titulo-principal');
const containerDeServicos = document.getElementById('grid-adocao');

console.dir(tituloPrincipal);


// --- 2. MODIFICAÇÃO DO CONTEÚDO E ESTILO ---
// Alterando o texto e o estilo dos elementos selecionados.

const imagensPetsAdocao = [
    'petsAdocao/Pug.jpg',
    'petsAdocao/rottweiler.jpg',
    'petsAdocao/luluDaPomerania.jpg',
    'petsAdocao/goldenRetriever.jpg',
    'petsAdocao/poodle.jpeg',
    'petsAdocao/caramelo.jpeg',
]


const racasDeCachorro = [
    'pug', 'rottweiler', 'lulu da pomerania', 'golden retriever', 'poodle', 'caramelo'
];

const descricaoPet = [
    'Pequeno e brincalhão', 'Leal e protetor', 'carinhoso e agitado', 'Extrovertido e animado', 'Calmo e gentil', 'fofinho e sem vergonha'
];

function criarHtmlParaAdocao(imagemPet, nomePet, descricaoPet) {
    let htmlParaInserir = "";
    for (let i = 0; i < imagemPet.length; i++) {
        htmlParaInserir += `
            <li class="pet-card">
                <img src="${imagemPet[i]}">
                <h3 class="nome-cachorro-adocao">${nomePet[i]}</h3>
                <p>${descricaoPet[i]}</p>
            </li>
        `;
    }
    return htmlParaInserir;
}

// Inserindo o HTML gerado na página
containerDeServicos.innerHTML = criarHtmlParaAdocao(imagensPetsAdocao, racasDeCachorro, descricaoPet);


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