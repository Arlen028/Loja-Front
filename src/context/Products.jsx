import ProductCard from "@/components/ProductCard";

const Products = () => {
    const products = [
        {
            name: "produto 1",
            image: "/produc-image-1.jpeg",
            price: 200,
            priceDiscount: 149.9
        },
        {
            name: "produto 2",
            image: "/produc-image-2.jpeg",
            price: 200,
            priceDiscount: 149.9
        },
        {
            name: "produto 3",
            image: "/produc-image-3.jpeg",
            price: 200,
            priceDiscount: 149.9
        },
        {
            name: "produto 4",
            image: "/produc-image-4.jpeg",
            price: 200,
            priceDiscount: 149.9
        },
        {
            name: "produto 5",
            image: "/produc-image-5.jpeg",
            price: 200,
            priceDiscount: 149.9
        },

    ]
    return ( 
        <div>
            {products.map((item , index)=>(
                <ProductCard key={index} {...item}/>
            ))}
        </div>
     );
}
 
export default Products;