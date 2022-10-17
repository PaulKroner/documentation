// if-else
if (statement = true) {
    // do something...;
}
else {
    // ...
}

// while
while (statement = true) {
    //...
}

// for
for (i = 0; i < variable; i++) {
    //...
}

// Logische Operatoren
// && = AND
// || = OR

// switch
switch (i) {
    case 0:
        //...
        break;
    case 1:
        //...
        break;
    default:
        break;
}

// gibt Inhalt eines Selects über die ID wieder
function better_get(id) {
    let e = document.getElementById(id)
    return e.options[e.selectedIndex]?.text ?? ""
}

// Inhalt Input
var inputContent = document.getElementById(id).value;

// Array
const array = [];
array.push(content); // Array mit Inhalt befüllen
//Array leeren
array.splice(0, array.length);


// Copy to Clipboard
function copyToClipboard() {
    /* Get the text field */
    var copyText = document.getElementById("ausgabeStatement");

    /* Select the text field */
    copyText.select();
    copyText.setSelectionRange(0, 99999); /* For mobile devices */

    /* Copy the text inside the text field */
    navigator.clipboard.writeText(copyText.value);

    /* Alert the copied text */
    alert("Copied the text: " + copyText.value);
}

//etwas verstecken oder wieder anzeigen lassen
function showOrhide(ids) {
    var y = document.getElementById(ids);
    if (y.style.display = "none") {
        y.style.display = "flex";
    }
    else {
        y.style.display = "none";
    }
}
function hide(ids) {
    var x = document.getElementById(ids);
    x.style.display = "none";
}

// ausgewählte Select-option deselecten
document.getElementById(id).selectedIndex = "-1";

// JQuery Anfrage zu php
$(document).ready(function () {
    $('#id').on('change', function () {
        //holt selected Wert und packt ihn in Variable zum übergeben
        var select = document.getElementById('id');
        var tableAuswahl = select.options[select.selectedIndex]?.text ?? "";

        if (tableAuswahl) {
            $.ajax({
                type: 'POST',
                url: 'datei.php',
                data: 'name=' + tableAuswahl,
                success: function (html) {
                    $('#ausgabeID').html(html);
                    //Element mit Data-Attribute
                    $('[data-select-add = "'+ i +'"]').html(html);
                }
            });
        } else {
            $('#ausgabeID').html('<option value="">Fehler</option>');
            //Element mit Data-Attribute
            $('[data-select-add]').html('<option value="">Select Table first</option>');
            alert("Fehler bei AJAX")
        }

    });
});

// neue Elemente hinzufügen (sind weg beim neuladen der Seite)
let fragment = document.createDocumentFragment();
let newDiv = document.createElement('div');
    newDiv.setAttribute('class', 'classname');

var newElement = document.createElement('select'); //hier kann auch input rein
    newElement.setAttribute('class', 'classname');
    newElement.setAttribute('onchange', 'func()')
    //Auswahlmöglichkeiten setzen
    //default Wert einfügen
    let default_opt = document.createElement('option');
    default_opt.innerHTML = 'defaultWert';
    newElement.appendChild(default_opt);
    default_opt.disabled = true;
    //Operatoren einfügen
    for (let j = 0; j < optionsOperator.length; j++) {
        var opt = document.createElement('option');
        //in jedem Durchlauf die Operatoren aus einem Array als Option eingefügt
        opt.value = optionsOperator[j];
        opt.innerHTML = optionsOperator[j];
        newElement.appendChild(opt);
    }

    newElement.dataset.attribute = number; // data-attribute = number
    newDiv.appendChild(newElement);
    fragment.appendChild(newDiv);

