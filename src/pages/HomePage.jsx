import ProductListing from "@/components/ProductListing";
import Section from "@/components/Section";


const HomePage = () => {
    return ( 
        <div>
            <Section title={"Produtos em Alta"} titleAlign="left" >
                <ProductListing/>
            </Section>
        </div>
    );
}
 
export default HomePage;