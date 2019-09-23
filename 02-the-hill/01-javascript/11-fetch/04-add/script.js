/* becode/javascript
 *
 * /11-fetch/04-add/script.js - 11.4: ajouter un élément
 *
 * coded by leny@BeCode
 * started at 12/05/2019
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    // your code here
    let run = document.getElementById("run");
    let target = document.getElementById("target");
    let nameInput = document.getElementById("hero-name");
    let alterInput = document.getElementById("hero-alter-ego");
    let powerInput = document.getElementById("hero-powers");
    let getId;
    run.addEventListener("click", function() {
        //console.log(name.value + " " + alter.value + " " + power.value);
        if (!nameInput.value) {
            nameInput.style.borderColor = "red";
        } else if (!alterInput.value) {
            alterInput.style.borderColor = "red";
        } else if (!powerInput.value) {
            powerInput.style.borderColor = "red";
        } else {
            nameInput.style.backgroundColor = "green";
            alterInput.style.backgroundColor = "green";
            powerInput.style.backgroundColor = "green";
            fetch("http://localhost:3000/heroes").then(function(response) {
                response.json().then(data => {
                    getId = (data[data.length - 1].id) + 1;
                    data.push({
                        ID: getId,
                        name: nameInput.value,
                        alterEgo: alterInput.value,
                        abilities: [powerInput.value],
                    });
                    data.forEach(ele => {
                        console.log(ele);
                    });
                });
            });
        }
    });
})();