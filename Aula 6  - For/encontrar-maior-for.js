function encontrarMaior(){
    //Armazena o maior numero encontrado
    var maiorNumero = 0;
    //Armazena o valor do input
    var numero = 0;
    for(var i=1; i<6; i++) {
        numero = parseInt(document.getElementById(
            "numero"+i).value);
        if(numero > maiorNumero){
            maiorNumero = numero;
        }
    }
    alert("O maior numero eh "+ maiorNumero);
}