const modalOverlay = document.querySelector('.modal-overlay');
const cards = document.querySelectorAll('.card');

// exibir o modal
for (let card of cards) {
    card.addEventListener('click', function(){
        modalOverlay.classList.add('active');
		modalOverlay.querySelector("img").src = card.querySelector("img").src;
		modalOverlay.querySelector("img").alt = card.querySelector("img").alt;
		modalOverlay.querySelector("p").innerHTML = card.querySelector("p").innerHTML;
		modalOverlay.querySelector("legend").innerHTML = card.querySelector("legend").innerHTML;
    });
}

// ocultar o modal
document.querySelector('.close-modal').addEventListener('click', function(){
    modalOverlay.classList.remove('active');
    modalOverlay.querySelector("img").src = '';
});