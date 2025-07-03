//  შექმენით OrderManager კლასი, რომელსაც ექნება: 
//  --- თვისებები --- 
// ◽ activeOrders: Map - ობიექტის შექმნისას ცარიელი მაპი
// ◽ completedOrders: Set - ობიექტის შექმნისას ცარიელი სეტი
// ❔ activeOrders მაპი შეინახავს აქტიურ შეკვეთებს სადაც key იქნება orderId: Number, ხოლო value იქნება customerName: String
// ❔ completedOrders სეტი კი იმ მომხმარებლების სახელებს შეინახავს, რომლების შეკვეთებიც შევასრულეთ.
//  --- მეთოდები --- 
// ◽ processOrder(orderId, customerName, callback) 
// ◽ printStatus()
// ❔ printStatus მეთოდი კონსოლზე ბეჭდავს ყველა აქტიურ შეკვეთას(activeOrders) და ყველა დასრულებულ შეკვეთას(completedOrders). გამოიყენეთ ლუპი ანდა დესტრუქცია
// ❔ processOrder მეთოდი ქმნის შეკვეთას(ამატებს activeOrdersში), კონსოლზე გამოაქვს შეტყობინება, რომ ახალი შეკვეთა მივიღეთ და 3 წამით ამუშავებს შეკვეთას (setTimeout)
// ❔ setTimeout ის შიგნით:
//     1)ამოშალეთ შეკვეთა activeOrdersდან და მომხმარებლის სახელი შეინახეთ completedOrders სეტში 
//     2)გამოიძახეთ callBack ფუნქცია(დააბეჭდინეთ, რომ ესა და ეს შეკვეთა შესრულდა)
//     3)გამოიძახეთ printStatus მეთოდი
// ❔ callBack(orderId) ფუნქცია შექმენით კლასის გარეთ და შემდეგი რამ დააბეჭდინეთ კონსოლზე: 'შეკვეთა #${orderId} დამთავრდა'
//  ამის შემდეგ შექმენით OrderManager კლასის ობიექტი და გააკეთეთ რამოდენიმე შეკვეთა განსხავებული id და სახელებით  



class OrderManager {
    constructor (activeOrders, completedOrders){
        if (activeOrders){
            this.activeOrders = activeOrders
        }else {
            this.activeOrders = new Map()
        }
        if (completedOrders){
            this.completedOrders = completedOrders
        }else {
            this.completedOrders = new Set()
        }
    }

    printStatus(){
        console.log("Processing...")
        setTimeout(()=>{
            console.log(`Current Orders`)
            for (let i of this.activeOrders.keys()){
                console.log(`${i}: ${this.activeOrders.get(i)}`)
            }
        }, 3000)
    }

    processOrder(newOrderName, newOrderValue){
        let act = this.activeOrders
        console.log("Processing...")
        act.set(newOrderName, newOrderValue)
        setTimeout(()=>console.log("New Order Accepted"), 3000)
    }
}

function callBack(orderId){
    console.log(`შეკვეთა #${orderId} დამთავრდა'`)
}

const newOrder = new OrderManager(new Map([["Objective", "Do Laundry"], ["Abstractive", "Rethink the live"], ["Prespective", "keep growing"]]), new Set(["keep shrinking", "Not Rething the live", "Not to do Laundry"]))
newOrder.processOrder("UnPrespective", "Eat a jelly fish")
newOrder.printStatus()
