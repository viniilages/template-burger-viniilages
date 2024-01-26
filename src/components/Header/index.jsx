import Logo from "../../assets/Logo.svg"
import { MdShoppingCart } from "react-icons/md"
import styles from "./style.module.scss"

export const Header = ({cartList,setCartModal}) => {
   
   return (
      <header className={styles.header}>
         <img src={Logo} alt="Logo Kenzie Burguer" />
         <div>
            <button onClick={() => {setCartModal(true)}}>
                <MdShoppingCart size={21} />
                <span>{cartList.length}</span>
            </button>
         </div>
      </header>
   )
}
