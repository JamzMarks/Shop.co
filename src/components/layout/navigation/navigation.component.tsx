import ListLinks from './links/listLinks.component';
import styles from './navigation.module.scss'

function Navigation(){
    return(
        <nav className={styles.navigation}>
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
            <ListLinks></ListLinks>
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