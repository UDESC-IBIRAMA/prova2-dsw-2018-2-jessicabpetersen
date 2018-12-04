/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

let array = [], index = 0;

function salvar(){
    debugger;
    var titulo = document.getElementById("titulo").value;
    console.log(titulo);
    array[index] = titulo;
    index++;
    document.getElementById("isbn").value = "";
    document.getElementById("titulo").value = "";
    document.getElementById("autor").value = "";
    document.getElementById("editora").value = "";
    document.getElementById("ano").value = "";
    document.getElementById("qntdd").value = "";
}

function Resultados(){
    var resultado = document.getElementById("tabela");
    debugger;
    for(var i = 0; i < array.length; i++){
        resultado.innerHTML += array[i] + "</br>";
    }
    
}