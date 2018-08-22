class ListaAlunosHT
{
    constructor()
    {
        this.lista=[];
    }

    adicionaInicio()
    {
        this.limpar();
        var nome = document.getElementById("nome").value;

        this.lista.unshift(nome);
        this.exibirLista();
    }

    adicionaPosicao() {
        this.limpar();
        var nome = document.getElementById("nome").value;
        var posicao =  document.getElementById("posicao").value;

        for (var i = this.lista.length; i >= posicao; i--) {
            this.lista[i] = this.lista[i-1];
        }
        this.lista[posicao] = nome;
        this.exibirLista();
    }

    adicionaFinal()
    {
        this.limpar();
        var nome = document.getElementById("nome").value;

        this.lista.push(nome);
        this.exibirLista();
    }

    adicionaRemover()
    {
        this.limpar();
        var nome = document.getElementById("nome").value;
        for (var i = 0; i < this.lista.length; i++) {
            if (nome == this.lista[i]) {
                this.lista.splice(i,1);
            }
        }
        this.exibirLista();
    }

    exibirLista() {

        var tabelaPrincipal = document.createElement("table");
        tabelaPrincipal.id = "divDiv";

        
        var tr = document.createElement("tr");
       
        var th1 = document.createElement("th");
        th1.innerText = "Nome Aluno";
        th1.id="th1";
        tr.appendChild(th1);
        var th2 = document.createElement("th");
        tr.appendChild(th2);
        th1.id="th2";
        th2.innerText = "Posição";
        tabelaPrincipal.appendChild(tr);
        document.body.appendChild(tabelaPrincipal);

        for (var i = 0; i < this.lista.length; i++) {
            var tr2 = document.createElement("tr");
            var table1 = document.createElement("td");
            var table2 = document.createElement("td");
            table1.id = "table";
            table1.innerHTML = this.lista[i];
            table2.innerHTML = i;
            tr2.appendChild(table1);
            tr2.appendChild(table2);
            tabelaPrincipal.appendChild(tr2);           
        }
    }

    limpar() {
        var table = document.getElementById("divDiv");
        
        if (table != null) {
            table.remove();
        }
    }
}

let lista = new ListaAlunosHT();