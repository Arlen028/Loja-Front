const ProductCard = ({image, name, price, priceDiscount}) => {
    return ( 
        <div>
            {image && <img src={image} alt="" width={292} height={321} />}            
            <h4>{name}</h4>
            <p className="text-2xl text-dark-gray">{price}</p>
            <p className="text-2xl text-dark-gray">{priceDiscount}</p>
        </div>
     );
}
 
export default ProductCard;