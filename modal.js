// Modal
var btn = document.getElementById("btnModal");
var modal = document.getElementById("myModal");

btn.onclick = () => {
    modal.style.display = "block";
}

var fechar = () => {
    modal.style.display = "none";
}

window.onclick = (event) => {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}