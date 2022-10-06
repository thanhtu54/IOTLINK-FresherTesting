import Content from './Content';
import Search from './Search';
function Sidebar(props) {
    var isOpen = props.toggle;
    return (
        <>
            <div style={{ width: isOpen ? "100%" : "0px" }} className="sidebar">
                <Search/>
                <div className="background">
                    <img id="icon-image" src={require("../assets/image.png")}></img>
                </div>
                <Content/>
            </div>
        </>
    )
}
export default Sidebar;