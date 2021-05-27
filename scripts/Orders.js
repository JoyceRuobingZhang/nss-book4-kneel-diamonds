import { getOrders, getMetals, getSizes, getStyles, getJewelryType } from "./database.js"


//🟠🟠🟠 count  price
const buildOrderList = (order) => {
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
    const totalCost = metalCost + sizeCost + styleCost


    // 🟡🟡🟡 add conditions to display different prices
    const jewelryTypes = getJewelryType()

    const foundJewelry = jewelryTypes.find(jewelryType => {
        return jewelryType.id === order.jewelryId
    })

    if (foundJewelry.name === "ring") {
        return `<li>
        Order #${order.id} cost $${totalCost.toFixed(2)}
    </li>`
    } else if (foundJewelry.name === "earrings") {
        return `<li>
        Order #${order.id} cost $${(totalCost * 2).toFixed(2)}
    </li>`
    } else if (foundJewelry.name === "necklace") {
        return `<li>
        Order #${order.id} cost $${(totalCost * 4).toFixed(2)}
    </li>`
    }


    //to return the order information before adding price to it:
    // return `<li>
    //     Order #${order.id} was placed on ${order.timestamp}
    // </li>`
}



export const Orders = () => {
    /*
    Can you explain why the state variable (❗️❗️getOrders() 这里指的是 get the customOrders state array from the database) 
    has to be inside the component function for Orders, but not the others?
    */
    const orders = getOrders()

    let html = "<ul>"

    const listItems = orders.map(buildOrderList)

    html += listItems.join("")
    html += "</ul>"

    return html
}