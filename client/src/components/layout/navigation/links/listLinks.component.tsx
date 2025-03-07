import styles from './listLinks.module.scss';

function ListLinks(){
    return(
        <ul className={styles.nav}>
            <li className={styles.link}><a>Shop <span><img src="assets\images\icons\arrows\bottomArrow.svg" alt="bottomArrow"/></span> </a></li>
            <li className={styles.link}><a>On Sale</a></li>
            <li className={styles.link}><a>New Arrivals</a></li>
            <li className={styles.link}><a>Brands</a></li>
        </ul>
    )
}

export default ListLinks