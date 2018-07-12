//Funcao para validar o formulario
function validar(){

    // Obtendo as informacoes inseridas no formulario
    var nome = document.getElementById("nome").value;
    var email = document.getElementById("email").value;
    var estado = document.getElementById("estado").value;
    var dataDeNascimento = document.getElementById("dataDeNascimento").value;

    var sexo = document.querySelector("[type=radio]:checked");

    // variavel para quantidade de cursos selecionados
    var quantidadeDeCursosSelecionados = document.querySelectorAll("[type=checkbox]:checked").length;

    // obtendo a foto inserida
    var foto = document.getElementById("foto").files[0];
        
    //Verificando se o nome foi preenchido
    if( nome == "") {
        alert("Preencha o campo nome !");
    }

    // Verificando se o email foi preenchido
    if( email == ""){
        alert("Preencha o campo email !");
    }

    // Verificando se o sexo foi informado
    if( sexo == null ){
        alert("Informe um sexo");
    }

    if(quantidadeDeCursosSelecionados == 0){
        alert("Selecione ao menos um cursos de interesse !");
    }
    // Vericando se o estado foi informado
    if( estado == ""){
        alert("Preencha o campo estado !");
    } 

    // 
    if( foto == undefined ){
        alert("Insira uma foto");
    
    }else if (foto.type != "image/jpeg"){
        alert("Formato de Arquivo inválido");
    
    }else if(foto.size > 100000){ 
        alert("Tamanho maximo de arquivo é 100kb");
    }


    // Vericando se a data de nascimento foi preenchida
    if( dataDeNascimento == ""){
        alert("Preencha o campo Data de Nascimento !");
    }

  



}