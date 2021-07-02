document.forms["login"].addEventListener("submit", (e) => e.preventDefault());

function testInput() {
    if (form.checkValidity()) {
        success();
    }
}

function success(){
    window.location = "success.html";
}