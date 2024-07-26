
const logout = document.querySelector(".Logout")
const admin = document.querySelector(".card")
// console.log(logout);
// console.log(admin);


let token = localStorage.getItem("x-auth-token")

function checkToken() {
    if (!token) {
        window.location.replace("/pages/login.html")        
    }
}
checkToken() 

function handleLogout(){
    localStorage.removeItem("x-auth-token")
    open("/pages/login.html", "_self")
}

logout.addEventListener("click", ()=> {
    handleLogout()
})

function adminInfoRender(){
    let userData = JSON.parse(localStorage.getItem("user"))
    console.log(userData);
    admin.innerHTML = `
    <img src="${userData.image}" alt="">
    <h3>${userData.firstName}</h3>
`
}
adminInfoRender()