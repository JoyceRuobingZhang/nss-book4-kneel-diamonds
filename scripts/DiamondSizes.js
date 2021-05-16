import { getSizes } from "./database.js"

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
            return `<li> <input type="radio" name="size" value="${size.id}" /> ${size.carets} </li>`
        })
        // 注： .map() returns a new array after applying the function to each item of the old array.

    sizeHtml += listItems.join("")
    sizeHtml += "</ul>"

    return sizeHtml
}