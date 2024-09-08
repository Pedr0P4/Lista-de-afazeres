let resultadoFinal = localStorage.getItem('resultadoLocal');
let contents = document.getElementById("content-div");
if(!contents) console.log("Erro");
else console.log("Ta ai");
contents.innerHTML = resultadoFinal;

function reset(){
    localStorage.clear();
    contents.innerHTML = "";
}

function deleteCard(){

}

function editCard(){
    
}