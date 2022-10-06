import '../Style/Information.css';
function Information() {
    return (
        <>
            <div className="information">
                <div className="list-information">
                    <img src={require("../assets/position.png")}></img>
                    <p id="address">63 Phan Đăng Lưu, Phường Thạch Thang, Quận Hải Châu, Thành phố Đà Nẵng</p>
                </div>
                <div className="list-information">
                    <img src={require("../assets/time.png")}></img>
                    <span className="date-start">Ngày bắt đầu:</span>
                    <span className="date">24/11/2000</span>
                </div>
                <div className="list-information">
                    <img src={require("../assets/time.png")}></img>
                    <span className="date-start">Ngày kết thúc:</span>
                    <span className="date">29/11/2099</span>
                </div>
                <div className="edit">
                    <img src={require("../assets/edit.jpg")}></img>
                    <span>Đề xuất chỉnh sửa</span>
                </div>
            </div>
        </>
    )
}
export default Information;