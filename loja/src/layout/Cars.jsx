import './Cars.css'

function Cars({nameCar , image}){
    
    return(
    <div className="cars_container">
        <img src={image} alt={nameCar} />
        <h1>{nameCar}</h1>
    </div>
    )
}

export default Cars