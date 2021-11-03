/* 3. Primeiro, vamos criar um componente que possua duas caixas de texto. 
   No entanto, essas caixas só podem aceitar números, além disso, 
   elas devem ter rótulos (label) com um valor mínimo e um valor máximo. 
   É preciso também sempre checar se o valor mínimo é menor que o valor máximo.
   O componente que você deverá construir ainda deve possuir um botão 
   que deve contar e imprimir quantos números existem entre valor mínimo 
   e valor máximo que sejam múltiplos de 2 e 3 (simultaneamente). */



/*   
  É preciso também sempre checar se
  o valor mínimo é menor que o valor máximo.
 */



function valida() {
    var Lista = [];

    let numeroMin = Number(document.getElementById("n2Min").value);
    let numeroMax = Number(document.getElementById("n1Max").value);

    if (numeroMin > numeroMax) {
        alert("O numero minimo é maior que numero máximo.");
    } else {
        for (n = numeroMin; n < numeroMax; n++) {
            if (n % 2 == 0 && n % 3 == 0) {
                Lista.push(n);
            }
        }
        document.getElementById("imprimir").innerText =
            "Estes são os multiplos de 2 e 3 simultaneamente entre os números " + numeroMin + " e " + numeroMax + " : " +
            Lista;
    }
}