/*

    This module contains all of the data, or state, for the
    application. It exports two functions that allow other
    modules to get copies of the state.

*/
export const getDatabase = () => {
    return {
        styles: [
            { id: 1, style: "Classic", price: 500 },
            { id: 2, style: "Modern", price: 710 },
            { id: 3, style: "Vintage", price: 965 }
        ],
        sizes: [
            { id: 1, carats: 0.5, price: 405 },
            { id: 2, carats: 0.75, price: 782 },
            { id: 3, carats: 1, price: 1470 },
            { id: 4, carats: 1.5, price: 1997 },
            { id: 5, carats: 2, price: 3638 }
        ],
        metals: [
            { id: 1, metal: "Sterling Silver", price: 12.42 },
            { id: 2, metal: "14K Gold", price: 736.4 },
            { id: 3, metal: "24K Gold", price: 1258.9 },
            { id: 4, metal: "Platinum", price: 795.45 },
            { id: 5, metal: "Palladium", price: 1241.0 }
        ],
        jewelryTypes: [
            { id: 1, name: "ring" },
            { id: 2, name: "earrings" },
            { id: 3, name: "necklace" }
        ],
        // you push the orderBuilder object below into the customOrders state array.
        customOrders: [{
            id: 1,
            metalId: 3,
            sizeId: 2,
            styleId: 3,
            jewelryId: 1,
            timestamp: 1614659931693
        }],
        //the new orderBuilder ❗️state object❗️ will store which one of those options was chosen.
        orderBuilder: {

        }
    }
}


/*
When the user clicks on the Create Custom Order button in the application, you need to store their choices permanently. 
This is where the ❗️customOrder state comes into play. You will be ❗️adding objects to that state array.

Since it's a new task that the application needs to perform, you need a function. 
The function's sole reponsiblity will be to take the temporary choices currently being stored in the 
orderBuilder state object and make them permanent. 

❗️(即将 orderBuilder 的 object（顾客的选择） 添加到 customOrders array 里去)
*/
export const addCustomOrder = () => {
    // Copy the current state of user choices
    const newOrder = {...database.orderBuilder }

    // Add a new primary key to the object
    const lastIndex = database.customOrders.length - 1
    newOrder.id = database.customOrders[lastIndex].id + 1

    // Add a timestamp to the order
    newOrder.timestamp = Date.now()

    // Add the new order object to custom orders state
    database.customOrders.push(newOrder)

    // ❗️❗️❗️Reset the temporary state for user choices
    database.orderBuilder = {}

    // Broadcast a notification that permanent state has changed
    document.dispatchEvent(new CustomEvent("stateChanged"))
}