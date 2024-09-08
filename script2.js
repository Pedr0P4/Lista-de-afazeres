let quantidadeAfazeres = 0;
function add(){
    let titulo = document.getElementById("titulo").value;
    let descricao = document.getElementById("descricao").value;
    let op1 = document.getElementById("op1").checked;
    let op2 = document.getElementById("op2").checked;
    let op3 = document.getElementById("op3").checked;

    if(!titulo || !descricao || (!op1 && !op2 && !op3)) return;

    let importancia = "";
    let color = "";

    if(op1){
        importancia = "Normal";
        color = "#cdecac"
    } else if(op2){
        importancia = "Necessário";
        color = "#f3c487"
    } else if(op3){
        importancia = "Urgente";
        color = "#ea978c"
    }

    let dado = {
        title : titulo,
        desc : descricao,
        imp : importancia,
        col : color 
    }

    let dados = [];
    dados = JSON.parse(localStorage.getItem('dados')) || [];
    dados.push(dado);
    localStorage.setItem('dados', JSON.stringify(dados));

    let resultado = "";

    for(let indice of JSON.parse(localStorage.getItem('dados'))){
        resultado += `
        <div class="item">
            <div class="text-container">
                <p id="card-title">${indice.title}</p>
                <p id="card-grade" style="background-color: ${indice.col};">${indice.imp}</p>
            </div>
            <div class="button-container">
                <button onclick="deleteCard()"><img src="./images/del-icon.png" alt="delete icon" id="del-icon"></button>
                <button onclick="editCard()"><a href="dados"><img src="./images/edit-icon.png" alt="edit icon" id="edit-icon"></a></button>
            </div>
        </div>
        `
    }

    localStorage.setItem('resultadoLocal', resultado);
}