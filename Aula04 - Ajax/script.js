function ler(){
    xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function(){
        DivInfo = document.getElementById("DivInfo");
        DivInfo.innerHTML = "Carregando...";
        if( this.readyState == 4 && this.status == 200){
             DivInfo.innerHTML = this.responseText
        }
        if( this.readyState == 4 && this.status == 404){
             DivInfo.innerHTML = this.status+" - "+this.statusText;
        }
    };

    xhttp.open("GET", "info.txt", true);
    xhttp.send();

}

function gerarNumeros(){
    valor = document.getElementById("txtValor").value;
    DivNumeros = document.getElementById("DivNumeros");
    xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function(){
        DivNumeros.innerHTML = "Carregando...";
        if( this.readyState == 4 && this.status == 200){
             DivNumeros.innerHTML = this.responseText
        }
    };
    xhttp.open("Get", "servidor.php?numero=" + valor , true);
    xhttp.send();
}