let expressao = "";

// Adiciona número à expressão
function adicionarNumero(numero) {
    expressao += numero;
    document.getElementById("resultado").innerText = expressao;
}

// Adiciona operação à expressão
function adicionarOperacao(operacao) {
    expressao += operacao;
    document.getElementById("resultado").innerText = expressao;
}

// Limpa a expressão
function limpar() {
    expressao = "";
    document.getElementById("resultado").innerText = "0";
}

// Apaga o último caractere da expressão
function apagar() {
    expressao = expressao.slice(0, -1);
    document.getElementById("resultado").innerText = expressao || "0";
}

// Calcula o resultado da expressão
function calcular() {
    try {
        let resultado = eval(expressao);
        document.getElementById("resultado").innerText = resultado;
        expressao = resultado.toString();
    } catch (error) {
        document.getElementById("resultado").innerText = "Erro";
    }
}
