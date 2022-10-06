import Function from "./Function";
import Information from "./Information";
import Recommend from "./Recommend";

function Content() {
    return (
        <>
            <div className="content">
                <div className="title">
                    <span id="name-position">Tòa nhà A</span>
                    <span id="category">Địa điểm</span>
                </div>
                <Function/>
                <Information/>
                <Recommend/>
            </div>
        </>
    )
}
export default Content;