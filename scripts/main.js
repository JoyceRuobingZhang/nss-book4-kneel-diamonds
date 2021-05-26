import { KneelDiamonds } from "./KneelDiamonds.js"
import { addCustomOrder } from "./database.js"
import { getOrderBuilder } from "./database.js"
import { getOrders } from "./database.js"

import { Metals } from "./Metals.js"
import { DiamondSizes } from "./DiamondSizes.js"
import { JewelryStyles } from "./JewelryStyles.js"
import { Orders, countTotalCost } from "./Orders.js"

const mainContainer = document.querySelector("#container")
    //Which module currently is responsible for starting the process of generating HTML? That's right, it's main.js.
const renderAllHTML = () => {
    const orders = getOrders()
    for (const order of orders) {
        mainContainer.innerHTML = KneelDiamonds(Metals(), DiamondSizes(), JewelryStyles(), Orders(countTotalCost(order).toFixed(2)))
    }
}

renderAllHTML()



//add custom event
//When state changes for your application, you need to regenerate the HTML to display the new state to the user.
document.addEventListener("stateChanged", event => {
    console.log("State of data has changed. Regenerating HTML...")
    if (document.querySelector('input[name="jelwery_type"]:checked').value === "ring") {
        renderAllHTML()
    } else if (document.querySelector('input[name="jelwery_type"]:checked').value === "earrings") {
        const orders = getOrders()
        for (const order of orders) {
            mainContainer.innerHTML = KneelDiamonds(Metals(), DiamondSizes(), JewelryStyles(), Orders((countTotalCost(order) * 2).toFixed(2)))
        }
    } else if (document.querySelector('input[name="jelwery_type"]:checked').value === "necklace") {
        const orders = getOrders()
        for (const order of orders) {
            mainContainer.innerHTML = KneelDiamonds(Metals(), DiamondSizes(), JewelryStyles(), Orders((countTotalCost(order) * 4).toFixed(2)))
        }
    }
})



// the create-custom-order button click event
document.addEventListener("click", e => {
    if (e.target.id === "orderButton") {
        let orderBuilderObject = getOrderBuilder()
        if (orderBuilderObject.metalId && orderBuilderObject.sizeId && orderBuilderObject.styleId) {
            addCustomOrder()
        }
    }
})