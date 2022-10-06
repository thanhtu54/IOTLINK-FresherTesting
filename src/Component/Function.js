import '../Style/Function.css';
function Function() {
    return (
        <>
            <div className="function">
                <div className="group-function">
                    <div className="wrapper">
                        <img src={require("../assets/directions.png")}></img>
                    </div>
                    <span className="icon-function">Chỉ đường</span>
                </div>
                <div className="group-function">
                    <div className="wrapper">
                        <img src={require("../assets/mask.png")}></img>
                    </div>
                    <span className="icon-function">Mã địa chỉ</span>
                </div>
                <div className="group-function">
                    <div className="wrapper">
                        <img src={require("../assets/share.png")}></img>
                    </div>
                    <span className="icon-function" >Chia sẻ</span>
                </div>
            </div>
        </>
    )
}
export default Function;