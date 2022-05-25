import Cars from "../layout/Cars"
import './Suvs.css'

function Suvs(){
    return(
        <div className="suvs_container">
            <Cars 
            image='https://www.ford.com.br/content/ford/br/pt_br/home/jcr:content/par/tabpanel/cars0/splitter/splitter21/mediacarouselitem/image.imgs.full.high.jpg/1650913234697.jpg'
            nameCar='Bronco Sport '
            />

            <Cars 
            image='https://www.ford.com.br/content/ford/br/pt_br/home/jcr:content/par/tabpanel/cars0/splitter/splitter22/mediacarouselitem/image.imgs.full.high.png/1650402215401.png'
            nameCar='Territory '
            />
        </div>
    )
}

export default Suvs