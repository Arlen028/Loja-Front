import { productsData } from "@/utils/productsdata";
import ProductCard from "./ProductCard";

const ProductListing = () => {
    return ( 
        <div className="p-10 flex flex-wrap gap-5">            
             {productsData.map((item) => (
                <ProductCard key={item.id} {...item}/>
            ))}
        
        </div>
     );
}
 
export default ProductListing;