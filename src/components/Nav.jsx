import { NavLink } from "react-router-dom";
import { Button } from "./ui/button";
import carrinho from "../assets/mini-cart.svg"

const Navigate = () => {
    return ( 
        <ul className="flex items-center gap-5 text-center">
                    <li className=" text-dark-gray-2 text-base"><NavLink to={"/register"}>Cadastrar</NavLink></li>
                    <li><NavLink to={"/login"}><Button className="w-28 h-10 bg-primary text-sm">Entrar</Button></NavLink></li>
                    <li><img src={carrinho} alt="alt" /></li>
                </ul>
     );
}
 
export default Navigate;