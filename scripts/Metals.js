import { getMetals, setMetal } from "./dataAccess.js"

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

//add eventListener to tell Users what they chose.
//event.target.name 来自于 line 16 的 attribute。
document.addEventListener(
    "change",
    (event) => {
        if (event.target.name === "metal") {
            window.alert(`User chose metal ${event.target.value}`)
        }
    }
)

/*
Instead of showing an alert when a metal is chosen, 
you now need to set the corresponding property of the order builder object in application state.
*/
// event.target.value 也来自于 line 16 的 attribute。
document.addEventListener(
    "change",
    (event) => {
        if (event.target.name === "metal") {
            setMetal(parseInt(event.target.value))
        }
    }
)