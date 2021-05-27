import { KneelDiamonds } from "./KneelDiamonds.js"
import { addCustomOrder } from "./database.js"
import { getOrderBuilder } from "./dataAccess.js"



const mainContainer = document.querySelector("#container")
    //Which module currently is responsible for starting the process of generating HTML? That's right, it's main.js.
export const renderAllHTML = () => {

    mainContainer.innerHTML = KneelDiamonds()

}

renderAllHTML()



//add custom event
//When state changes for your application, you need to regenerate the HTML to display the new state to the user.
document.addEventListener("stateChanged", event => {
    console.log("State of data has changed. Regenerating HTML...")

    renderAllHTML()

})



// the create-custom-order button click event
document.addEventListener("click", e => {
    if (e.target.id === "orderButton") {
        let orderBuilderObject = getOrderBuilder()
        if (orderBuilderObject.metalId && orderBuilderObject.sizeId && orderBuilderObject.styleId && orderBuilderObject.jewelryId) {
            addCustomOrder()
        }
    }
})