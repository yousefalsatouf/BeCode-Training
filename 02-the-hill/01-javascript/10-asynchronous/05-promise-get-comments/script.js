/* becode/javascript
 *
 * /10-asynchronous/05-promise-get-comments/script.js - 10.5: chargement d'articles et de commentaires (Promise)
 *
 * coded by leny@BeCode
 * started at 09/05/2019
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    // your code here
    let run = document.getElementById("run");
    let articles;
    run.addEventListener("click", function() {
        console.log(window.lib.getPosts());
    });

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

})();