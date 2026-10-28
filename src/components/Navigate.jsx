import { NavLink } from "react-router-dom";

const Navigate = () => {
    return ( 
        <div>
            <ul className="flex gap-5">
                <li><NavLink to={"/"} className={({isActive}) => isActive ? 'underline text-primary font-semibold' : 'text-dark-gray-2 hover:text-primary' } >Home</NavLink></li>
                <li><NavLink to={"/products"} className={({isActive}) => isActive ? 'underline text-primary font-semibold' : 'text-dark-gray-2 hover:text-primary' } >Produtos</NavLink></li>
                <li><NavLink to={"*"} className={({isActive}) => isActive ? 'underline text-primary font-semibold' : 'text-dark-gray-2 hover:text-primary' } >Categorias</NavLink></li>
                <li><NavLink to={"*"} className={({isActive}) => isActive ? 'underline text-primary font-semibold' : 'text-dark-gray-2 hover:text-primary' } >Meus Pedidos</NavLink></li>
                
            </ul>
        </div>
     );
}
 
export default Navigate;