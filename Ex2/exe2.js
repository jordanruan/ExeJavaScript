/* 2.Crie um script
  onde o usuario digite num campo de formulário (text) as teclas e 
  via function aconteça a separação
  entre letras e números , onde os mesmo devem ser 
  exibidos em campos diferentes . */



var separarLetraNumber = document.getElementById('texto')
separarLetraNumber.addEventListener('change', (e) => {

    var n1 = separarLetraNumber.value.match(/[0-9]+/g);
    var letra = separarLetraNumber.value.match(/[a-zA-Z]+/g);
    document.getElementById('numero').innerText = 'Números : ' + n1;
    document.getElementById('letra').innerText = 'Letras :  ' + letra;

})