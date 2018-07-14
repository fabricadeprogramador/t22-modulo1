function conferirJogo(evento, casa ){
    setTimeout(()=>{
        var letra = evento.key.toLowerCase();
        
        if(letra == "x" || letra == "o"){
            
            var casa00 = document.getElementById("casa00").value;
            var casa01 = document.getElementById("casa01").value;
            var casa02 = document.getElementById("casa02").value;
            var casa10 = document.getElementById("casa10").value;
            var casa11 = document.getElementById("casa11").value;
            var casa12 = document.getElementById("casa12").value;
            var casa20 = document.getElementById("casa20").value;
            var casa21 = document.getElementById("casa21").value;
            var casa22 = document.getElementById("casa22").value;

            // Primeira Linha
            if( casa00 != "" && casa00 == casa01 && casa01 == casa02 ){
                exibirGanhador( casa00 );
                limparCampos();


            // Segunda Linha
            }else if(casa10 != "" && casa10 == casa11 && casa11 == casa12){
                exibirGanhador( casa10 );
                limparCampos();

            // Terceira Linha
            }else if(casa20 != "" && casa20 == casa21 && casa21 == casa22){
                exibirGanhador( casa20 );
                limparCampos();
            
            // Primeira Coluna
            }else if(casa00 != "" && casa00 == casa10 && casa10 == casa20){
                exibirGanhador( casa00 );
                limparCampos();
            
            // Segunda Coluna
            }else if(casa01 != "" && casa01 == casa11 && casa11 == casa21){
                exibirGanhador( casa01 );
                limparCampos();
            
            // Terceira Coluna
            }else if(casa02 != "" && casa02 == casa12 && casa12 == casa22){
                exibirGanhador( casa02 );
                limparCampos();

            //Diagonal Esquerda para Direita
            }else if(casa00 != "" && casa00 == casa11 && casa11 == casa22){
                alert(casa00 + " Ganhou");
                limparCampos();
            
            // Diagonal Direita para Esquerda
            }else if(casa02 != "" && casa02 == casa11 && casa11 == casa20){
                exibirGanhador( casa02 );
                limparCampos();
            
            // Deu velha
            }else if(casa00 != "" &&
                    casa01 != "" &&
                    casa02 != "" &&
                    casa10 != "" &&
                    casa11 != "" &&
                    casa12 != "" &&
                    casa20 != "" &&
                    casa21 != "" &&
                    casa22 != ""  ){

                alert("Ishi, Deu Velha !");
                limparCampos();
            }
        }else{
            
            //Deixando o campo vazio
            document.getElementById(casa).value = "";
        }
    }, 50);   
}

function exibirGanhador( ganhador ){
    var jogadorX = document.getElementById("jogadorX").value;
    var jogadorO = document.getElementById("jogadorO").value;

    if(ganhador == "x"){
        alert(jogadorX + " Ganhou");
    
    }else {
        alert(jogadorO + " Ganhou");
    }
}

function limparCampos(){

    document.getElementById("casa00").value = "";
    document.getElementById("casa01").value = "";
    document.getElementById("casa02").value = "";

    document.getElementById("casa10").value = "";
    document.getElementById("casa11").value = "";
    document.getElementById("casa12").value = "";

    document.getElementById("casa20").value = "";
    document.getElementById("casa21").value = "";
    document.getElementById("casa22").value = "";

}