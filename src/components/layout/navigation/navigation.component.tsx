import ListLinks from './links/listLinks.component';
import NavButtons from './navButton/navButton.component';
import styles from './navigation.module.scss'
import globals from '../../../assets/styles/globalStyles.module.css';

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
                <h1 className={globals.logo}>Shop.co</h1>
            </div>
            <ListLinks></ListLinks>
            <NavButtons></NavButtons>
        </nav>
    )
}

export default Navigation;