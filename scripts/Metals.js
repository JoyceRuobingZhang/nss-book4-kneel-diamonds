import { getMetals, setMetal } from "./dataAccess.js"

const metals = getMetals()

document.addEventListener(
    "change",
    (event) => {}
)

export const Metals = () => {
    let metalHtml = "<ul>"

    // This is how you have been converting objects to <li> elements
    const listedArr = metals.map(metal => {
        return `<li>
    <input type="radio" name="metal" value="${metal.id}"  /> ${metal.metal}
</li>`
    })
    metalHtml += listedArr.join("")

    metalHtml += "</ul>"
    return metalHtml
}


document.addEventListener(
    "change",
    (event) => {
        if (event.target.name === "metal") {
            setMetal(parseInt(event.target.value))
            document.dispatchEvent(new CustomEvent("stateChanged"))

            let listedArr = metals.map(metal => {
                return `<li><input type="radio" name="metal" value="${metal.id}"  /> ${metal.metal}</li>`
            })
            for (const metal of metals) {
                if (event.target.value === `${metal.id}`) {
                    let theItem = listedArr.find(item => {
                        return item.match(`${metal.id}`)
                    })
                    theItem = `<li><input type="radio" name="metal" value="${metal.id}"  checked /> ${metal.metal}</li>`
                }

            }

        }
    }
)