import ProductCartItem from "../../components/ui/productCart/productCart.component";
import { Size } from "../../types/size-type";
import globals from '../../assets/styles/globalStyles.module.css';
import styles from './cart.module.scss';
import Input from "../../components/common/input/input.component";
import Button from "../../components/common/button/button.component";
import { useState } from "react";


function Cart(){

    const product = {
        id: 2,
        title: "SKINNY FIT JEANS",
        price: 240,
        image: "assets/images/products/shirt1.png",
        discount: 20,
        color: "#af3g4a",
        size: Size.Small
    }
    const [promo, setPromo] = useState('')
    return(
        <section>
            <div className={`${globals.container} ${styles.container}`}>
                <h1 className={styles.pageTitle}>Your Cart</h1>
                <div className={styles.content}>
                    <div className={styles.items}>
                        <ProductCartItem
                        product={product}
                        />
                        <ProductCartItem
                        product={product}
                        />
                        <ProductCartItem
                        product={product}
                        />
                        <ProductCartItem
                        product={product}
                        />
                        <ProductCartItem
                        product={product}
                        />
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