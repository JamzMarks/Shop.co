import styles from './navButton.module.scss';
function NavButtons(){
    return(
        <div className={styles.container}>
            <div className={styles.searchBar}>
                <input type="text" placeholder="Search for products..." className="inputFields search"/>
            </div>
            <button type="button" className="navBtn searchMobile"><img src="assets\images\icons\search\blackSearch.svg" alt="search"/></button>
            <button type="button" className={styles.button}><img src="assets\images\icons\cart.svg" alt="cart"/></button>
            <button type="button" className={styles.button}><img src="assets\images\icons\user.svg" alt="profile picture"/></button>
        </div>
    )

}

export default NavButtons;