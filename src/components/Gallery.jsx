import src from "/home-slide-1.jpeg"

const Gallery = ({image, showthumbs}) => {


    return ( 
        <div className="w-full border-2 rounded-sm">
            <img src={src} alt="" width={1440} height={681} className="rounded-sm" />
        </div>
     );
}
 
export default Gallery;