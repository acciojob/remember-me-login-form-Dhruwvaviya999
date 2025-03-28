//your JS code here. If required.

let isLoggedIn = false;
let submitBtn = document.getElementById("submit");
let existingBtn = document.getElementById("existing");

document.getElementById("submit").addEventListener("click", (e)=>{
	 e.preventDefault();
    let usernameInput = document.getElementById("username").value;
    let passwordInput = document.getElementById("password").value;
    let checkboxInput = document.getElementById("checkbox").checked;

    alert(`Logged in as ${usernameInput}`);

    if (checkboxInput) {
        let userObj = {
            username: usernameInput,
            password: passwordInput,
            isLoggedIn: true
        };
        localStorage.setItem("user", JSON.stringify(userObj));
		submitBtn.style.display = "none";
		existingBtn.style.display = "block";
    } else {
        localStorage.removeItem("user");
    }
})

existingBtn.addEventListener("click", () => {
	alert("Logged in as")
})




