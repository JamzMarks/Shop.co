import ListLinks from "../links/listLinks.component";
import styles from './menuMobile.module.scss';

function MenuMobile(){
    return(
        <div className="hamburguerMenu">
        <button type="button" className="displayNoneMobile" id="menuButton">
            <div className="menuToggle">
                <input type="checkbox" id="menuCheckbox"/>
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