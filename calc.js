// Vi skapar en konstant variabel med namnet displayView
// Vi hämtar input elementet med id "display" för att använda den senare i en funktion

const displayView = document.getElementById('display')


// Denna funktion gör så att vi kan trycka på knapparna och att det som trycks hamnar i displayen, vi använder += för att det ska gå att skriva mer än en siffra eller tecken i miniräknarens display.

function appendToDisplay(input) {
    displayView.value += input
}


// Vi skapar denna funktion för att den ska rensa displayen när vi trycker på C

function clearDisplay() {
    displayView.value = "";
}


// Vi skapar denna funktion för att värdet av det som står i displayen ska omvandlas till resultatet av beräkningen när vi trycker på =

function calculate() {
    displayView.value = eval(displayView.value)
} 