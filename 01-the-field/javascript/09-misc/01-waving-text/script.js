/* becode/javascript
 *
 * /09-misc/01-waving-text/script.js - 9.1: effet vague
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    // your code here
    var target = document.getElementById("target");
    target.innerHTML = "";
    var text = "I-Wanna-Go-waving"

    for (var i in text) {
        span = document.createElement("span");
        txt = document.createTextNode(text[i]);
        span.appendChild(txt);
        target.append(span);
    }
})();