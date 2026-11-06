import src from "../assets/logo-header.svg"
import Logo from "./Logo";
import Nav from "./Nav";
import Navigate from "./Navigate";
import SearchInput from "./SearchIput";



const Header = () => {
    return ( 
        <header className="p-5 w-full  flex flex-col gap-10 bg-accent-foreground"  >
            <div className="flex justify-around items-center gap-1">
                <Logo image={src}/>
                <SearchInput/>
                <Nav/>
            </div>
            <Navigate/>
        </header>
     );
}
 
export default Header;