import ProductCartItem from "../../components/ui/productCart/productCart.component";
import { Size } from "../../types/size-type";
import globals from '../../assets/styles/globalStyles.module.css';
import styles from './cart.module.scss';
import Input from "../../components/common/input/input.component";
import Button from "../../components/common/button/button.component";
import { useState, useEffect } from "react";
import { getFromLocalStorage } from "../../services/localStorage";
import { ProductCart } from "../../types/product.interface";

function Cart(){
    const [retrievedData, setRetrievedData] = useState<ProductCart[] | []>([]);
    
    useEffect(() => {
        const storedValue = getFromLocalStorage();
        if (storedValue) {
            setRetrievedData(storedValue);
            
        }
    }, []);
    const [promo, setPromo] = useState('')

    return(
        <section>
            <div className={`${globals.container} ${styles.container}`}>
                <h1 className={styles.pageTitle}>Your Cart</h1>
                <div className={styles.content}>
                    <div className={styles.items}>
                        {retrievedData.map((element, index) => (
                            <ProductCartItem
                            key={index}
                            productBuy={element}
                            />
                        ))}
                    </div>
                    <div className={styles.buyInfo}>
                        <h2 className={styles.title}>Order Summary</h2>
                        <div className={styles.orderWrapper}>
                            <div className={styles.orderItem}>
                                <p>Subtotal</p>
                                <p className={styles.price}>$128</p> 
                            </div>
                            <div className={styles.orderItem}>
                                <p>Discount <span>(-percentage%)</span></p>
                                <p className={`${styles.price} ${styles.red}`}>-$128</p> 
                            </div>
                            <div className={styles.orderItem}>
                                <p>Delivery Fee</p>
                                <p className={styles.price}>$15</p> 
                            </div>
                            <div className={`${styles.orderItem} ${styles.total}`}>
                                <p>Total</p>
                                <p className={styles.price}>$15</p> 
                            </div>
                        </div>
                        <div className={styles.promoBtns}>
                                <Input
                                    inputStyle="gray"
                                    placeholder="Add promo code"
                                    required={false}
                                    inputIcon="promo"
                                    value={promo}
                                    onChange={(e: React.ChangeEvent<HTMLInputElement>) => setPromo(e.target.value)}
                                    type="text"
                                />
                                <Button
                                    type="button"
                                    text="Apply"
                                    btnStyle="black"
                                /> 
                        </div>
                        <Button
                            type="submit"
                            text="Go to checkout"
                            btnStyle="black"
                            />
                    </div>
                </div>
            </div>
            
        </section>
    )
}

export default Cart;