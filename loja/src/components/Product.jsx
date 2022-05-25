

function Product({nome, onClick}){

  
  function onAddToCart(){
    onClick(nome)
  }

  
  return(
    <>
      <img src="https://via.placeholder.com/150" alt={nome} />
      <p>{nome}</p>
      <button onClick={onAddToCart}>Adicionar</button>
    </>
  )
}

export default Product

  























  
  
  // const onAddToCart = () => {
  //   onClick(name);
  // };
  
  // return (
  //   <>
  //     <h3>{name}</h3>
  //     <button onClick={onAddToCart}>Adicionar no carrinho</button>
  //   </>
  // );








