function gerarPromissoria(){
    if (validarCampos()) {
        imprime()
    }
}

function validarCampos() {
    var qtdPormissoria = document.getElementById("qtdPromissoriaInput");
    var valorParcela = document.getElementById("valorParcelaInput");
    var primeiroVencimento = document.getElementById("primeiroVencimentoInput");
    var nomeCredor = document.getElementById("nomeCredorInput");
    var cpfCnpjCredor = document.getElementById("cpfCnpjCredorInput");
    var nomeDevedor = document.getElementById("nomeDevedorInput");
    var cpfCnpjDevedor = document.getElementById("cpfCnpjDevedorInput");
    var rua = document.getElementById("ruaInput");
    var pontoReferencia = document.getElementById("pontoReferenciaInput");
    var numero = document.getElementById("numeroInput");
    var bairro = document.getElementById("bairroInput");
    var cidade = document.getElementById("cidadeInput");
    var estado = document.getElementById("estadoInput");
    var cep = document.getElementById("cepInput");
    if (qtdPormissoria.value <= 0) {
        qtdPormissoria.style.border = "1px solid red";
        qtdPormissoria.style.outline = "1px solid red";
        qtdPormissoria.focus();
        return false;
    } else {
        qtdPormissoria.style.border = "";
        qtdPormissoria.style.outline = "";
    }
    if (valorParcela.value <= 0) {
        valorParcela.style.border = "1px solid red";
        valorParcela.style.outline = "1px solid red";
        valorParcela.focus();
        return false;
    } else {
        valorParcela.style.border = "";
        valorParcela.style.outline = "";
    }
    if (primeiroVencimento.value <= 0) {
        primeiroVencimento.style.border = "1px solid red";
        primeiroVencimento.style.outline = "1px solid red";
        primeiroVencimento.focus();
        return false;
    } else {
        primeiroVencimento.style.border = "";
        primeiroVencimento.style.outline = "";
    }
    if (nomeCredor.value <= 0) {
        nomeCredor.style.border = "1px solid red";
        nomeCredor.style.outline = "1px solid red";
        nomeCredor.focus();
        return false;
    } else {
        nomeCredor.style.border = "";
        nomeCredor.style.outline = "";
    }
    if (!(validaCpf(cpfCnpjCredor.value) || validaCnpj(cpfCnpjCredor.value))) {
        cpfCnpjCredor.style.border = "1px solid red";
        cpfCnpjCredor.style.outline = "1px solid red";
        cpfCnpjCredor.focus();
        return false;
    } else {
        cpfCnpjCredor.style.border = "";
        cpfCnpjCredor.style.outline = "";
    }
    if (nomeDevedor.value <= 0) {
        nomeDevedor.style.border = "1px solid red";
        nomeDevedor.style.outline = "1px solid red";
        nomeDevedor.focus();
        return false;
    } else {
        nomeDevedor.style.border = "";
        nomeDevedor.style.outline = "";
    }
    if (!(validaCpf(cpfCnpjCredor.value) || validaCnpj(cpfCnpjCredor.value))) {
        cpfCnpjDevedor.style.border = "1px solid red";
        cpfCnpjDevedor.style.outline = "1px solid red";
        cpfCnpjDevedor.focus();
        return false;
    } else {
        cpfCnpjDevedor.style.border = "";
        cpfCnpjDevedor.style.outline = "";
    }
    if (rua.value <= 0) {
        rua.style.border = "1px solid red";
        rua.style.outline = "1px solid red";
        rua.focus();
        return false;
    } else {
        rua.style.border = "";
        rua.style.outline = "";
    }
    if (pontoReferencia.value <= 0) {
        pontoReferencia.style.border = "1px solid red";
        pontoReferencia.style.outline = "1px solid red";
        pontoReferencia.focus();
        return false;
    } else {
        pontoReferencia.style.border = "";
        pontoReferencia.style.outline = "";
    }
    if (numero.value <= 0) {
        numero.style.border = "1px solid red";
        numero.style.outline = "1px solid red";
        numero.focus();
        return false;
    } else {
        numero.style.border = "";
        numero.style.outline = "";
    }
    if (bairro.value <= 0) {
        bairro.style.border = "1px solid red";
        bairro.style.outline = "1px solid red";
        bairro.focus();
        return false;
    } else {
        bairro.style.border = "";
        bairro.style.outline = "";
    }
    if (cidade.value <= 0) {
        cidade.style.border = "1px solid red";
        cidade.style.outline = "1px solid red";
        cidade.focus();
        return false;
    } else {
        cidade.style.border = "";
        cidade.style.outline = "";
    }
    if (estado.value <= 0) {
        estado.style.border = "1px solid red";
        estado.style.outline = "1px solid red";
        estado.focus();
        return false;
    } else {
        estado.style.border = "";
        estado.style.outline = "";
    }
    if (cep.value <= 0) {
        cep.style.border = "1px solid red";
        cep.style.outline = "1px solid red";
        cep.focus();
        return false;
    } else {
        cep.style.border = "";
        cep.style.outline = "";
    }
    return true;
}

