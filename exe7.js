/* 7. O próximo componente será um que possui 3 caixas de texto
 que só aceitam números e tenha os rótulos (label): 
 lado A, lado B e lado C.
 O componente deve ainda possuir um botão calcular
 que quando acionado deve dizer se um triângulo
 formado por esses 3 lados é um triângulo equilátero, 
 isósceles ou escaleno. */


function verificaTriangulo() {
    let ladotri1 = Number(document.getElementById('ladotri1').value);
    let ladotri2 = Number(document.getElementById('ladotri2').value);
    let ladotri3 = Number(document.getElementById('ladotri3').value);

    let resposta = '';
    if (ladotri1 == ladotri2 && ladotri2 == ladotri3) {
        resposta = 'equilatero'
    } else {
        if (ladotri1 != ladotri2 && ladotri2 != ladotri3 && ladotri1 != ladotri3) {
            resposta = 'escaleno'
        } else {
            resposta = 'isosceles'
        }
    }
    document.getElementById("resultado").innerText = "O triangulo é: " + resposta;

}