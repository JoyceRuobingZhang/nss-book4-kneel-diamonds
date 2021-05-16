import { getStyles } from "./database.js"

const styles = getStyles()

document.addEventListener(
    "change",
    (event) => {}
)

export const JewelryStyles = () => {
    let styleHtml = "<ul>"

    // Use .map() for converting objects to <li> elements
    let listItemsArray = styles.map(eachStyle => {
        const listItem = `<li><input type="radio" name="style" value="${eachStyle.id}" />${eachStyle.style}</li>`
    })

    // Join all of the strings in the array into a single string
    styleHtml += listItemsArray.join("")

    styleHtml += "</ul>"
    return styleHtml
}