class Aluno{

    constructor(){
        this.lista = [];
        this.aluno = "";
        this.posicao = -1;
    }

    adicionarInicio(){

        this.carregarAluno();   
        
        if(this.lista[0] != undefined){
            this.realocar(this.posicao);
        }
        
        this.lista[0] = this.aluno;
        this.limparCampos();

        this.exibirListaDeAlunos(); 
    }

    adicionarFinal(){
        this.carregarAluno();     
        this.lista[this.lista.length] = this.aluno;
        this.limparCampos();
        this.exibirListaDeAlunos(); 
    }

    adicionarPosicao(){
        this.carregarAluno();  
        this.carregarPosicao();
        if(this.posicao != ""){
            console.log(this.posicao);
            console.log(this.aluno);

            if(this.lista[this.posicao] != undefined){
                this.realocar(this.posicao);
            }

            this.lista[ this.posicao ] = this.aluno;
            this.limparCampos();
        }
        this.exibirListaDeAlunos(); 
    }

    remover(){
        this.carregarAluno(); 
        for(var i=0; i< this.lista.length; i++){
            
            if(this.lista[i] == this.aluno){
                console.log(i+"="+ this.aluno);
                this.lista.splice(i,1);
                i--;
            }
        }
        
        this.limparCampos();
        this.exibirListaDeAlunos(); 
    }

    realocar(posicao){
        for(var i=this.lista.length -1; i>=posicao; i--){
            
            this.lista[i+1]=this.lista[i];
            console.log(this.lista[i+1]+"="+ this.lista[i]);
            
        }
    }

    carregarAluno(){
        this.aluno = document.getElementById("aluno").value;
    }

    carregarPosicao(){
        this.posicao = document.getElementById("posicao").value;
    }

    limparCampos(){
        document.getElementById("aluno").value = "";
        document.getElementById("posicao").value ="";
    }


    exibirListaDeAlunos(){

        this.remoerListaDeAlunos();
        var tabela = document.createElement("table");
        tabela.id = "tabela";

        var cabecalho = document.createElement("tr");
       
        var indice = document.createElement("th");
        indice.innerText ="Posição";
        indice.className="posicaoTabela";
        
        var aluno = document.createElement("th");
        aluno.innerText ="Aluno";

        cabecalho.appendChild(indice);
        cabecalho.appendChild(aluno);
        tabela.appendChild(cabecalho);

        

        for(var i=0; i<this.lista.length ; i++){
            if(this.lista[i] != undefined){
                var linha = document.createElement("tr");

                var indice = document.createElement("td");
                indice.innerText =i;
                indice.className="posicaoTabela";
                
                var aluno = document.createElement("td");
                aluno.innerText = this.lista[i];
                
                linha.appendChild(indice);
                linha.appendChild(aluno);
                tabela.appendChild(linha);
            }
        }

        document.body.appendChild(tabela);

    }

    remoerListaDeAlunos(){
        var tabela = document.getElementById("tabela");
        if(tabela != null){
            tabela.remove();
        }
    }
}

var aluno = new Aluno();
 