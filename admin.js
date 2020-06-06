
function modosit() {
    let buttonmod = document.querySelectorAll(".btn-warning");

    for (let i = 0; i < buttonmod.length; i++) {

        buttonmod[i].addEventListener('click', function () {
            let tartalomemail = buttonmod[i].parentElement.parentElement.previousElementSibling.innerHTML;
            buttonmod[i].parentElement.parentElement.previousElementSibling.innerHTML = "";
            let input = document.createElement('input');
            input.setAttribute("value", tartalomemail);
            input.className = "modosit";
            buttonmod[i].parentElement.parentElement.previousElementSibling.appendChild(input);
        });

    }

    for (let i = 0; i < buttonmod.length; i++) {

        buttonmod[i].addEventListener("click", function () {
            let tartalomcim = buttonmod[i].parentElement.parentElement.previousElementSibling.previousElementSibling.innerHTML;
            buttonmod[i].parentElement.parentElement.previousElementSibling.previousElementSibling.innerHTML = "";
            let input = document.createElement('input');
            input.setAttribute("value", tartalomcim);
            input.className = "modosit";
            buttonmod[i].parentElement.parentElement.previousElementSibling.previousElementSibling.appendChild(input);

        });
    }
    for (let i = 0; i < buttonmod.length; i++) {
        buttonmod[i].addEventListener("click", function () {
            let tartalomnev = buttonmod[i].parentElement.parentElement.previousElementSibling.previousElementSibling.previousElementSibling.innerHTML;
            buttonmod[i].parentElement.parentElement.previousElementSibling.previousElementSibling.previousElementSibling.innerHTML = "";
            let input = document.createElement('input');
            input.setAttribute("value", tartalomnev);
            input.className = "modosit";
            buttonmod[i].parentElement.parentElement.previousElementSibling.previousElementSibling.previousElementSibling.appendChild(input);

        });
    }
}
modosit();

function ment() {
    let buttonment = document.querySelectorAll(".btn-success");


    for (let i = 0; i < buttonment.length; i++) {
        buttonment[i].addEventListener('click', function () {
            let inputmezo = buttonment[i].parentElement.parentElement.previousElementSibling.firstChild;
            let ujszovegemail = inputmezo.value;
            inputmezo.parentElement.innerHTML = ujszovegemail;
            inputmezo.parentElement.removeChild(inputtartalom[i]);
        });
    }



    for (let i = 0; i < buttonment.length; i++) {
        buttonment[i].addEventListener("click", function () {
            let inputmezo = buttonment[i].parentElement.parentElement.previousElementSibling.previousElementSibling.firstChild;
            let ujszovegcim = inputmezo.value;
            inputmezo.parentElement.innerHTML = ujszovegcim;
            inputmezo.parentElement.removeChild(inputtartalom[i]);
        });
    }
    for (let i = 0; i < buttonment.length; i++) {
        buttonment[i].addEventListener("click", function () {
            let inputmezo = buttonment[i].parentElement.parentElement.previousElementSibling.previousElementSibling.previousElementSibling.firstChild;
            let ujszovegnev = inputmezo.value;
            inputmezo.parentElement.innerHTML = ujszovegnev;
            inputmezo.parentElement.removeChild(inputtartalom[i]);
        });
    }
}
ment();

function torol() {
    let buttontorol = document.querySelectorAll(".btn-danger");
    for (let i = 0; i < buttontorol.length; i++) {
        buttontorol[i].addEventListener("click", function () {
            let ok = confirm("Biztos akarod törölni?");
            if (ok) {

                //buttontorol[i].parentElement.parentElement.parentElement.className = "hidden";
                buttontorol[i].parentElement.parentElement.parentElement.hidden = true;
            }

        });
    }
}
torol();

let tabla = document.querySelector('#admintabla');

let felveszbtn = document.querySelector("#felvesz");

felveszbtn.addEventListener("click", function () {
    let nev = document.querySelector("#adminname").value;
    let cim = document.querySelector('#admincim').value;
    let email = document.querySelector('#adminemail').value;

    let ujsor = document.createElement('tr');
    tabla.appendChild(ujsor);

    let ujcellaId = document.createElement('td');
    let ujcellaNev = document.createElement('td');
    let ujcellaCim = document.createElement('td');
    let ujcellaEmail = document.createElement('td');
    let ujcellaBtn = document.createElement('td');
    ujsor.appendChild(ujcellaId);
    ujsor.appendChild(ujcellaNev);
    ujsor.appendChild(ujcellaCim);
    ujsor.appendChild(ujcellaEmail);
    ujsor.appendChild(ujcellaBtn);


    let sorokSzama = tabla.childElementCount;
    ujcellaId.innerHTML = sorokSzama;
    ujcellaNev.innerHTML = nev;
    ujcellaCim.innerHTML = cim;
    ujcellaEmail.innerHTML = email;

    let ujcellaButtons = document.createElement('div');
    ujcellaButtons.setAttribute("role", "group");
    ujcellaButtons.setAttribute("aria-label", "Basic example");
    ujcellaButtons.className = "btn-group";
    ujcellaBtn.appendChild(ujcellaButtons);

    let modButton = document.createElement('td');
    modButton.setAttribute("type", "button");
    modButton.className = "btn btn-warning";
    modButton.innerHTML = "Módosít";
    let mentButton = document.createElement('td');
    mentButton.setAttribute("type", "button");
    mentButton.className = "btn btn-success";
    mentButton.innerHTML = "Ment";
    let torolButton = document.createElement('td');
    torolButton.setAttribute("type", "submit");
    torolButton.className = "btn btn-danger";
    torolButton.innerHTML = "Töröl";

    ujcellaButtons.appendChild(modButton);
    ujcellaButtons.appendChild(mentButton);
    ujcellaButtons.appendChild(torolButton);
    modosit();
    ment();
    torol();
});