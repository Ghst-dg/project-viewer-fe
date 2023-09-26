import { useContext } from "preact/hooks";
import { StoreData } from "../../app";

const Model = () => {
    const { setEnableModel, modelData } = useContext(StoreData);
    const handleModel = () => {
        setEnableModel(false);
        document.body.style.overflow = 'auto'
    }

    return (
        <div className="Model" onClick={handleModel}>
            <div className="ModelBox">
                <span className="ModelTitle">{modelData["Project.Title"]}</span>
                <div className="ModelSub">
                    <span className="ModelSubTitle">Technology:</span>
                    <span className="ModelSubValue">{modelData["Project.Technologies"]}</span>
                </div>
                <div className="ModelSub">
                    <span className="ModelSubTitle">Frontend:</span>
                    <span className="ModelSubValue">{modelData["Technical_Skillset.Frontend"]}</span>
                </div>
                <div className="ModelSub">
                    <span className="ModelSubTitle">Backend:</span>
                    <span className="ModelSubValue">{modelData["Technical_Skillset.Backend"]}</span>
                </div>
                <div className="ModelSub">
                <span className="ModelSubTitle">Database:</span>
                    <span className="ModelSubValue">{modelData["Technical_Skillset.Databases"]}</span>
                </div>
                <div className="ModelSub">
                <span className="ModelSubTitle">Infra:</span>
                    <span className="ModelSubValue">{modelData["Technical_Skillset.Infrastructre"]}</span>
                </div>
            </div>
        </div>
    )
}

export default Model;