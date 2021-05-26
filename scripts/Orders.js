import { getOrders, getMetals, getSizes, getStyles } from "./database.js"



export const countTotalCost = (order) => {
    //get metal price
    const metals = getMetals()
        // Remember that the function you pass to find() must return true/false
    const foundMetal = metals.find(
        (metal) => {
            return metal.id === order.metalId
        }
    )
    const metalCost = foundMetal.price

    //get size price
    const sizes = getSizes()
        // Remember that the function you pass to find() must return true/false
    const foundSize = sizes.find(
        (size) => {
            return size.id === order.sizeId
        }
    )
    const sizeCost = foundSize.price

    //get style price
    const styles = getStyles()
        // Remember that the function you pass to find() must return true/false
    const foundStyle = styles.find(
        (style) => {
            return style.id === order.styleId
        }
    )
    const styleCost = foundStyle.price

    //count total cost
    let totalCost = metalCost + sizeCost + styleCost

    // ❗️❗️ find the order with the jeewlwy type🔴🔴🔴🔴🔴🔴🔴🔴


    return totalCost
}



//🟠🟠🟠 default / ring order
export const Orders = (cost) => {
    /*
    Can you explain why the state variable (❗️❗️getOrders() 这里指的是 get the customOrders state array from the database) 
    has to be inside the component function for Orders, but not the others?
    */
    const orders = getOrders()

    let html = "<ul>"


    for (const order of orders) {
        html += `<li>
        Order #${order.id} cost ${cost}
    </li>`
    }

    html += "</ul>"

    return html
}