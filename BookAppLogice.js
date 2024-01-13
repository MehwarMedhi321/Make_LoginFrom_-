function attemptLogin() {
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    if (username === "ali" && password === "ali123") {
        window.location.href = "http://127.0.0.1:5501/Project%20Make%20a%20InstgramStory/InstagramStory.html";
    }else if (password !== "ali123" && username !== "ali"){
        alert("Incorrect username || password");
    }  else if (username !== "ali"){
        alert("( "+ username + " ) IS  A Incorrect USERNAME" );
    }else if (password !== "ali123"){
        alert("( "+ password + " ) IS  A Incorrect PASSWORD");
    } 
};