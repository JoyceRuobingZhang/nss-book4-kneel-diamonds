import { getMetals } from "./database.js"

const metals = getMetals()

document.addEventListener(
    "change",
    (event) => {}
)

export const Metals = () => {
    let metalHtml = "<ul>"

    // This is how you have been converting objects to <li> elements
    for (const metal of metals) {
        metalHtml += `<li>
            <input type="radio" name="metal" value="${metal.id}" /> ${metal.metal}
        </li>`
    }

    metalHtml += "</ul>"
    return metalHtml
}