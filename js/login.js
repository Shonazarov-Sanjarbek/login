const form = document.querySelector(".form")
const inputUsername = document.querySelector(".form__input-username")
const inputPassword = document.querySelector(".form__input-password")
console.log(form);
console.log(inputUsername);
console.log(inputPassword);


const API__USERS = "https://dummyjson.com"

console.log(API__USERS);

form.addEventListener("submit", async(e) => {
    e.preventDefault()
        let user = {
            username : inputUsername.value,
            password : inputPassword.value,
        }
        let responce = await fetch(`${API__USERS}/auth/login`, {
            method: "POST",
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(user)

        })
        responce
                .json()
                .then(res => {
                    if (res.token) {
                        localStorage.setItem(`user`, JSON.stringify(res))
                        localStorage.setItem("x-auth-token", res.token)
                        open("/pages/admin.html", "_self")
                    } else {
                        alert ("usernam or password is incorrect")
                    }
                })
            
    // console.log(inputUsername.value);
    // console.log(inputPassword.value);
})

