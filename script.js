function scrollProjetos() {
    document.getElementById("projetos").scrollIntoView({
        behavior: "smooth"
    });
}

document.getElementById("formContato").addEventListener("submit", function (e) {
    e.preventDefault();
    alert("Mensagem enviada com sucesso 🚀");
});
