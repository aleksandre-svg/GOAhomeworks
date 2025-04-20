let shopcard = document.getElementById("shopcart")

let icon = document.getElementById("cart")
let close = document.querySelector("#closebut")

let count1 = 0

let total = document.getElementById("total")

let card = []

let count = 0

let add = document.getElementsByClassName("add")


document.addEventListener("click", function(e){
    let totalPrice = 0
    if (e.target.textContent == "Add to Cart"){
        card.push({price: e.target.parentElement.querySelector("span").textContent, name : e.target.parentElement.querySelector("a").textContent, imgSrc : e.target.parentElement.parentElement.parentElement.querySelector(".face1").querySelector(".content").querySelector(".icon").querySelector("img").src})
        let shopcards = `<div class="card1"><img src="${card[count].imgSrc}" alt=""><div class="content1"><h1>Name: <span>${card[count].name}</span></h1><h1>Price: $<span id="price1">${card[count].price}</span></h1></div><button>delete</button></div>`
        shopcard.innerHTML += shopcards
        count++
        count1++
        let amount = document.getElementById("am")
        amount.textContent = `Amount: ${count}`
        let total = document.getElementById("to")
        for (let i of card){
            totalPrice+=Number(i.price)
        }
        total.textContent = `Total: ${totalPrice}$`
    }else if (e.target.textContent == "delete"){
        let amount = document.getElementById("am")
        e.target.parentElement.remove()
        count--
        amount.textContent = `Amount: ${count}`
    }else if (e.target.id == "closebut"){
        shopcard.style.transform = "translate(400px)"
    }else if (e.target.id == "cart"){
        shopcard.style.transform = "translate(0%)"
    }
})

