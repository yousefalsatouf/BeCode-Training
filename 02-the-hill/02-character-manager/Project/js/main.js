(() => {
    const axios = require('axios');

    console.log(axios);



    function greeter(person) {
        return "Hello, " + person;
    }
    
    let user = "Jane User";
    
    document.querySelector(".title").textContent = greeter(user);
})();
