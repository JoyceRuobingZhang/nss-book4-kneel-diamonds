import { getDatabase } from "./database.js"

const database = getDatabase()

//export arrays
export const getMetals = () => {
    return database.metals.map(metal => ({...metal }))
}

// added exports
export const getSizes = () => {
    return database.sizes.map(size => ({...size }))
}

export const getStyles = () => {
    return database.styles.map(style => ({...style }))
}

export const getOrders = () => {
    return database.customOrders.map(customOrder => ({...customOrder }))
}

export const getJewelryType = () => {
    return database.jewelryTypes.map(jewelryType => ({...jewelryType }))
}

//??? 对吗？？
export const getOrderBuilder = () => {
    return database.orderBuilder
}


/* 
no other modules are allowed to have direct access to the database. That's why you have exported functions that return 
copies of the current state. Other modules invoke those function to get state.

Now you need to export functions whose responsibility is to set state.
*/
export const setMetal = (id) => {
    database.orderBuilder.metalId = id
}

export const setSize = (id) => {
    database.orderBuilder.sizeId = id
}

export const setStyle = (id) => {
    database.orderBuilder.styleId = id
}

export const setJewelryType = (id) => {
    database.orderBuilder.jewelryId = id
}