/* becode/javascript
 *
 * /11-fetch/05-delete/script.js - 11.5: supprimer un élément
 *
 * coded by leny@BeCode
 * started at 12/05/2019
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    // your code here
    let run = document.getElementById("run");
    let input = document.getElementById("hero-id");
    let index;
    run.addEventListener("click", function() {
        let id = parseInt(input.value);
        fetch("http://localhost:3000/heroes").then(function(response) {
            response.json().then(data => {
                index = data.map(function(hero) {
                    return hero.id;
                }).indexOf(id);
                console.log(index);
                data.splice(index, 1);
                data.forEach(hero => {
                    console.log(hero);
                });

            });
        });
    });
})();