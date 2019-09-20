/* becode/javascript
 *
 * /10-asynchronous/08-async-get-comments/script.js - 10.8: chargement d'articles et de commentaires (async/await)
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
                articles = article;
                window.lib.getComments(article.id, getComments);
            });
        }

        function getComments(error = null, tabComments) {
            tabComments.forEach(comment => {
                articles.comments = comment;
            });
        }
        console.log(result);
    }
})();