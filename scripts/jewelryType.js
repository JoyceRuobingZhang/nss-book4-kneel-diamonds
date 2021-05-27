import { getJewelryType, setJewelryType } from "./database.js"

const jewelryTypes = getJewelryType()


export const JewelryTypes = () => {
    let html = "<ul class='jelwery_options'>"

    const jewelryArr = jewelryTypes.map(jewelryType => {
        return `<li><input type="radio" name="jewelry" value="${jewelryType.id}" />${jewelryType.name}</li>`
    })
    html += jewelryArr.join("")
    html += "</ul>"
    return html
}


document.addEventListener("change", e => {
    if (e.target.name === "jewelry") {
        setJewelryType(parseInt(e.target.value))
    }
})