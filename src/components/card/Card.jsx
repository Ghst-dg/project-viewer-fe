import { useContext } from "preact/hooks";
import { StoreData } from "../../app";

const Card = ({value}) => {
    const { setEnableModel, setModelData } = useContext(StoreData);

    const handleModel = () => {
        setEnableModel(true);
        setModelData(value);
        document.body.style.overflow = 'hidden';
    }

    return (
        <div className="Card" onClick={handleModel}>
            <span className="CardTitle">{value["Project.Title"]}</span>
            <div className="CardSub">
                <span className="CardSubTitle">Technology:</span>
                <span className="CardSubValue">{value["Project.Technologies"]}</span>
            </div>
            <div className="CardSub">
                <span className="CardSubTitle">Frontend:</span>
                <span className="CardSubValue">{value["Technical_Skillset.Frontend"]}</span>
            </div>
            <div className="CardSub">
                <span className="CardSubTitle">Backend:</span>
                <span className="CardSubValue">{value["Technical_Skillset.Backend"]}</span>
            </div>
            <div className="CardSub">
            <span className="CardSubTitle">Database:</span>
                <span className="CardSubValue">{value["Technical_Skillset.Databases"]}</span>
            </div>
            <div className="CardSub">
            <span className="CardSubTitle">Infra:</span>
                <span className="CardSubValue">{value["Technical_Skillset.Infrastructre"]}</span>
            </div>
        </div>
    )
}

export default Card;