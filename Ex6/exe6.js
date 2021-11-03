/* 6. Agora você precisa criar um componente que possui 
 3 caixas de texto. Eles só aceitam números 
 e possuem rótulos (label): Quantidade de números,
 valor mínimo e valor máximo. 
 Seu componente deve possuir um 
 botão calcular que quando acionado deve 
 criar um array com quantidade de números aleatórios
 não repetidos e ordená-los. 
 Os números devem estar entre valor mínimo 
 e valor máximo (inclusives, ou seja incluindo 
 o valor mínimo e valor máximo). 
 Lembre-se que para calcular quantidade 
 de números deve ser menor que a soma 
 de valor mínimo e valor máximo. */


function calcular() {
    let qtd = Number(document.getElementById("quantidade").value);
    let nummin = Number(document.getElementById("min").value);
    let nummax = Number(document.getElementById("max").value);


    var lista = []

    if (qtd <= (nummax - nummin)) {
        let i = 1;
        while (i <= qtd) {
            let numgerado = Math.floor(Math.random() * (nummax - nummin - 1) + nummin);
            if (lista.includes(numgerado) === false) {
                lista.push(numgerado)
                i++;
            }
        }
        document.getElementById("resultado").innerText = "A lista é : " + lista.sort((a, b) => a - b)

    } else {
        document.getElementById("resultado").innerText = "Valor informado inválido"
    }
}