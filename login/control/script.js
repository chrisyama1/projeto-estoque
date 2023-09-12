
document.addEventListener('DOMContentLoaded', function() {
    // Obtém referências aos elementos HTML
const telaLogin = document.getElementById('login');
const telaCriacaoUsuario = document.getElementById('criar');
const criarUsuarioLink = document.getElementById('criar-usuario-link');
const voltarLoginLink = document.getElementById('voltar-login-link');

// Quando o link "Criar uma nova conta" é clicado
criarUsuarioLink.addEventListener('click', function() {
    telaLogin.style.display = 'none'; // Oculta a tela de login
    telaCriacaoUsuario.style.display = 'block'; // Mostra a tela de criação de usuário
});

// Quando o link "Voltar para o login" é clicado
voltarLoginLink.addEventListener('click', function() {
    telaCriacaoUsuario.style.display = 'none'; // Oculta a tela de criação de usuário
    telaLogin.style.display = 'block'; // Mostra a tela de login
});

   // Adicione um evento de clique ao botão de login
    document.getElementById('enviar').addEventListener('click', function() {
        //lógica de validação de login
        validarLogin();
    });

    // Adicione um evento de tecla pressionada no campo de senha
    document.querySelector(".password").addEventListener('keydown', function(event) {
        if (event.key === 'Enter') {
            // Se a tecla "Enter" for pressionada, acione o evento de clique do botão de login
            validarLogin();
        }
    });

    // Função para realizar a validação do login
    function validarLogin() {
        var inputUsuario = document.querySelector(".usuario");
        var inputSenha = document.querySelector(".password");

        var usuario = inputUsuario.value;
        var senha = inputSenha.value;

        // Verifique se os campos estão vazios
        if (usuario === '' || senha === '') {
            alert('Por favor, preencha todos os campos.');
        } else {
            // Exemplo de validação simples (substitua por lógica real):
            if (usuario === 'Christopher' && senha === '123456') {
                alert('Login bem-sucedido!');
                // Redirecionar para a página de destino ou executar outras ações após o login bem-sucedido
                window.location.href = 'telainicial.html';
            } else {
                alert('Credenciais inválidas. Tente novamente.');
            }
        }
    }
});