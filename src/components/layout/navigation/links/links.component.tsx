// import styles from './links.module.css';

function ListLinks(){
    return(
        <ul className="navLinks">
            <li className="links"><a>Shop <span><img src="assets\images\icons\arrows\bottomArrow.svg" alt="bottomArrow"/></span> </a></li>
            <li className="links"><a>On Sale</a></li>
            <li className="links"><a>New Arrivals</a></li>
            <li className="links"><a>Brands</a></li>
        </ul>
    )
}

export default ListLinks