
const list = document.querySelector("ul")
const buttonShowAll = document.querySelector(".show-all")
const buttonMapAll = document.querySelector(".map-all")
const sumAll = document.querySelector(".sum-all")
const filterAll = document.querySelector(".filter-all")


function showAll(productArrey) {
    let myLi = ""
    productArrey.forEach((product) => {
        myLi += `
            <li>
                <img src=${product.src}>
                <p>X-${product.name}  </p>
                <p class="item-price">R$ ${product.price}</p>
    
            </li>
          `
    })
    list.innerHTML = myLi

}

function mapAllItems() {

    const newPrices = menuOptions.map((product) => ({
        ...product,
        price: product.price * 0.9, // dar 10% de desconto

    }))
    // spread operator
    showAll(newPrices)

}
function sumAllItems() {
    const totalValue = menuOptions.reduce((acc, curr) => acc + curr.price, 0)
    list.innerHTML = `
    <li>
         <p>O valor total dos itens e R$ ${totalValue}</p>
     </li>
    `

   
}
function filterAllItems (){
const filterJustVegan = menuOptions.filter((product) => product.vegan)

showAll(filterJustVegan)




}

buttonShowAll.addEventListener('click', () => showAll(menuOptions))
buttonMapAll.addEventListener('click', mapAllItems)
sumAll.addEventListener('click', sumAllItems)
filterAll.addEventListener('click', filterAllItems)