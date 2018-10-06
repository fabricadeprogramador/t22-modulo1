class MenuController{
    constructor(){
    }

    entrar(){
        this.carro();
        document.getElementById("slogan").style.display = "none";
        document.getElementById("site").style.display = "block";
    }
    carro(){
        document.getElementById("centro").innerHTML = '<object type="text/html" data="carro/carro.html" ></object>'
    }

    caminhonete(){
        document.getElementById("centro").innerHTML = '<object type="text/html" data="caminhonete/caminhonete.html" ></object>'
    }

    caminhao(){
        document.getElementById("centro").innerHTML = '<object type="text/html" data="caminhao/caminhao.html" ></object>'
    }

    moto(){
        document.getElementById("centro").innerHTML = '<object type="text/html" data="carro/carro.html" ></object>'
    }

    triciclo(){
        document.getElementById("centro").innerHTML = '<object type="text/html" data="carro/carro.html" ></object>'
    }

}

let menuController = new MenuController();