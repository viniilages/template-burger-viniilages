import { MdDelete } from "react-icons/md"
import styles from "./style.module.scss"


export const CartItemCard = ({ product, cartList, setCartList}) => {

   return (
      <li className={styles.cardItem}>
         <div className={styles.img}>
            <img src={product.img} alt={product.name} />
         </div>
         <div className={styles.description}>
            <h3>{product.name}</h3>
            <span>{product.price.toLocaleString('pt-BR', { style: "currency", currency: "BRL" })}</span>
         </div>
         <button className={styles.button} onClick={() => { setCartList(cartList.filter(e => e !== product))
         localStorage.setItem("@cartList", JSON.stringify([...cartList.filter(e => e !== product)]))}} aria-label="delete" title="Remover item">
            <MdDelete size={21} />
         </button>
      </li>
   )
}
