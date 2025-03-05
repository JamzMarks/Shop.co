import './signMsg.css';

function SignMsg(){
    return(
        <section id="signMsg" className="signMsg blackBackground">
            <div className="wrapper container">
                <p className="msg">Sign up and get 20% off to your first order. <a className="sign">Sign Up Now</a></p>
                <button id="signMsgBtn" type="button" className="close"><img src="assets\images\icons\menu\close.svg"/></button>
            </div>
        </section>
    )
}

export default SignMsg;