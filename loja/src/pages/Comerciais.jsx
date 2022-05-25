import Cars from "../layout/Cars"
import './Comerciais.css'

function Comerciais(){
    return(
        <div className="comerciais_container">
            <Cars 
            image='https://www.ford.com.br/content/ford/br/pt_br/home/jcr:content/par/tabpanel/cars0/splitter/splitter2/mediacarouselitem/image.imgs.full.high.jpg/1648481488915.jpg'
            nameCar='Transit Minibus'
            />

            <Cars 
            image='https://www.ford.com.br/content/ford/br/pt_br/home/jcr:content/par/tabpanel/cars0/splitter/splitter3/mediacarouselitem/image.imgs.full.high.jpg/1650554916165.jpg'
            nameCar='Transit Furgão'
            />

            <Cars 
            image='https://www.ford.com.br/content/ford/br/pt_br/home/jcr:content/par/tabpanel/cars0/splitter/splitter4/mediacarouselitem/image.imgs.full.high.jpg/1650477957622.jpg'
            nameCar='Ranger XL '
            />

            <Cars 
            image='https://www.ford.com.br/content/ford/br/pt_br/home/jcr:content/par/tabpanel/cars0/splitter/splitter20/mediacarouselitem/image.imgs.full.high.jpg/1650403258076.jpg'
            nameCar='Ranger XL CD'
            />
        </div>
    )
}

export default Comerciais