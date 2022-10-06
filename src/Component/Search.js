import '../Style/Search.css';
function Search() {
    return (
        <>
            <div  className="search">
                <img id="icon-menu" src={require("../assets/menu.jpg")}></img>
                <span id="name-search">Toà nhà A</span>
                <img id="icon-search" src={require("../assets/search.jpg")}></img>
                <img id="icon-clear" src={require("../assets/clear.jpg")}></img>
            </div>
        </>
    )
}
export default Search;