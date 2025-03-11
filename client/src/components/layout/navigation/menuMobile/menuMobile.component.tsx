import ListLinks from "../links/listLinks.component";
import styles from './menuMobile.module.scss';

function MenuMobile(){
    return(
        <div className={styles.hamberguerMenu}>
        <button type="button" className={styles.displayNoneMobile} id="menuButton">
            <div className={styles.menuToggle}>
                <input type="checkbox" id="menuCheckbox" className={styles.menuCheckbox}/>
                <label htmlFor="menuCheckbox" className={styles.menuIcon}>
                    <span></span>
                    <span></span>
                    <span></span>
                </label>
                <ListLinks></ListLinks>
              </div>
        </button>
    </div>  
    )
}

export default MenuMobile;