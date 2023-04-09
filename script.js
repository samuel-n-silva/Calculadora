import { calcularValores } from "./calculador.js";

document.addEventListener("DOMContentLoaded", function (event) {
    const form = document.getElementById("some-form");

    form.addEventListener("submit", function (event) {
        event.preventDefault(); // evita o comportamento padrão de enviar o formulário e recarregar a página

        calcularValores(); // executa a função para calcular os valores
    });
});

