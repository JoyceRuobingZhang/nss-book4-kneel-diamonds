import { getMetals, setMetal, getOrderBuilder } from "./dataAccess.js"

const metals = getMetals()


export const Metals = () => {
    let metalHtml = "<ul>"
        // This is how you have been converting objects to <li> elements
        // add conditions to determine which button was selected, then display html 

    /* 🔴🔴🔴
        you need to determine which one should be checked by default - based on the current state of orderBuilder.
        so the logic is : writing conditions to load the html based on the orderBuilder.
    */
    let orderBuilder = getOrderBuilder()

    if (orderBuilder.metalId === undefined) {
        const listedArr = metals.map(metal => {
            return `<li><input type="radio" name="metal" value="${metal.id}"  /> ${metal.metal}</li>`
        })
        metalHtml += listedArr.join("")
        metalHtml += "</ul>"
        return metalHtml
    } else if (orderBuilder.metalId) {

        // 🟡🟡🟡 write all the origianl html for all the items
        const listedArr = metals.map(metal => {
            return `<li><input type="radio" name="metal" value="${metal.id}"  /> ${metal.metal}</li>`
        })

        // 🟡🟡🟡 to rewrite the html for the selected item
        const selectedMetal = metals.find(metal => {
            return metal.id === orderBuilder.metalId
        })

        let theItemIndex = listedArr.findIndex(item => {
            return item.match(`${selectedMetal.id}`)
        })
        listedArr[theItemIndex] = `<li>
        <input type="radio" name="metal" value="${selectedMetal.id}" checked /> ${selectedMetal.metal}
        </li>`

        metalHtml += listedArr.join("")
        metalHtml += "</ul>"

        // // 🟡🟡🟡 simpler solution
        // const selectedMetal = metals.find(metal => metal.id === orderBuilder.metalId)
        // metalHtml += metals.map(metal =>
        //     `<li>
        //     <input type="radio" name="metal" value="${metal.id}" ${metal.id === selectedMetal.id ? 'checked ' : ''} />
        //     ${selectedMetal.metal}</li>`)

        return metalHtml
    }
    //🔴 when you return in a function, you reutrn to the next higher scope;
    // 🔴But when you return in an if block, it will just jump out of the Metals (line 6) function.

}


document.addEventListener(
    "change",
    (event) => {
        if (event.target.name === "metal") {
            setMetal(parseInt(event.target.value))
            document.dispatchEvent(new CustomEvent("stateChanged"))
        }
    }
)


// let listedArr = metals.map(metal => {
//     return `<li><input type="radio" name="metal" value="${metal.id}"  /> ${metal.metal}</li>`
// })
// for (const metal of metals) {
//     if (event.target.value === `${metal.id}`) {
//         let theItem = listedArr.find(item => {
//             return item.match(`${metal.id}`)
//         })
//         theItem = `<li><input type="radio" name="metal" value="${metal.id}"  checked /> ${metal.metal}</li>`
//     }

// }