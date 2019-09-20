/* becode/javascript
 *
 * /10-asynchronous/07-async-get-posts/script.js - 10.7: chargement d'articles (async/await)
 *
 * coded by leny@BeCode
 * started at 09/05/2019
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    // your code here
    let run = document.getElementById("run");
    run.addEventListener("click", function() {
        asyncCall();
    });

    async function asyncCall() {
        let result = await window.lib.getPersons();

        function getArticles(error = null, tabArticles) {
            tabArticles.forEach(article => {
                console.log(article);
            });
        }
        console.log(result);
    }
})();