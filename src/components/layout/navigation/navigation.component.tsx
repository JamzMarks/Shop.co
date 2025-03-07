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
                            <ListLinks></ListLinks>
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