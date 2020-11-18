document.getElementById("ingredientsButton").addEventListener("click", clickButton);
document.getElementById("preparationButton").addEventListener("click", clickButton);
document.getElementById("informationButton").addEventListener("click", clickButton);

function clickButton() {
    const visible = (this.getAttribute('visible') == 'true') ? false : true;
    const stringVisible = (this.getAttribute('visible') == 'true') ? 'MOSTRAR' : 'ESCONDER';

    const contentElement = document.getElementById(this.getAttribute('id') + 'Content');

    contentElement.style.display = contentElement.style.display == "none" ? "block" : "none";

    this.setAttribute("visible", visible);
    this.innerHTML = stringVisible;
}