import Cars from "../layout/Cars"
import './Picapes.css'

function Picapes(){
    return(
        <div className="picapes_container">
            <Cars 
            image='https://www.ford.com.br/content/ford/br/pt_br/home/jcr:content/par/tabpanel/cars0/splitter/splitter0/mediacarouselitem/image.imgs.full.high.jpg/1635293773055.jpg'
            nameCar='Ranger'
            />

            <Cars 
            image='https://www.ford.com.br/content/ford/br/pt_br/home/jcr:content/par/tabpanel/cars0/splitter/splitter1/mediacarouselitem/image.imgs.full.high.png/1648164218008.png'
            nameCar='Maverick'
            />

        </div>
    )
}

export default Picapes