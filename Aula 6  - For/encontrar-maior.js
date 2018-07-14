function encontrarMaior(){
    var maiorNumero = 0;
    var numero1 = parseInt(document.getElementById("numero1").value);
    var numero2 = parseInt(document.getElementById("numero2").value);
    var numero3 = parseInt(document.getElementById("numero3").value);
    var numero4 = parseInt(document.getElementById("numero4").value);
    var numero5 = parseInt(document.getElementById("numero5").value);

    if(numero1 > maiorNumero){
        maiorNumero = numero1;
    }


    if(numero2 > maiorNumero){
        maiorNumero = numero2;
    }


    if(numero3 > maiorNumero){
        maiorNumero = numero3;
    }


    if(numero4 > maiorNumero){
        maiorNumero = numero4;
    }


    if(numero5 > maiorNumero){
        maiorNumero = numero5;
    }


    alert("O maior numero eh "+ maiorNumero);
}