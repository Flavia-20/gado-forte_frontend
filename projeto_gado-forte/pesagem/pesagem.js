const formGet = document.querySelector(".form-pesagem-get");
const formPost = document.querySelector(".form-pesagem-post");
const formPut = document.querySelector(".form-pesagem-put");
const formDelete = document.querySelector(".form-pesagem-delete");

const idAtualizar = document.querySelector(".idAtualizar");
const idDeletar = document.querySelector(".idDeletar");
const idGet = document.querySelector(".idGet");
const idPut = document.querySelector(".idPut");

const peso = document.querySelector(".peso");
const pesoAtualizar = document.querySelector(".pesoAtualizar");
const idAnimal = document.querySelector(".idAnimal");
const dataDaPesagem = document.querySelector(".dataDaPesagem");
const dataDaPesagemAtualizar = document.querySelector(".dataDaPesagemAtualizar");

const pesoDisplay = document.querySelector(".pesoDisplay");
const dataDaPesagemDisplay = document.querySelector(".dataDaPesagemDisplay");
const idAnimalDisplay = document.querySelector(".idAnimalDisplay");


function buscar(id) {
    fetch(`http://localhost:8080/pesagem/${id}`, {
        headers: {
            "Accept": "application/json"
        },
        method: "GET"
    })
    .then(response => response.json())
    .then(data => {
        console.log(data);
        pesoDisplay.textContent = `Peso: ${data.peso}`;
        dataDaPesagemDisplay.textContent = `Data da pesagem: ${data.dataDaPesagem}`;
        idAnimalDisplay.textContent = `Id do animal: ${data.idAnimal}`;
    })
    .catch(error => console.log(error));
}

function cadastrar() {
    fetch("http://localhost:8080/pesagem", {
        headers: {
            "Accept": "application/json",
            "Content-Type": "application/json"
        },
        method: "POST",
        body: JSON.stringify({
            peso: peso.value,
            dataDaPesagem: dataDaPesagem.value,
            idAnimal: idAnimal.value
        })
    })
    .then(response => console.log(response))
    .catch(error => console.log(error));
}

function atualizar() {
    const id = idPut.value;
    const novoPeso = pesoAtualizar.value;
    const data = dataDaPesagemAtualizar.value;  

    if (id && data) {  // Verifique se o 'texto' está preenchido
        fetch(`http://localhost:8080/pesagem/${id}`, {
            headers: {
                "Accept": "application/json",
                "Content-Type": "application/json"
            },
            method: "PUT",
            body: JSON.stringify({
                id: id,
                peso: novoPeso,
                dataDaPesagem: data       
            })
        })
        .then(response => response.json()) 
        .then(data => console.log(data)) 
        .catch(error => console.log(error));
    } else {
        console.log("teste");
    }
}


function deletar(id) {
    fetch(`http://localhost:8080/pesagem/${id}`, {
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
    peso.value = "";
    dataDaPesagem.value = "";
    idAnimal.value = "";
    dataDaPesagemAtualizar.value = "";
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
