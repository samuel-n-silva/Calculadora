export function calcularValores() {
    let valorUm = document.querySelector("#valor1").value;
    let valorDois = document.querySelector("#valor2").value;
    let operacaoCalculo = document.querySelector("#operacao").value;
    let resultadoOperacao = document.querySelector("#txtResultado");
    let var1 = parseFloat(valorUm);
    let var2 = parseFloat(valorDois);

    switch (operacaoCalculo) {
        case "op1":
            let result = var1 + var2;
            resultadoOperacao.innerHTML = result;

            break;
        case "op2":
            let result2 = var1 - var2;
            resultadoOperacao.innerHTML = result2;

            break;
        case "op3":
            let result3 = var1 * var2;
            resultadoOperacao.innerHTML = result3;

            break;
        case "op4":
            let result4 = var1 / var2;
            resultadoOperacao.innerHTML = result4;

            break;
        default:
            console.log("default");
    }

    console.log(valorUm, valorDois, operacaoCalculo);
}