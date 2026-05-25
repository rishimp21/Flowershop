function signup() {

    let username = document.getElementById("signupUsername").value.trim();

    let email = document.getElementById("signupEmail").value.trim();

    let password = document.getElementById("signupPassword").value.trim();

    if(username === "" || email === "" || password === ""){
        alert("Fill all fields");
        return;
    }

    // Save data
    localStorage.setItem("username", username);
    localStorage.setItem("email", email);
    localStorage.setItem("password", password);

    alert("Signup Successful");

    // Clear form fields
    document.getElementById("signupUsername").value = "";
    document.getElementById("signupEmail").value = "";
    document.getElementById("signupPassword").value = "";

    // Go to login page
    window.location.href = "login_form.html";
}



function login() {

    let username = document.getElementById("loginUsername").value.trim();

    let password = document.getElementById("loginPassword").value.trim();

    let savedUsername = localStorage.getItem("username");

    let savedPassword = localStorage.getItem("password");

    if(username === "" || password === ""){
        alert("Fill all fields");
        return;
    }

    if(username === savedUsername && password === savedPassword){

        localStorage.setItem("isLoggedIn", "true");

        alert("Login Successful");

        // Clear login fields
        document.getElementById("loginUsername").value = "";
        document.getElementById("loginPassword").value = "";

        window.location.href = "flowershop.html";

    }else{

        alert("Invalid Username or Password");

    }
}