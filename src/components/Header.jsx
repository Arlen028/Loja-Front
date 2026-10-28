import src from "../assets/logo-header.svg"
import Logo from "./Logo";
import Nav from "./Nav";
import Navigate from "./Navigate";
import SearchInput from "./SearchIput";



const Header = () => {
    return ( 
        <header className="p-5 w-full  flex flex-col gap-11"  >
            <div className="flex justify-between items-center gap-2">
                <Logo image={src}/>
                <SearchInput/>
                <Nav/>
            </div>
            <Navigate/>
        </header>
     );
}
 
export default Header;