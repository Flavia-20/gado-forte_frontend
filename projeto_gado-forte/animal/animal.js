const formGet = document.querySelector(".form-animal-get");
const formPost = document.querySelector(".form-animal-post");
const formPut = document.querySelector(".form-animal-put");
const formDelete = document.querySelector(".form-animal-delete");

const idAtualizar = document.querySelector(".idAtualizar");
const idDeletar = document.querySelector(".idDeletar");
const idGet = document.querySelector(".idGet");
const idPut = document.querySelector(".idPut");

const nome = document.querySelector(".nome");
const nomeAtualizar = document.querySelector(".nomeAtualizar");
const raca = document.querySelector(".raca");
const dataNascimento = document.querySelector(".data_de_nascimento");

const nomeDisplay = document.querySelector(".nomeDisplay");
const racaDisplay = document.querySelector(".racaDisplay");
const dataNascimentoDisplay = document.querySelector(".dataNascimentoDisplay");

function formatarData(data) {
    const dataObj = new Date(data);
    const dia = String(dataObj.getDate()).padStart(2, '0');
    const mes = String(dataObj.getMonth() + 1).padStart(2, '0');
    const ano = dataObj.getFullYear();
    return `${dia}/${mes}/${ano}`;
}

function buscar(id) {
    fetch(`http://localhost:8080/animal/${id}`, {
        headers: {
            "Accept": "application/json"
        },
        method: "GET"
    })
    .then(response => response.json())
    .then(data => {
        console.log(data);
        // Exibir as informações na página HTML
        nomeDisplay.textContent = `Nome: ${data.nome}`;
        racaDisplay.textContent = `Raça: ${data.raca}`;
        // Formatar a data antes de exibir
        const dataFormatada = formatarData(data.dataNascimento);
        dataNascimentoDisplay.textContent = `Data de Nascimento: ${dataFormatada}`;
    })
    .catch(error => console.log(error));
}

function cadastrar() {
    fetch("http://localhost:8080/animal", {
        headers: {
            "Accept": "application/json",
            "Content-Type": "application/json"
        },
        method: "POST",
        body: JSON.stringify({
            nome: nome.value,
            raca: raca.value,
            dataNascimento: dataNascimento.value
        })
    })
    .then(response => console.log(response))
    .catch(error => console.log(error));
}

function atualizar() {
    const id = idPut.value;
    const nome = nomeAtualizar.value;  

    if (id && nome) {
        fetch(`http://localhost:8080/animal/${id}`, {
            headers: {
                "Accept": "application/json",
                "Content-Type": "application/json"
            },
            method: "PUT",
            body: JSON.stringify({
                id: id, 
                nome: nome       
            })
        })
        .then(response => response.json()) 
        .then(data => console.log(data)) 
        .catch(error => console.log(error));
    } else {
        console.log("Por favor, insira um ID e um nome para atualização.");
    }
}

function deletar(id) {
    fetch(`http://localhost:8080/animal/${id}`, {
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
    nome.value = "";
    raca.value = "";
    dataNascimento.value = "";
    idAtualizar.value = "";
    idDeletar.value = "";
    nomeAtualizar.value = "";
    idPut.value = "";
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
