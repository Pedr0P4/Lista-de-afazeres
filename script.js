let resultadoFinal = localStorage.getItem('resultadoLocal');
let contents = document.getElementById("content-div");
if(!contents) console.log("Erro");
else console.log("Ta ai");
contents.innerHTML = resultadoFinal;

function reset(){
    localStorage.clear();
    contents.innerHTML = "";
}

function editCard(){
    
}

let dados = [];
dados = JSON.parse(localStorage.getItem('dados')) || [];
console.log(dados);

const deleteButtons = document.querySelectorAll('.delete-btn');
console.log(deleteButtons)
deleteButtons.forEach(button => {
    button.addEventListener('click', function(){
        let itemNumber = "#item" + this.name;
        let salvo = localStorage.getItem('resultadoLocal');
        let temp = document.createElement('div');
        temp.innerHTML = salvo;

        let remEl = temp.querySelector(itemNumber);
        if(remEl){
            remEl.remove();
            console.log("existe!");
        } else{
            console.log("Não existe!");
        }

        localStorage.setItem('resultadoLocal', temp.innerHTML);

        let dados = [];
        dados = JSON.parse(localStorage.getItem('dados')) || [];

        console.log(dados);

        dados.splice(Number(this.name), 1);
        localStorage.setItem('dados', JSON.stringify(dados));

        console.log(localStorage.getItem('resultadoLocal'));
        this.parentElement.parentElement.remove();
    });
});