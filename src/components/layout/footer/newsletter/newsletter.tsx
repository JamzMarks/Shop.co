import styles from './newsletter.module.scss';

function Newsletter(){
    return(
        <form id="newsLetterForm" className={styles.newsletter}>
            {/* className="newsletter section blackBackground alignLeft" */}
            <h3 className={styles.title}>Stay upto date about our latest offers</h3>
            <div className={styles.inputsContainer}>
                <input id="NLEmailInput" className="newsInput inputFields emailInput inputWhite" type="email" placeholder="Enter your email adress" required/>
                {/* className="newsInput inputFields emailInput inputWhite" */}
                <button className="newsBtn btns btnWhite2" type="submit">Subscribe to Newsletter</button>
            </div>
        </form>
    )
}

export default Newsletter;