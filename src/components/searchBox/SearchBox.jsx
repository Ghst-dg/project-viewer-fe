import { useContext } from "preact/hooks";
import {BiSearch} from "react-icons/bi"
import { StoreData } from "../../app";

const SearchBox = () => {
    const {setSearchQuery} = useContext(StoreData)

    const handleInputChange = (e) => {
        const searchQuery = e.target.value;
        setSearchQuery(searchQuery);
    };

    return(
        <div className="SearchBox">
            <input type="search" className="SearchInput" onChange={handleInputChange}/>
            <button className="SearchBtn"><BiSearch/></button>
        </div>
    )
}

export default SearchBox;