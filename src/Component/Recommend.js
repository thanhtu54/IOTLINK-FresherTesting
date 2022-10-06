import '../Style/Recommend.css';
function Recommend() {
    return (
        <>
            <div className="recommend">
                <div>
                    <img src={require("../assets/avatar.png")}></img>
                    <p className="title-recommend">Công Ty Cổ Phần Đầu Tư Và Phát Triển Đô Thị Vạn Thịnh Phát</p>
                    <p className="content-recommend">Số 63 Lê Thanh Nghị, Phường Hòa Cường Bắc, Quận Hải Châu, Thành phố Đà Nẵng, Việt Nam</p>
                </div>
                <div>
                    <img src={require("../assets/avatar.png")}></img>
                    <p className="title-recommend">Nam Long Telecom Đà Nẵng</p>
                    <p className="content-recommend">Số 63 Lê Thanh Nghị, Phường Hòa Cường Bắc, Quận Hải Châu, Thành phố Đà Nẵng, Việt Nam</p>
                </div>
                <div>
                    <img src={require("../assets/avatar.png")}></img>
                    <p className="title-recommend">Công ty A</p>
                    <p className="content-recommend">Số 63 Lê Thanh Nghị, Phường Hòa Cường Bắc, Quận Hải Châu, Thành phố Đà Nẵng, Việt Nam</p>
                </div>
                <div>
                    <img src={require("../assets/avatar.png")}></img>
                    <p className="title-recommend">Công ty B</p>
                    <p className="content-recommend">Số 63 Lê Thanh Nghị, Phường Hòa Cường Bắc, Quận Hải Châu, Thành phố Đà Nẵng, Việt Nam</p>
                </div>
            </div>
        </>
    )
}
export default Recommend;