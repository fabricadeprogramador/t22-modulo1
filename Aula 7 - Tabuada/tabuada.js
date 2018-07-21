function gerar()
{
    limpar();
     var numero = document.getElementById("numero").value;
     var divMae = document.createElement("div");
     divMae.id="divMae";
     var tabuada="";
     var divFilha = document.createElement("div");

    for(var i=1; i<11; i++){
    
        tabuada+=numero+"x"+i+"="+numero*i+"\n";
      
    }

    divFilha.innerHTML=tabuada;
    divMae.appendChild(divFilha);
    document.body.appendChild(divMae);
    



}

function todos(){
    limpar();
    var divMae = document.createElement("div");
    divMae.id = "divMae";
    var tabuada="";


    for(var i=1; i<11; i++){

        var divFilha = document.createElement("div");
        tabuada="";
        for (var j=1; j<=10; j++){
            tabuada+=i+"x"+j+"="+i*j+"\n";
        }
        divFilha.innerHTML=tabuada;
        divMae.appendChild(divFilha);

       
     }
    document.body.appendChild(divMae);
    
    


}
function limpar(){
    var abc = document.getElementById("divMae");
    if (abc!=null) {
        abc.remove();
    }
}