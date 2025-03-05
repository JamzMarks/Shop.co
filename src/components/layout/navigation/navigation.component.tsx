import './navigation.css'

function Navigation(){
    return(
        <nav className="navigation">
            <div className="logo-container">
                <div className="hamburguerMenu">
                    <button type="button" className="displayNoneMobile" id="menuButton">
                        <div className="menuToggle">
                            <input type="checkbox" id="menuCheckbox"/>
                            <label htmlFor="menuCheckbox" className="menuIcon">
                                <span></span>
                                <span></span>
                                <span></span>
                            </label>
                            <ul className="menuMobile">
                              <li className="links"><a href="/shop">Shop</a></li>
                              <li className="links"><a href="/onsale">On Sale </a></li>
                              <li className="links"><a href="/news">New Arrivals</a></li>
                              <li className="links"><a href="/brands">Brands</a></li>
                            </ul>
                          </div>
                    </button>
                </div>
                <h1 className="logo">Shop.co</h1>
            </div>
            <ul className="navLinks">
                <li className="links"><a>Shop <span><img src="assets\images\icons\arrows\bottomArrow.svg" alt="bottomArrow"/></span> </a></li>
                <li className="links"><a>On Sale</a></li>
                <li className="links"><a>New Arrivals</a></li>
                <li className="links"><a>Brands</a></li>
            </ul>
            <div className="navBtns">
                <div className="searchBar">
                    <input type="text" placeholder="Search for products..." className="inputFields search"/>
                </div>
                <button type="button" className="navBtn searchMobile"><img src="assets\images\icons\search\blackSearch.svg" alt="search"/></button>
                <button type="button" className="navBtn"><img src="assets\images\icons\cart.svg" alt="cart"/></button>
                <button type="button" className="navBtn"><img src="assets\images\icons\user.svg" alt="profile picture"/></button>
            </div>
        </nav>
    )
}

export default Navigation;