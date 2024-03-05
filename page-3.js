var informacoesCliques3 = [];
const addCarrinho3 = document.querySelector(".add-carrinho-3");


function AdicionarAoCarrinho3 () {
    informacoesCliques3.push({

    }); 
    var quantidadeAtual = parseInt(document.getElementById("quantidade-3").innerText);
    quantidadeAtual++;
    document.getElementById("quantidade-3").innerText = quantidadeAtual;

}

addCarrinho3.addEventListener('click', AdicionarAoCarrinho3); 