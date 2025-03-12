import ListLinks from "../links/listLinks.component";
import styles from './menuMobile.module.scss';

function MenuMobile(){
    return(
        <div className={styles.hamberguerMenu}>
        <div className={styles.displayNoneMobile} id="menuButton">
            <div className={styles.menuToggle}>
                <input 
                type="checkbox" 
                id="menuCheckbox" 
                className={styles.menuCheckbox}
                aria-label="Menu toggle checkbox"/>
                <label htmlFor="menuCheckbox" className={styles.menuIcon}>
                    <span></span>
                    <span></span>
                    <span></span>
                </label>
                <ListLinks></ListLinks>
              </div>
        </div>
    </div>  
    )
}

export default MenuMobile;