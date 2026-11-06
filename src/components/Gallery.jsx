import { useState } from "react";
import arrowLeft from "../assets/arrow-left.svg"
import arrowRight from "../assets/arrow-right.svg"


const Gallery = ({image, width, height,  radius}) => {

    const [currentIndex, setCurrentIndex] = useState(0);

    const nextImage = () => {
        if (currentIndex < nextImage.length -1 ) setCurrentIndex(currentIndex +1)
    } 
    const prevImage = () => {
        if (currentIndex > nextImage - 0 ) setCurrentIndex( currentIndex - 1 )
    }
    
    return ( 
        <div className=" flex flex-col items-center ">
            <div 
            className="relative overflow-hidden group" 
            style={{width: width, height: height, borderRadius: radius}} 
            >
                {image.map((image, index)=>(
                    <img 
                    key={index} 
                    src={image.src} 
                    alt="" 
                    className="w-full h-full object-cover shrink-0"
                    style={{borderRadius: radius}}
                    />
                ))}
            </div>
            <button 
            onClick={prevImage} 
            disabled={currentIndex  === 0}
            className="absolute left-4 top-1/2 -translate-y-1/2 p-2 bg-black/50 rounded-full text-white cursor-pointer hover:bg-black/70 transition-colors disabled:cursor-not-allowed " 
            >
                <img src={arrowLeft} alt="" />
            </button>

            <button 
            onClick={nextImage}
            disabled={currentIndex === image.length -1}
            className="absolute right-4  top-1/2 -translate-y-1/2 p-2 bg-black/50 rounded-full text-white cursor-pointer hover:bg-black/70 transition-colors disabled:cursor-not-allowed"
            >
                <img src={arrowRight} alt="" />
            </button>
        </div>
     );
}
 
export default Gallery;