import { useNavigate } from "react-router-dom";

const ProductCard = ({id,image, name, price, priceDiscount}) => {
    const navigate = useNavigate();
    const handleClick = () => {
        navigate(`/products/${id}`)
    }
    return ( 
        <div onClick={handleClick} className="cursor-pointer border border-gray-300 rounded-lg p-4 m-2 hover:shadow-lg transition-shadow bg-white w-[300] max-w-full flex flex-col" >
            {image && <img src={image} alt="" width={292} height={321} />}            
            <h4 className="text-3xl">{name}</h4>
            <div className="flex gap-3">                
                <p className="line-through text-2xl text-dark-gray">R$ {price.toFixed(2).replace('.', ',')}</p>
                <p className="text-2xl text-dark-gray">R$ {priceDiscount.toFixed(2).replace('.', ',')}</p>
            </div>
        </div>
     );
}
 
export default ProductCard;