import './Cart.css'

function Cart({products}){
    return products.map(productsName => <h1>{productsName}</h1>)
}

export default Cart

  














// return products.map((productName) => <p>{productName}</p>);