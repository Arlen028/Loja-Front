
const Logo = ({image}) => {
    return ( 
        <div className="w-[253] h-[44]">
            {image && <img src={image} alt="" className="w-full" />}            
        </div>
     );
}
 
export default Logo;