class JaponesaController{
    
    constructor(){
        this.prato = "Sushi";

        this.pratos = [ 
            {"nome":"Sushi"},
            {"nome":"Tilapia"},
            {"nome":"Yakisoba"}
        ];
        
    }

    //Salva as informacoes no local storage do navegador
    // para acessa-lo abra o inspetor de elementos
    // aba Application, no menu abra o item Local Storage
    // voce podera ver todas as suas informacoes la dentro
    salvarPrato(){
        window.localStorage.setItem('prato', this.prato); 
        window.localStorage.setItem('pratos', JSON.stringify(this.pratos)); 
    }

}

let japonesa = new JaponesaController();


/* Exemplo para tocar um audio
    var audio = new Audio('japonesa.mp3');
    audio.play();

    setTimeout(()=>{
        audio.pause();
    },3000); 
*/