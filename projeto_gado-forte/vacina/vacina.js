const formGet = document.querySelector(".form-vacina-get");
const formPost = document.querySelector(".form-vacina-post");
const formPut = document.querySelector(".form-vacina-put");
const formDelete = document.querySelector(".form-vacina-delete");

const idAtualizar = document.querySelector(".idAtualizar");
const idDeletar = document.querySelector(".idDeletar");
const idGet = document.querySelector(".idGet");
const idPut = document.querySelector(".idPut");

const nomePopular = document.querySelector(".nomePopular");
const nomeTecnico = document.querySelector(".nomeTecnico");
const textoRestricoes = document.querySelector(".texto-de-restricoes");
const textoRestricoesAtualizar = document.querySelector(".textoRestricoesAtualizar");

const nomePopularDisplay = document.querySelector(".nomePopularDisplay");
const nomeTecnicoDisplay = document.querySelector(".nomeTecnicoDisplay");
const textoDeRestricoesDisplay = document.querySelector(".textoDeRestricoesDisplay");


function buscar(id) {
    fetch(`http://localhost:8080/vacina/${id}`, {
        headers: {
            "Accept": "application/json"
        },
        method: "GET"
    })
    .then(response => response.json())
    .then(data => {
        console.log(data);
        nomePopularDisplay.textContent = `Nome popular: ${data.nomePopular}`;
        nomeTecnicoDisplay.textContent = `Nome técnico: ${data.nomeTecnico}`;
        textoDeRestricoesDisplay.textContent = `Texto de restrições: ${data.textoRestricoes}`;
    })
    .catch(error => console.log(error));
}

function cadastrar() {
    fetch("http://localhost:8080/vacina", {
        headers: {
            "Accept": "application/json",
            "Content-Type": "application/json"
        },
        method: "POST",
        body: JSON.stringify({
            nomePopular: nomePopular.value,
            nomeTecnico: nomeTecnico.value,
            textoRestricoes: textoRestricoes.value
        })
    })
    .then(response => console.log(response))
    .catch(error => console.log(error));
}

function atualizar() {
    const id = idPut.value;
    const texto = textoRestricoesAtualizar.value;  

    if (id && texto) {  // Verifique se o 'texto' está preenchido
        fetch(`http://localhost:8080/vacina/${id}`, {
            headers: {
                "Accept": "application/json",
                "Content-Type": "application/json"
            },
            method: "PUT",
            body: JSON.stringify({
                id: id, 
                textoRestricoes: texto       
            })
        })
        .then(response => response.json()) 
        .then(data => console.log(data)) 
        .catch(error => console.log(error));
    } else {
        console.log("Por favor, insira um ID e um texto de restrições para atualização.");
    }
}


function deletar(id) {
    fetch(`http://localhost:8080/vacina/${id}`, {
        headers: {
            "Accept": "application/json",
            "Content-Type": "application/json"
        },
        method: "DELETE"
    })
    .then(response => console.log(response))
    .catch(error => console.log(error));
}

function limpar() {
    nomePopular.value = "";
    nomeTecnico.value = "";
    textoRestricoes.value = "";
    textoRestricoesAtualizar.value = "";
}


formGet.addEventListener("submit", function(event) {
    event.preventDefault();
    const id = idGet.value;
    if (id) {
        buscar(id);
    } else {
        console.log("Por favor, insira um ID válido para busca.");
    }
});

formPost.addEventListener("submit", function(event) {
    event.preventDefault();
    cadastrar();
    limpar();
});

formPut.addEventListener("submit", function(event) {
    event.preventDefault();
    atualizar();
    limpar();
});

formDelete.addEventListener("submit", function(event) {
    event.preventDefault();
    const id = idDeletar.value;
    if (id) {
        deletar(id);
        limpar();
    } else {
        console.log("Por favor, insira um ID válido para exclusão.");
    }
});
