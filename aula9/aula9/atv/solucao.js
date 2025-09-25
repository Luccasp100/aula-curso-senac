const formCadastro = document.getElementById('form-cadastro');
const inputUsuario = document.getElementById('usuario');
const inputSenha = document.getElementById('senha');

formCadastro.addEventListener('submit', function(e) {
    e.preventDefault();

    // Seleciona as mensagens de erro dentro do evento para garantir que existam
    const msgErroUsuario = inputUsuario.nextElementSibling;
    const msgErroSenha = inputSenha.nextElementSibling;

    // Valida campo de usuário
    if (inputUsuario.value.trim() === '') {
        msgErroUsuario.textContent = 'O nome de usuário é obrigatório.';
        inputUsuario.classList.add('input-error');
    } else {
        msgErroUsuario.textContent = '';
        inputUsuario.classList.remove('input-error');
    }

    // Valida campo de senha
    if (inputSenha.value.length < 8) {
        msgErroSenha.textContent = 'A senha deve ter no mínimo 8 caracteres.';
        inputSenha.classList.add('input-error');
    } else {
        msgErroSenha.textContent = '';
        inputSenha.classList.remove('input-error');
    }
});