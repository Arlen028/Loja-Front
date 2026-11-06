import Gallery from "@/components/Gallery";
import ProductListing from "@/components/ProductListing";
import Section from "@/components/Section";


const imagecarousel = [
    {"src" : "/home-slide-1.jpeg" },
    {"src" : "/home-slide-2.jpeg" },
    {"src" : "/home-slide-3.jpeg" },
    {"src" : "/home-slide-4.jpeg" },
    {"src" : "/home-slide-5.jpeg" }
]


const HomePage = () => {
    return ( 
        <div className="bg-linear-to-b from-secondary to-secondary-foreground w-screen">
            <div className="flex flex-col items-center justify-center p-5 ">
                <Gallery image={imagecarousel} width={1440} height={661} radius={4} /> 
                <Section title={"Produtos em Alta"} titleAlign="left" >
                    <ProductListing/>
                </Section>
            </div>

            
        </div>
    );
}
 
export default HomePage;