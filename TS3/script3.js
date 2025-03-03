function appendCharacter(char) {
    document.getElementById("display").value += char;
}

function clearDisplay() {
    document.getElementById("display").value = "";
}

function delDisplay() {
    let display = document.getElementById("display");
    display.value = display.value.slice(0, -1);
}

function equalSign() {
    try {
        let display = document.getElementById("display");
        display.value = eval(display.value);
    } catch (error) {
        display.value = "Error"
    }
}