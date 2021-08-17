function validaCPF(cpf) {
  if (cpf == null || cpf.length != 11){
    return false;
  } else {
    var numeros = cpf.substring(0, 9);
    var digitos = cpf.substring(9);
    
    var soma = 0;
    for(var i = 10; i > 1; i--){
      soma += numeros.charAt(10 - i) * i;
    }

    var resultado = (soma % 11) < 2 ? 0 : 11 - (soma % 11);

    //Validação do primeiro digito
    if(resultado != digitos.charAt(0)) {
      return false;
    } 
 
    soma = 0; 
    numeros = cpf.substring(0, 10);
    for(var k = 11; k > 1; k--){
      soma += numeros.charAt(11 - k) * k;
    }
   
    //Validação do primeiro digito
    resultado = (soma % 11) < 2 ? 0 : 11 - (soma % 11);
    if(resultado != digitos.charAt(1)) {
      return false;
    } 

    return true
  }
}

function extraiCPF(input){
  //RegExp do CPF com e sem pontuação
  const regex1 = new RegExp('[0-9]{11}'); 
  const regex2 = new RegExp('[0-9]{3}.[0-9]{3}.[0-9]{3}-[0-9]{2}');

  const teste1 = input.match(regex1);
  const teste2 = input.match(regex2);

  if (teste1) {
    return teste1[0];
  } 
  if (teste2){
    return teste2[0].replace(/[^0-9]/g, '');
  }
  return null
}

function validacao() {
  document.getElementById('success').style.display = 'none';
  document.getElementById('error').style.display = 'none';

  //Trata o input recebido pelo Usuário
  const inputValue = document.getElementById('cpf_digitado').value;
  const cpf = extraiCPF(inputValue); 

  // Valida o CPF recebido
  const resultadoValidacao= validaCPF(cpf);
 
  if(resultadoValidacao) {
    document.getElementById('success').style.display = 'block';
  } else {
    document.getElementById('error').style.display = 'block';
  }
}