function validaCpf(cpf){
    if ( !cpf || cpf.length != 11
            || cpf == "00000000000"
            || cpf == "11111111111"
            || cpf == "22222222222" 
            || cpf == "33333333333" 
            || cpf == "44444444444" 
            || cpf == "55555555555" 
            || cpf == "66666666666"
            || cpf == "77777777777"
            || cpf == "88888888888" 
            || cpf == "99999999999" )
        return false;
    var soma = 0
    var resto
    for (var i = 1; i <= 9; i++) 
        soma = soma + parseInt(cpf.substring(i-1, i)) * (11 - i)
    resto = (soma * 10) % 11
    if ((resto == 10) || (resto == 11))  resto = 0
    if (resto != parseInt(cpf.substring(9, 10)) ) return false
    soma = 0
    for (var i = 1; i <= 10; i++) 
        soma = soma + parseInt(cpf.substring(i-1, i)) * (12 - i)
    resto = (soma * 10) % 11
    if ((resto == 10) || (resto == 11))  resto = 0
    if (resto != parseInt(cpf.substring(10, 11) ) ) return false
    return true
};

function validaCnpj(cnpj) {
    if ( !cnpj || cnpj.length != 14
            || cnpj == "00000000000000" 
            || cnpj == "11111111111111" 
            || cnpj == "22222222222222" 
            || cnpj == "33333333333333" 
            || cnpj == "44444444444444" 
            || cnpj == "55555555555555" 
            || cnpj == "66666666666666" 
            || cnpj == "77777777777777" 
            || cnpj == "88888888888888" 
            || cnpj == "99999999999999")
        return false
    var tamanho = cnpj.length - 2
    var numeros = cnpj.substring(0,tamanho)
    var digitos = cnpj.substring(tamanho)
    var soma = 0
    var pos = tamanho - 7
    for (var i = tamanho; i >= 1; i--) {
      soma += numeros.charAt(tamanho - i) * pos--
      if (pos < 2) pos = 9
    }
    var resultado = soma % 11 < 2 ? 0 : 11 - soma % 11
    if (resultado != digitos.charAt(0)){
        return false;
    }
    tamanho = tamanho + 1
    numeros = cnpj.substring(0,tamanho)
    soma = 0
    pos = tamanho - 7
    for (var i = tamanho; i >= 1; i--) {
      soma += numeros.charAt(tamanho - i) * pos--
      if (pos < 2) pos = 9
    }
    resultado = soma % 11 < 2 ? 0 : 11 - soma % 11
    if (resultado != digitos.charAt(1)) return false
    return true;
}

function imprime(){
    window.location.href = "notaImpressao.html";

}

function voltar(){
    window.location.href ="index.html";
}