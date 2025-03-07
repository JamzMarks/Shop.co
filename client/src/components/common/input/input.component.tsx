import styles from './input.module.scss'

interface InputProps {
    placeholder: string;
    type: string;
    required: boolean;
    inputStyle: "white" | "black" | "gray";
    value: string;
    onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
    inputIcon?: "search" | "email" | "promo";
  }
  

function Input({ placeholder, type, required, inputStyle, inputIcon, value, onChange }: InputProps) {
    return(
        <input 
            placeholder={placeholder} 
            type={type}
            value={value}
            className={`
                ${styles.input} 
                ${styles[inputStyle]} 
                ${styles[inputIcon ? inputIcon : "basic"]} 
            `}
            required={required}
            onChange={onChange}
        />
    )
  // <input id="NLEmailInput" class="newsInput inputFields emailInput inputWhite" type="email" placeholder="Enter your email adress" required/>
}

export default Input;
