class BancoController{
    constructor(){
        this.conta = new Conta();
    }

    criarConta(){
        this.conta.nome = document.getElementById("nome").value;
        this.conta.saldo = 0.0;
        this.exibirMensagemDeBoasVindas();
        this.esconderTelaDeAberturaDeConta();
        this.exibirAnimacao();
        setTimeout(()=>{
            this.esconderAnimacao();
            this.exibirTelaDeUtilizacao();
            this.exibirSaldo();
            
        }, 2500);
    }


    sacar(){
        var valor = parseFloat(document.getElementById("valor").value);
        if( this.conta.sacar(valor) ){
            this.exibirSaldo();
        }else{
            alert("Saldo indisponível");
        }
        
    }

    depositar(){
        var valor = parseFloat(document.getElementById("valor").value);
        this.conta.depositar(valor);
        this.exibirSaldo();
    }

    exibirMensagemDeBoasVindas(){
        document.getElementById("gifAbertura").style.display = "none";
        document.getElementById("bemVindo").innerText = "Olá "+ this.conta.nome+",\n Bem-Vindo ao Banco HT";
        document.getElementById("bemVindo").style.display = "block";
    }

    exibirAnimacao(){
        document.getElementById("animacao").style.display = "block";
        document.getElementById("bemVindo").style.color = "#FFFFFF";
        document.getElementById("bemVindo").style.fontSize = "20pt";
        document.body.style.backgroundColor = "#262626";
    }

    exibirTelaDeUtilizacao(){
        document.getElementById("bemVindo").innerText = "Comece a utilizar sua conta hoje !";
        document.getElementById("utilizacao").style.display = "block";
        document.getElementById("gifUtilizacao").style.display = "block";
        
    }
    
    esconderAnimacao(){
        document.getElementById("animacao").style.display = "none";
        
        
    }
    
    esconderTelaDeAberturaDeConta(){
        document.getElementById("aberturaDeConta").style.display = "none";
    }

    exibirSaldo(){
        document.getElementById("saldo").innerText = "Saldo: R$"+this.conta.saldo; 
    }

}

let bancoController = new BancoController();