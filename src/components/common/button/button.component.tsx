import styles from './button.module.scss';

interface Button{
    type: "submit" | "reset" | "button" | undefined,
    text: string,
    btnStyle: "white" | "black" | "white2",
    onClick?: () => void;

}

function Button({type, text, btnStyle, onClick}: Button){
    return(
        <button
        type={type}
        className={`${styles.btn} ${styles[btnStyle]}`} 
        onClick={onClick}
        >
            {text}
        </button>
    )
}

export default Button;