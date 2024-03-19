function lerObjeto(){
    carro = {modelo: "Doblo", ano: 2006}
    pessoa = {
        nome: "Maria",
        idade: 25,
        altura: 1.80,
        temFilhos: true,
        endereco: null,
        filhos: [
            {nome: "Safado Jr", idade: 10},
            {nome: "Anginho Jr", idade: 9}
        ],
        formacao: [2006, 2007, 20013],
        veiculo: carro,
        imprimir: function(){
            texto = this.nome + " - idade: " + this.idade + " - carro:" + this.veiculo.modelo;
            return texto;
        }

    };
    pObjeto = document.getElementById("pObjeto");
    pObjeto.innerHTML = pessoa.imprimir();


}


