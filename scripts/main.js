import { KneelDiamonds } from "./KneelDiamonds.js"
import { addCustomOrder } from "./database.js"
import { getOrderBuilder } from "./database.js"

const mainContainer = document.querySelector("#container")


//Which module currently is responsible for starting the process of generating HTML? That's right, it's main.js.
const renderAllHTML = () => {
    mainContainer.innerHTML = KneelDiamonds()
}

renderAllHTML()

//add custom event
//When state changes for your application, you need to regenerate the HTML to display the new state to the user.
document.addEventListener("stateChanged", event => {
    console.log("State of data has changed. Regenerating HTML...")
    renderAllHTML()
})

//click the button
/* 
❗️❗️❗️❗️❗️❗️❗️❗️❗️❗️❗️❗️❗️❗️❗️can't get the latest orderBuilder object. 为什么？？？
orderBuilder.metalID; orderBuilder.sizeID; orderBuilder.styleID 为什么 undefined？？
*/

let orderBuilder = getOrderBuilder()
document.addEventListener("click", e => {
    if (e.target.id === "orderButton") {
        orderBuilder = getOrderBuilder()
        if (orderBuilder.metalID && orderBuilder.sizeID && orderBuilder.styleID) {
            addCustomOrder()
        }
    }
})