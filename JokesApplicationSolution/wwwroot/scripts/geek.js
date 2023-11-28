var viccek;

window.onload = function () {
    fetch('data/jokes.json')
    .then(response => response.json())
    .then(data => letöltésBefejeződött(data)
    );
}

function letöltésBefejeződött(d) {
    console.log("Sikeres letöltés")
    console.log(d)
    viccek = d;
    for (let i = 0; i < viccek.length; i++) {
        viccKerdes.id = "viccKerdes";
        if (viccek[i]["question"]) {
            let viccKerdes = document.createElement('div');
            viccKerdes.innerText = viccek[i]["question"];
            document.body.appendChild(viccKerdes);
            let viccValasz = document.createElement('div');
            viccValasz.innerText = viccek[i]["answer"];
            viccKerdes.appendChild(viccValasz);
        } else {
            let vicc = document.createElement('div');
            vicc.innerText = viccek[i]["text"];
            document.body.appendChild(vicc);
        }
    }
}