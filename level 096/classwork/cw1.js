const form = document.querySelector("form");

function constructor(email,password){
    this.email = email
    this.password = password
}

form.addEventListener("submit", (e)=>{
    e.preventDefault()
    let axali = new constructor(e.target.email.value,e.target.password.value)
    const entered = {
        email: e.target.email.value,
        password: e.target.password.value
    }
    const table = document.querySelector("table")
    table.innerHTML += `
    <tr>
        <td>${entered.email}</td>
        <td>${entered.password} </td>
    </tr>
    `
})