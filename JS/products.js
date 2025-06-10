 $(".size").on('click', function(){
    $(this).toggleClass('focus').siblings().removeClass('focus');
 })
/**
 * A NodeList of all elements with the class 'btn_add_cart'.
 * Represents the "Add to Cart" buttons on the page.
 * @type {NodeListOf<Element>}
 */
   const addToCartButtons = document.querySelectorAll(".btn_add_cart")

    addToCartButtons.forEach(button =>{
        button.addEventListener("click", (event) => {
            const productId = event.target.getAttribute('data-id')
            const selcetedProduct = data.find(product => product.id == productId)
            

            addToCart(selcetedProduct)

            const allMatchingButtons = document.querySelectorAll(`.btn_add_cart[data-id="${productId}"]`)

            allMatchingButtons.forEach(btn =>{
                btn.classList.add("active")
                btn.innerHTML = `      <i class="fa-solid fa-cart-shopping"></i> Item in cart`
            })
        })
    })
    
 $(".size").on('click', function(){
    $(this).toggleClass('focus').siblings().removeClass('focus');
 })
function addToCart(product) {
    let cart = JSON.parse(localStorage.getItem("cart")) || []

    const existingProductIndex = cart.findIndex(item => item.id === product.id)

    if (existingProductIndex > -1) {
        cart[existingProductIndex].quantity += 1
    } else {
        product.quantity = 1
        cart.push(product)
    }

    localStorage.setItem("cart", JSON.stringify(cart))
}