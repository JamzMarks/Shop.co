import './newsletter.css';

function Newsletter(){
    return(
        <form id="newsLetterForm" className="newsletter section blackBackground alignLeft">
            <h3 className="newsletterTitle">Stay upto date about our latest offers</h3>
            <div className="inputsContainer">
                <input id="NLEmailInput" className="newsInput inputFields emailInput inputWhite" type="email" placeholder="Enter your email adress" required/>
                <button className="newsBtn btns btnWhite2" type="submit">Subscribe to Newsletter</button>
            </div>
        </form>
    )
}

export default Newsletter;