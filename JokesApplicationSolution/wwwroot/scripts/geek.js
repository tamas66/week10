var viccek;

var letoltes = function () {
    fetch('/jokes.json')
    .then(response => response.json())
    .then(data => letöltésBefejeződött(data)
    );
}

window.onload = letoltes

function letöltésBefejeződött(d) {
    console.log("Sikeres letöltés")
    console.log(d)
    viccek = d;
    for (let i = 0; i < viccek.length; i++) {
        // Új DOM elem létrehozása
        let viccElem = document.createElement('div');

        // A vicc tartalmának beállítása az elemen belül
        viccElem.textContent = viccek[i];

        // A DOM elem hozzáadása a dokumentumhoz
        document.body.appendChild(viccElem);
    }
}