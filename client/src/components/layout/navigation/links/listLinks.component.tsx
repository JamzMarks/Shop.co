import { Link } from 'react-router-dom';
import styles from './listLinks.module.scss';

function ListLinks(){
    return(
        <ul className={styles.nav}>
            <li className={styles.link}><Link to={'/category'}>Shop <span><img src="assets\images\icons\arrows\bottomArrow.svg" alt="bottomArrow"/></span> </Link></li>
            <li className={styles.link}><Link to={'/category'}>On Sale</Link></li>
            <li className={styles.link}><Link to={'/category'}>New Arrivals</Link></li>
            <li className={styles.link}><a>Brands</a></li>
        </ul>
    )
}

export default ListLinks