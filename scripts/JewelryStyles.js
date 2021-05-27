import { getStyles, setStyle } from "./dataAccess.js"

const styles = getStyles()

//add eventlistener: set the corresponding property of the order builder object in application state.
document.addEventListener(
    "change", e => {
        if (e.target.name === "style") {
            setStyle(parseInt(e.target.value))
        }
    }
)

export const JewelryStyles = () => {
    let styleHtml = "<ul>"

    // Use .map() for converting objects to <li> elements
    let listItemsArray = styles.map(eachStyle => {
        return `<li><input class="styles" type="radio" name="style" value="${eachStyle.id}" />${eachStyle.style}</li>`
    })

    // Join all of the strings in the array into a single string
    styleHtml += listItemsArray.join("")

    styleHtml += "</ul>"
    return styleHtml
}