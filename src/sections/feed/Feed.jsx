import { useContext } from "preact/hooks";
import Card from "../../components/card/Card";
import {StoreData} from '../../app'

const Feed = () => {
    const {filteredData} = useContext(StoreData)
    const dataArray = Object.values(filteredData);
    return (
        <main>
            {dataArray.map((data, index) => (
                <Card key = {index} value={data}/>
            ))}
        </main>
    )
}

export default Feed;