class MenuController{

    japonesa(){
        document.getElementById("conteudo").innerHTML = '<object type="text/html" data="japonesa/japonesa.html" ></object>';
    }

    chinesa(){
        document.getElementById("conteudo").innerHTML = '<object type="text/html" data="chinesa/chinesa.html" ></object>';
    }

    brasileira(){
        document.getElementById("conteudo").innerHTML = '<object type="text/html" data="brasileira/brasileira.html" ></object>';
    }

}

let menuController = new MenuController();