import Logo from "./Logo";
import src from "../assets/logo-footer.svg"
import { FacebookLogoIcon, InstagramLogoIcon, TwitterLogoIcon } from "@phosphor-icons/react";
import { NavLink } from "react-router-dom";

const Footer = () => {
    const info1 = {
            title: "Informação",
            informations: [
                {text: "Sobre Drip Store", link: "/about"},
                {text: "Segurança", link: "/security"},
                {text: "Wishlist", link: "/wishlist"},
                {text: "Blog", link: "/blog"},
                {text: "Trabalhe conosco", link: "/"},
                {text: "Sobre Drip Store", link: "/about"}
            ]            
    }

    
    const info2 = {
        
            title: "Categorias",
            informations: [
                {text: "Camisetas", link: "/shirts"},
                {text: "Calças", link: "/pants"},
                {text: "Bonés", link: "/caps"},
                {text: "Headphones", link: "/headphones"},
                {text: "Tênis", link: "/shoes"},                
            ]            
        
        }
    const info3 = {
            title: "Contato",
            informations: [
                {text: "Av. Santos Dumont, 1510 - 1 andar - Aldeota, Fortaleza - CE, 60150-161", link: "/maps"},
                {text: "(85) 3051-3411", link: "/phone"},              
            ]            
    }
    

    return ( 
        <div className="p-5 bg-dark-gray text-white box-border ">
            <footer className="flex flex-wrap justify-around items-start pb-5">
                    <div className="flex flex-col max-w-xs gap-5">
                        <Logo image={src}/>
                        <p >
                            Lorem ipsum dolor sit amet consectetur, adipisicing elit. 
                            ex error temporibus eveniet illo fugiat doloribus suscipit distinctio quos.
                        </p>
                        <ul className="flex gap-5">
                            <li><FacebookLogoIcon size={20}/></li>
                            <li><InstagramLogoIcon size={20}/></li>
                            <li><TwitterLogoIcon size={20}/></li>
                        </ul>
                    </div>
                    <div className="flex gap-10 ">
                        <div className="max-w-36">
                        <h3 className="text-base">{info1.title}</h3>
                        <ul className="text-sm">
                            {info1.informations.map((item , index)=>(
                                <li key={index}><NavLink>{item.text}</NavLink></li>
                            ))}
                            
                        </ul>
                    </div>
                    <div className="max-w-24">
                        <h3 className="text-base">{info2.title}</h3>
                        <ul className="text-sm">
                            {info2.informations.map((item , index)=>(
                                <li key={index}><NavLink>{item.text}</NavLink></li>
                            ))}
                        </ul>
                    </div>            
                    <div className="max-w-60">
                        <h3 className="text-base">{info3.title}</h3>
                        <ul className="text-sm">
                            {info3.informations.map((item , index)=>(
                                <li key={index}><NavLink>{item.text}</NavLink></li>
                            ))}
                        </ul>
                    </div>    
                    </div>        
                </footer>
                <hr />
                <p className="text-center p-5">© 2026 Digital Store</p>
        </div>
     );
}
 
export default Footer;