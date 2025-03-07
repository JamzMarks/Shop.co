import { useState } from 'react';
import Input from '../../../common/input/input.component';
import styles from './navButton.module.scss';
function NavButtons(){
    const [search, setSearch] = useState('')
    return(
        <div className={styles.container}>
            <div className={styles.searchBar}>
                <Input
                    placeholder='Search for products...'
                    type='text'
                    required={false}
                    inputIcon='search'
                    onChange={(e: React.ChangeEvent<HTMLInputElement>) => setSearch(e.target.value)}
                    value={search}
                    inputStyle='gray'
                />
            </div>
            <button type="button" className={`${styles.navBtn} ${styles.searchMobile}`}><img src="assets\images\icons\search\blackSearch.svg" alt="search"/></button>
            <button type="button" className={styles.navBtn}><img src="assets\images\icons\cart.svg" alt="cart"/></button>
            <button type="button" className={styles.navBtn}><img src="assets\images\icons\user.svg" alt="profile picture"/></button>
        </div>
    )

}

export default NavButtons;