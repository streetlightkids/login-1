document.forms["login"].addEventListener("submit", (e) => e.preventDefault());

function testInput() {
    if (form.checkValidity()) {
        window.location = "success.html";
    }
}