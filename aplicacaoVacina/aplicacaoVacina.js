const formGet = document.querySelector(".form-aplicacaoVacina-get");
const formPost = document.querySelector(".form-aplicacaoVacina-post");
const formPut = document.querySelector(".form-aplicacaoVacina-put");
const formDelete = document.querySelector(".form-aplicacaoVacina-delete");

const idAtualizar = document.querySelector(".idAtualizar");
const idDeletar = document.querySelector(".idDeletar");
const idGet = document.querySelector(".idGet");
const idPut = document.querySelector(".idPut");

const idVacina = document.querySelector(".idVacina");
const idAnimal = document.querySelector(".idAnimal");
const idUsuario = document.querySelector(".idUsuario");
const dataDeAplicacao = document.querySelector(".dataDeAplicacao");


const idVacinaDisplay = document.querySelector(".idVacinaDisplay");
const idAnimalDisplay = document.querySelector(".idAnimalDisplay");
const idUsuarioDisplay = document.querySelector(".idUsuarioDisplay");
const dataDeAplicacaoDisplay = document.querySelector(".dataDeAplicacaoDisplay");


function buscar(id) {
    fetch(`http://localhost:8080/aplicacaoVacina/${id}`, {
        headers: {
            "Accept": "application/json"
        },
        method: "GET"
    })
    .then(response => response.json())
    .then(data => {
        console.log(data);
        idVacinaDisplay.textContent = `Id Vacina: ${data.idVacina}`;
        idAnimalDisplay.textContent = `Id animal: ${data.idAnimal}`;
        idUsuarioDisplay.textContent = `Id do usuário: ${data.idUsuario}`;
        dataDeAplicacaoDisplay.textContent = `Data de Aplicação: ${data.dataDeAplicacao}`;
    })
    .catch(error => console.log(error));
}

function cadastrar() {
    fetch("http://localhost:8080/aplicacaoVacina", {
        headers: {
            "Accept": "application/json",
            "Content-Type": "application/json"
        },
        method: "POST",
        body: JSON.stringify({
            idVacina: idVacina.value,
            idAnimal: idAnimal.value,
            idUsuario: idUsuario.value,
            dataDeAplicacao: dataDeAplicacao.value
        })
    })
    .then(response => console.log(response))
    .catch(error => console.log(error));
}

function atualizar() {
    const id = idPut.value;
    const novoPeso = pesoAtualizar.value;
    const data = dataDaaplicacaoVacinaAtualizar.value;  

    if (id && data) {  // Verifique se o 'texto' está preenchido
        fetch(`http://localhost:8080/aplicacaoVacina/${id}`, {
            headers: {
                "Accept": "application/json",
                "Content-Type": "application/json"
            },
            method: "PUT",
            body: JSON.stringify({
                id: id,
                peso: novoPeso,
                dataDaaplicacaoVacina: data       
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
    fetch(`http://localhost:8080/aplicacaoVacina/${id}`, {
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
    dataDaaplicacaoVacina.value = "";
    idAnimal.value = "";
    dataDaaplicacaoVacinaAtualizar.value = "";
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
