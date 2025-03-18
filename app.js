let amigos = [];

function adicionarAmigo() {
    const nomesDeEntrada = document.querySelector('input').value;
    if (amigos.includes(nomesDeEntrada)) {
        alert("Este nome já está na lista");
    } else if( nomesDeEntrada !== "") {
        amigos.push(nomesDeEntrada);
        limparCampo('input');
        atualizarLista();
    } else {
        alert("Por favor, insira um nome!");
    }
}

function limparCampo(tag) {
    let campo = document.querySelector(tag);
    campo.value = ""
}

function atualizarLista() {
    let lista = document.getElementById('listaAmigos');
    lista.innerHTML = ""
    for (i = 0; i < amigos.length; i++) {
        let li = document.createElement('li');
        li.innerHTML = amigos[i];
        lista.appendChild(li);
    }
}

function removerAmigo() {
    amigos.pop();
    atualizarLista();
}

function sortearAmigo() {
    let resultado = document.getElementById("resultado");
    let lista = document.getElementById('listaAmigos');
    if (amigos.length - 1 !== 0) {
        lista.innerHTML = ""
        let numeroSorteado = Math.floor(Math.random() * amigos.length);
        let li = document.createElement('li');
        li.innerHTML = `O nome sorteado foi ${amigos[numeroSorteado]}`;
        resultado.appendChild(li);
        amigos = [];
    } else {
        let li = document.createElement('li');
        li.innerHTML = "Inserira ao menos dois nomes para o sorteio";
        theFirstChild = lista.firstChild; 
        lista.insertBefore(li, theFirstChild);
    }
}