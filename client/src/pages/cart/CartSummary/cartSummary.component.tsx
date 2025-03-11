import { useState } from 'react';
import Button from '../../../components/common/button/button.component';
import Input from '../../../components/common/input/input.component';
import styles from '../cart.module.scss';

function CartSummary(){
    const [promo, setPromo] = useState('')
    return(
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
    )
}

export default CartSummary;