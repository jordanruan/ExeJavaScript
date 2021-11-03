/* 4. Agora você deverá criar um componente que 
   tenha uma caixa de texto que só aceita números e
   tenha um rótulo (label). 
   Aqui você usará esse número para calcular o 
   fatorial dele e mostrá-lo na tela. 
   O componente deve ainda possuir um botão “calcular”. 
   Quando acionado ele deve calcular o fatorial do número digitado e imprimir 
   o resultado e o tempo necessário para a execução.
   O resultado deve ser mostrado
   no formato : 53! = xx (yy milisegundos). */



function fatorial() {
    let inicio = new Date().getTime();

    var numero = parseInt(document.getElementById('n1').value);
    var resposta = document.getElementById('resposta');
    var resultado = 1;

    for (var contador = 1; contador <= numero; contador++) {
        resultado *= contador;
    }
    let fim = new Date().getTime();
    tempo = fim - inicio;

    resposta.innerHTML = "o fatorial é : " + resultado + "! = " + " e o tempo de execução é : " + tempo + " milisegundos ";

}