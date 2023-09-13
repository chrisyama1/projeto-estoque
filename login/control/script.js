
document.addEventListener('DOMContentLoaded', function() {
    // Obtém referências aos elementos HTML
const telaLogin = document.getElementById('login');
const telaCriacaoUsuario = document.getElementById('criar');
const criarUsuarioLink = document.getElementById('criar-usuario-link');





// Quando o link "Criar uma nova conta" é clicado
criarUsuarioLink.addEventListener('click', function() {
 // Obtém uma referência ao elemento pai onde deseja inserir a nova div
const elementoPai = document.getElementById("main-div"); // Substitua "seu-elemento-pai" pelo ID do elemento pai real

// Cria a div
const divCriacaoUsuario = document.createElement("div");
divCriacaoUsuario.id = "criar";
divCriacaoUsuario.className = "right-login";

// Cria a div interna com a classe "card-login"
const divCardLogin = document.createElement("div");
divCardLogin.className = "card-login";

// Cria os elementos internos
const titulo = document.createElement("h1");
titulo.textContent = "Criação de Usuário";

const divNome = document.createElement("div");
divNome.className = "textfield";
const labelNome = document.createElement("label");
labelNome.textContent = "Nome";
const inputNome = document.createElement("input");
inputNome.className = "nome";
inputNome.type = "text";
inputNome.name = "nome";
inputNome.placeholder = "Nome Completo";
divNome.appendChild(labelNome);
divNome.appendChild(inputNome);

const divUsuario = document.createElement("div");
divUsuario.className = "textfield";
const labelUsuario = document.createElement("label");
labelUsuario.textContent = "Usuário";
const inputUsuario = document.createElement("input");
inputUsuario.className = "new-user";
inputUsuario.type = "text";
inputUsuario.name = "new-user";
inputUsuario.placeholder = "Usuário";
divUsuario.appendChild(labelUsuario);
divUsuario.appendChild(inputUsuario);

const divSenha = document.createElement("div");
divSenha.className = "textfield";
const labelSenha = document.createElement("label");
labelSenha.textContent = "Senha";
const inputSenha = document.createElement("input");
inputSenha.className = "new-pass";
inputSenha.type = "password";
inputSenha.name = "new-pass";
inputSenha.placeholder = "Senha";
divSenha.appendChild(labelSenha);
divSenha.appendChild(inputSenha);

const botaoCriarConta = document.createElement("button");
botaoCriarConta.id = "criar";
botaoCriarConta.className = "btn-login";
botaoCriarConta.type = "submit";
botaoCriarConta.textContent = "Criar conta";

const paragrafoVoltarLogin = document.createElement("p");
const linkVoltarLogin = document.createElement("a");
linkVoltarLogin.href = "#";
linkVoltarLogin.id = "voltar-login-link";
linkVoltarLogin.textContent = "Voltar para o login";
paragrafoVoltarLogin.appendChild(linkVoltarLogin);

// Adiciona os elementos internos à div "card-login"
divCardLogin.appendChild(titulo);
divCardLogin.appendChild(divNome);
divCardLogin.appendChild(divUsuario);
divCardLogin.appendChild(divSenha);
divCardLogin.appendChild(botaoCriarConta);
divCardLogin.appendChild(paragrafoVoltarLogin);

// Adiciona a div "card-login" à div principal "criar"
divCriacaoUsuario.appendChild(divCardLogin);

// Adiciona a div principal "criar" ao elemento pai
elementoPai.appendChild(divCriacaoUsuario);

const divlogin= document.getElementById("login"); // Substitua "id-da-div-antiga" pelo ID da div que deseja remover

// Verifica se a div antiga existe antes de tentar removê-la
if (divlogin) {
    // Remove a div antiga do elemento pai
    elementoPai.removeChild(divlogin);
}
const voltarLoginLink = document.getElementById('voltar-login-link');



});





// Quando o link "Voltar para o login" é clicado
voltarLoginLink.addEventListener('click', function() {
    const elementoPai = document.getElementById("main-div"); // Substitua "seu-elemento-pai" pelo ID do elemento pai real

    // Cria a div
    const divLogin = document.createElement("div");
    divLogin.id = "login";
    divLogin.className = "right-login";
    
    // Cria a div interna com a classe "card-login"
    const divCardLogin = document.createElement("div");
    divCardLogin.className = "card-login";
    
    // Cria os elementos internos
    const titulo = document.createElement("h1");
    titulo.textContent = "LOGIN";
    
    const divUsuario = document.createElement("div");
    divUsuario.className = "textfield";
    const labelUsuario = document.createElement("label");
    labelUsuario.textContent = "Usuário";
    const inputUsuario = document.createElement("input");
    inputUsuario.className = "usuario";
    inputUsuario.type = "text";
    inputUsuario.name = "usuario";
    inputUsuario.placeholder = "Usuário";
    divUsuario.appendChild(labelUsuario);
    divUsuario.appendChild(inputUsuario);
    
    const divSenha = document.createElement("div");
    divSenha.className = "textfield";
    const labelSenha = document.createElement("label");
    labelSenha.textContent = "Senha";
    const inputSenha = document.createElement("input");
    inputSenha.className = "password";
    inputSenha.type = "password";
    inputSenha.name = "password";
    inputSenha.placeholder = "Senha";
    divSenha.appendChild(labelSenha);
    divSenha.appendChild(inputSenha);
    
    const botaoEnviar = document.createElement("button");
    botaoEnviar.id = "enviar";
    botaoEnviar.className = "btn-login";
    botaoEnviar.type = "submit";
    botaoEnviar.textContent = "Login";
    
    const paragrafoCriarConta = document.createElement("p");
    const linkCriarConta = document.createElement("a");
    linkCriarConta.href = "#";
    linkCriarConta.id = "criar-usuario-link";
    linkCriarConta.textContent = "Criar uma nova conta";
    paragrafoCriarConta.appendChild(linkCriarConta);
    
    // Adiciona os elementos internos à div "card-login"
    divCardLogin.appendChild(titulo);
    divCardLogin.appendChild(divUsuario);
    divCardLogin.appendChild(divSenha);
    divCardLogin.appendChild(botaoEnviar);
    divCardLogin.appendChild(paragrafoCriarConta);
    
    // Adiciona a div "card-login" à div principal "login"
    divLogin.appendChild(divCardLogin);
    
    // Adiciona a div principal "login" ao elemento pai
    elementoPai.appendChild(divLogin);

    const divcriar= document.getElementById("criar"); // Substitua "id-da-div-antiga" pelo ID da div que deseja remover

// Verifica se a div antiga existe antes de tentar removê-la
if (divcriar) {
    // Remove a div antiga do elemento pai
    elementoPai.removeChild(divcriar);
}
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