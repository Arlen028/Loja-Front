import Gallery from "@/components/Gallery";
import ProductListing from "@/components/ProductListing";
import Section from "@/components/Section";


const HomePage = () => {
    return ( 
        <div className="bg-linear-to-b from-secondary to-secondary-foreground w-screen">
            <div className="flex flex-col items-center justify-center p-5 ">
                <Gallery/>
                <Section title={"Produtos em Alta"} titleAlign="left" >
                    <ProductListing/>
                </Section>
            </div>

            
        </div>
    );
}
 
export default HomePage;