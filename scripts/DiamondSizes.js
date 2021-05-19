import { getSizes, setSize } from "./database.js"

const sizes = getSizes()

document.addEventListener(
    "change",
    (event) => {
        if (event.target.name === "size") {
            window.alert(``)
        }
    }
)

export const DiamondSizes = () => {
    let sizeHtml = "<ul>"

    // Use .map() for converting objects to <li> elements
    const listItems = sizes.map(size => {
            return `<li> <input type="radio" name="size" value="${size.id}" /> ${size.carats} </li>`
        })
        // 注： .map() returns a new array after applying the function to each item of the old array.

    sizeHtml += listItems.join("")
    sizeHtml += "</ul>"

    return sizeHtml
}

//add eventListener to tell Users what they chose.
//event.target.name 来自于 line 19 的 attribute。
// ❓❓  why this event shows an empty alert first ❓❓
document.addEventListener(
    "change",
    (event) => {
        if (event.target.name === "size") {
            window.alert(`User chose size ${event.target.value}`)
        }
    }
)


//add eventlistener: set the corresponding property of the order builder object in application state.
document.addEventListener(
    "change", e => {
        if (e.target.name === "size") {
            setSize(parseInt(e.target.value))
        }
    }
)