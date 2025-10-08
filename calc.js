const displayView = document.getElementById('display')

function appendToDisplay(input) {
    displayView.value += input
}

function clearDisplay() {
    displayView.value = "";
}

function calculate() {
    displayView.value = eval(displayView.value)
} 