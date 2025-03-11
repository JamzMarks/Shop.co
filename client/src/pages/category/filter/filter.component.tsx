import { useState } from 'react';
import Button from '../../../components/common/button/button.component';
import { Size } from '../../../types/size-type';
import styles from './filter.module.scss';

const colors = ['green', 'red', 'blue', 'orange', 'lightblue', 'yellow', 'purple', 'pink' ,'white', 'black']
const dress = ['Casual', 'Formal', 'Party', 'Gym']
const category = ['T-Shirts', 'Shorts', 'Shirts', 'Hodie', 'Jeans']
function Filter(){
    const [value, setValue] = useState(500); 
    const min = 0;
    const max = 1000;

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setValue(Number(e.target.value));
    };
    return(
        
        <div className={styles.container}>
            <div className={styles.filters}>
                <div className={styles.title}>
                    <h2>Filters</h2>
                </div>
                <div>
                    <ul className={styles.list}>
                        {category.map((element, index) => (
                            <li key={index} className={styles.item}>{element}<span><img src='assets\images\icons\arrows\arrow-grey.svg'/></span></li>
                        ))}
                    </ul>
                </div>
                <div className={styles.priceWrapper}>
                    <h4 className={styles.title}>Price<span></span></h4>
                    
                    <div className="range-container">
                    <input
                        type="range"
                        min={min}
                        max={max}
                        value={value}
                        step="10"
                        onChange={handleChange}
                        style={{ background: `linear-gradient(to right, black ${(value / max) * 100}%, #F0F0F0 ${(value / max) * 100}%)` }}
                        />
                    <span className="range-value">${value}</span>
                    </div>
                </div>
                <div>
                    <h4 className={styles.title}>Colors<span></span></h4>
                    <div className={styles.colorWrapper}>
                        {colors.map((element, index) => (
                            <input key={index} type='checkbox' id={element} name="color"></input>
                        ))}
                    </div>
                    
                </div>
                <div className={styles.sizeWrapper}>
                    <h4 className={styles.title}>Size<span></span></h4>
                    <div className={styles.sizes}>
                        {Object.entries(Size).map(([key, value]) => (
                            <label key={key} htmlFor={key}>
                                <input type="checkbox" value={key} name="size"/>
                            {value}
                          </label>
                        ))}
                    </div>
                </div>
                <div>
                    <h4 className={styles.title}>Dress<span></span></h4>
                    <ul className={styles.list}>
                    {dress.map((element, index) => (
                        <li key={index} className={styles.item}>{element}<span><img src='assets\images\icons\arrows\arrow-grey.svg'/></span></li>
                    ))}
                    </ul>
                </div>
            </div>
            <Button
            text='Apply Filter'
            type='button'
            btnStyle='black2'

            ></Button>
        </div>
    )
}

export default Filter;