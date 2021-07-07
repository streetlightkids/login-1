document.forms["login"].addEventListener("submit", (e) => e.preventDefault());

function testInput() {
    console.log('berries')
    const form = document.forms["login"];
    if (form.checkValidity()) {
        window.location = "success.html";
    }
}