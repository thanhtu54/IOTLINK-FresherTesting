import Sidebar from './Sidebar';
import '../Style/Index.css';
import { useState } from 'react';
import { IoCaretBackSharp, IoCaretForwardSharp } from 'react-icons/io5';
function Index(props) {
    function isTouch() {
        try {
            document.createEvent("TouchEvent");
            return true;
        } catch (e) {
            return false;
        }
    }
    const onMouseMove = (e) => {
        try {
            var x = !isTouch() ? e.pageX : e.touches[0].pageX;
            var y = !isTouch() ? e.pageY : e.touches[0].pageY;
        }
        catch (e) { };
        var box = document.getElementById('box');
        box.style.display = 'block';
        box.style.left = x + 5 + "px";
        box.style.top = y + 5 + "px";
        if (x > window.outerWidth - 305) {
            box.style.display = 'block';
            box.style.left = x - 300 - 5 + "px";
            box.style.top = y + 5 + "px";
        }
        if (y > window.outerHeight - 205) {
            box.style.display = 'block';
            box.style.left = x + 5 + "px";
            box.style.top = y - 200 - 5 + "px";
        }
        if (x > (window.outerWidth - 305) && y > (window.outerHeight - 205)) {
            box.style.display = 'block';
            box.style.left = x - 300 - 5 + "px";
            box.style.top = y - 200 - 5 + "px";
        }
        console.log(window.outerWidth);
    }
    const onMouseOut = () => {
        document.getElementById('box').style.display = 'none';
    }
    const [isOpen, setIsOpen] = useState(true);
    const toggle = () => {
        setIsOpen(!isOpen);
    }
    return (
        <>
            <div className="container">
                <Sidebar toggle={isOpen} />
                <div onMouseOver={onMouseMove} onMouseOut={onMouseOut} onMouseMove={onMouseMove} style={{ width: isOpen ? "100%-420px" : "100%", style: "overflow-hidden" }} className='icon-avatar'>
                    <div onClick={toggle} className="sidebar-button">
                        <i style={{ display: isOpen ? "block" : "none" }}><IoCaretBackSharp /></i>
                        <i style={{ display: isOpen ? "none" : "block" }}><IoCaretForwardSharp /></i>
                    </div>
                    <span>LXB</span>
                </div>
            </div>
            <div id='box'></div>
        </>
    )
}
export default Index;