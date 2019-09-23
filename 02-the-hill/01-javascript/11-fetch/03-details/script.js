/* becode/javascript
 *
 * /11-fetch/03-details/script.js - 11.3: details
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
    let input = document.getElementById("hero-id");
    let tamplate;
    let li, h, strong, em, p, hr;

    run.addEventListener("click", function() {
        fetch("http://localhost:3000/heroes").then(function(response) {
            response.json().then(data => {
                data.forEach(hero => {
                    if (input.value == hero.id) {
                        tamplate = document.createElement("tamplate");
                        target.append(tamplate);
                        li = document.createElement("li");
                        tamplate.append(li);
                        h = document.createElement("h4");
                        li.append(h);
                        strong = document.createElement("strong");
                        em = document.createElement("em");
                        h.append(strong);
                        h.append(em);
                        p = document.createElement("p");
                        li.append(p);
                        hr = document.createElement("hr");
                        console.log(input.value);
                        tamplate.append(hr);
                        strong.textContent = hero.name;
                        em.textContent = hero.alterEgo;
                        hero.abilities.forEach(ele => {
                            p.textContent = ele;
                        });
                    }
                });
            });
        });
    });
})();