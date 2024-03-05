
const quantidade = document.getElementById('quantidade');
const lightbox = document.querySelector(".lightbox");
const lightboxImage = document.querySelector(".lightbox-image");
const lightboxClose = document.querySelector(".lightbox-close");
const imagens = document.querySelectorAll('.gallery-image img');
var informacoesCliques = []; 
const addCarrinho = document.querySelector(".add-carrinho"); 


imagens.forEach(function(imagem) {
    imagem.addEventListener('click', function() {
        // Obtém o valor do atributo data-src da imagem clicada
        const imageUrl = imagem.getAttribute('data-src');
        lightboxImage.setAttribute("src", imageUrl); 
       lightbox.style.display = "flex"; 
});
}); 

lightboxClose.addEventListener("click", () => {
    lightbox.style.display = 'none'; 
});
/////////////////////////////////////////////////////

function AdicionarAoCarrinho () {
    informacoesCliques.push({

    }); 
    var quantidadeAtual = parseInt(document.getElementById("quantidade").innerText);
    quantidadeAtual++;
    document.getElementById("quantidade").innerText = quantidadeAtual;

}

addCarrinho.addEventListener('click', AdicionarAoCarrinho); 
//////////////////////////////////////////////////////////////////////



