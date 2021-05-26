export const KneelDiamonds = (metal, size, style, order) => {
    return `
        <h1>Kneel Diamonds</h1>

        <article class="choices">
            <section class="choices__metals options">
                <h2>Metals</h2>
                ${metal}
            </section>
            <section class="choices__sizes options">
                <h2>Sizes</h2>
                ${size}
            </section>
            <section class="choices__styles options">
                <h2>Styles</h2>
                ${style}
            </section>
        </article>

        <article class="jelwery_options">
        <ul class="jelwery_options">
          <li> <input id="ring" type="radio" name="jelwery_type" value="ring" checked/>Ring</li>
          <li> <input id="earrings" type="radio" name="jelwery_type" value="earrings" />Earrings</li>
          <li> <input id="necklace" type="radio" name="jelwery_type" value="necklace" />Necklace</li>
        </ul>
        </article>

        <article>
            <button id="orderButton">Create Custom Order</button>
        </article>

        <article class="customOrders">
            <h2>Custom Jewelry Orders</h2>
            ${order}


        </article>
    `
}