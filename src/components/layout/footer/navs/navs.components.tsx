import styles from './navs.module.css';
import globals from '../../../../assets/styles/globalStyles.module.css';
function Navs() {
  return (
    <section className={styles.container} >
        {/* bottomDivision */}
      <div className={styles.navContainer}>
        <div className={styles.wrapperLogo}>
          <p className={globals.logo}>Shop.co</p>
          <p className={styles.slogan}>
            We have clothes that sui    ts your style and which you’re proud to
            wear. From women to men.
          </p>
        </div>
        <div className="socials">
          <ul className="socialsList">
            <li className="socialsBack">
              <a href="twitter.com">
                <img
                  src="assets\images\icons\socials\twitter.svg"
                  alt="twitter"
                />
              </a>
            </li>
            <li className="socialsBack">
              <a href="facebook.com">
                <img
                  src="assets\images\icons\socials\facebook.svg"
                  alt="facebook"
                />
              </a>
            </li>
            <li className="socialsBack">
              <a href="instagram.com">
                <img
                  src="assets\images\icons\socials\instagram.svg"
                  alt="instagram"
                />
              </a>
            </li>
            <li className="socialsBack">
              <a href="github.com">
                <img
                  src="assets\images\icons\socials\github.svg"
                  alt="Github"
                />
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="linksContainer">
        <div className="linkItem">
          <p className="title">Company</p>
          <ul className="linkList">
            <li className="link">
              <a href="/about">About</a>
            </li>
            <li className="link">
              <a href="/features">Features</a>
            </li>
            <li className="link">
              <a href="/works">Works</a>
            </li>
            <li className="link">
              <a href="/carrer">Carrer</a>
            </li>
          </ul>
        </div>
        <div className="linkItem">
          <p className="title">Help</p>
          <ul className="linkList">
            <li className="link">
              <a href="/support">Customer Support</a>
            </li>
            <li className="link">
              <a href="/delivery">Delivery Details</a>
            </li>
            <li className="link">
              <a href="/terms">Terms & Conditions</a>{" "}
            </li>
            <li className="link">
              <a href="/privacy">Privacy Policy</a>
            </li>
          </ul>
        </div>
        <div className="linkItem">
          <p className="title">FAQ</p>
          <ul className="linkList">
            <li className="link">
              <a href="/account">Account</a>
            </li>
            <li className="link">
              <a href="/manage">Manage Deliveries</a>
            </li>
            <li className="link">
              <a href="/orders">Orders</a>
            </li>
            <li className="link">
              <a href="/payments">Payments</a>
            </li>
          </ul>
        </div>
        <div className="linkItem">
          <p className="title">Resources</p>
          <ul className="linkList">
            <li className="link">
              <a href="ebooks/free">Free eBooks</a>
            </li>
            <li className="link">
              <a href="tutorial-development">Development Tutorial</a>
            </li>
            <li className="link">
              <a href="blog/howto">How to - Blog</a>
            </li>
            <li className="link">
              <a href="youtube.com/playlist">Youtube Playlist</a>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}
export default Navs;
