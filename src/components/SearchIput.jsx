import { Search } from "lucide-react";
import { InputGroup, InputGroupAddon, InputGroupButton, InputGroupInput } from "./ui/input-group";

const SearchInput = () => {
    return ( 
        <div className="w-3xl h-14">
            <InputGroup className="w-full h-full">
                <InputGroupInput placeholder="Pesquisar produto..."/>
                <InputGroupAddon align="inline-end">
                    <InputGroupButton><Search/></InputGroupButton>
                </InputGroupAddon>
        </InputGroup>
        </div>
     );
}
 
export default SearchInput;