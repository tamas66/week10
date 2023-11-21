//window.onload = function () {
window.onload = drawPascal(10); //mi tortenik ha betoltodott az oldal
//}

var drawPascal = function (n) { //a var scope-on kivul is el tud erni ertekeket, ha kizarolag scope-on belul akarjuk akk var helyett let
    //a pascal haromszog DOM n db elemenek letrehozasa es elhelyezese 
    var pascalDiv = document.getElementById("pascal");
    for (var sor = 0; sor < n; sor++) {
        //új div létrehozása az új sornak
        //új div osztálylistájához add hozzá a "sor"-t
        //új div-et add hozzá a "pascal" gyermekeihez
        var ujSorDiv = document.createElement('div');
        ujSorDiv.classList.add("sor");
        pascalDiv.appendChild(ujSorDiv);
        for (var oszlop = 0; oszlop <= sor; oszlop++) {
            //új div létrehozása az új elemnek
            //új elem div osztálylistájához add hozzá az "elem"-et
            //teszteléshet .innerHTML = `${sor}:${oszlop}`
            //legyen az innerHTML a megfelelő szám
            //új elem div-et vedd fel a sor elemei közé
            var ujElemDiv = document.createElement('div');
            ujElemDiv.classList.add("elem");
            //ujElem.id = 'elem'
            //ujElem.innerText = faktoriálisR(i)
            ujElem.innerText = sor;
            ujSorDiv.appendChild(ujElemDiv);
        }
    }
}
var faktoriálisR = (n) => {
    if (n === 0 || n === 1) {
        return 1;
    } else {
        return n * faktoriálisR(n - 1)
    }
}