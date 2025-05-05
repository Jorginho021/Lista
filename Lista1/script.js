document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("form");
    const produtoInput = document.getElementById("produto");
    const quantidadeInput = document.getElementById("quantidade");
    const listaDeCompras = document.getElementById("lista-de-compras");
    const limparBtn = document.getElementById("limpar");

    function adicionarItem(event) {
        event.preventDefault();

        const produto = produtoInput.value.trim();
        const quantidade = parseInt(quantidadeInput.value);

        if (!produto || quantidade <= 0 || isNaN(quantidade)) {
            alert("Por favor, insira um produto e uma quantidade válida.");
            return;
        }

        const li = document.createElement("li");
        li.textContent = `${produto} - Quantidade: ${quantidade}`;

        li.addEventListener("click", function () {
            li.classList.toggle("riscado");
        });

        listaDeCompras.appendChild(li);

        produtoInput.value = "";
        quantidadeInput.value = "";
    }

    function limparLista() {
        listaDeCompras.innerHTML = "";
    }

    form.addEventListener("submit", adicionarItem);
    limparBtn.addEventListener("click", limparLista);
});
