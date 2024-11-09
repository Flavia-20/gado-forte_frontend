const login = document.querySelector(".login");
const senha = document.querySelector(".senha");

function efetuarLogin() {
    const loginInput = login.value;
    const senhaInput = senha.value;

    fetch("http://localhost:8080/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ login: loginInput, senha: senhaInput })
    })
    .then(response => {
        if (response.ok) {
            return response.json();  // Retorna o token JWT
        } else {
            throw new Error("Login ou senha incorretos.");
        }
    })
    .then(data => {
        localStorage.setItem("token", data.token);  // Armazena o token no localStorage
        window.location.href = "../animal/index.html";  // Redireciona
    })
    .catch(error => {
        console.log(error);
        alert(error.message);
    });
}

// Chama a função ao clicar no botão de login
document.querySelector("button").addEventListener("click", function(event) {
    event.preventDefault();  // Previne o envio padrão do formulário
    efetuarLogin();
});
