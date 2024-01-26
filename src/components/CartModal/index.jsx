import { MdClose } from "react-icons/md"
import { CartItemCard } from "./CartItemCard"
import styles from "./style.module.scss"
import { useEffect, useRef } from "react"

export const CartModal = ({ cartList, setCartList, setCartModal}) => {
   const total = cartList.reduce((prevValue, product) => {
      return prevValue + product.price
   }, 0)

   const modalRef = useRef(null)

   useEffect(() => {
      const clickOutModal = (e) => {
         if(modalRef.current === e.target){
            setCartModal(false)
            console.log(e.target)
         }
      }
      window.addEventListener("mousedown", clickOutModal)
      return () => {window.removeEventListener("mousedown", clickOutModal)}
   }, [])


   const ButtonRef = useRef(null)
   useEffect(() => {
      const handleEscape = (e) => {
         if(e.key === "Escape"){
            ButtonRef.current?.click()
         }
      }
      window.addEventListener("keydown", handleEscape)
      return () => {
         window.removeEventListener("keydown", handleEscape)
      }
   }, [])

   return (
      <div ref={modalRef}  className={styles.modalOverlay} role="dialog">
         <div className={styles.modalBox}>
            <h2>Carrinho de compras</h2>
            <button ref={ButtonRef} onClick={() => { setCartModal(false) }} aria-label="close" title="Fechar">
               <MdClose size={21} />
            </button>
         </div>
         <div className={styles.cartList}>
            <ul>
               {cartList.map((product) => (
                  <CartItemCard key={product.id} product={product} cartList={cartList} setCartList={setCartList} />
               ))}
            </ul>
         </div>

         <div className={styles.modalTotalRemove}>
            <div>
               <h4>Total</h4>
               <span>{total.toLocaleString('pt-BR', { style: "currency", currency: "BRL" })}</span>
            </div>
            <button onClick={() => { setCartList([]), localStorage.removeItem("@cartList")}}>Remover todos</button>
         </div>
      </div>
   )
}
