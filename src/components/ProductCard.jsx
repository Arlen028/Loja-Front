const ProductCard = ({image, name, price, priceDiscount}) => {
    return ( 
        <div>
            {image}
            <p>{name}</p>
            <p>{price}</p>
            <p>{priceDiscount}</p>
        </div>
     );
}
 
export default ProductCard;