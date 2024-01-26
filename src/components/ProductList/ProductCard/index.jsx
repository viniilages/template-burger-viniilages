import { toast } from "react-toastify"
import styles from "./style.module.scss"

export const ProductCard = ({ product, setCartList }) => {
    const addToCart = (product) => {
        setCartList(prevCartList => {
            if (prevCartList.includes(product)) {
                toast("Item já adicionado ao carrinho")
                return prevCartList
            } 
            else {
                const updatedCartList = [...prevCartList, product]
                localStorage.setItem("@cartList", JSON.stringify(updatedCartList))
                return updatedCartList
            }
        })
    }

    return (
        <li className={styles.productCard}>
            <div className={styles.div}><img src={product.img} alt={product.name} /></div>
            <div className={styles.div2}>
                <h3>{product.name}</h3>
                <span className={styles.category}>{product.category}</span>
                <span className={styles.price}>{product.price.toLocaleString('pt-BR', { style: "currency", currency: "BRL" })}</span>
                <button onClick={(e) => {
                    e.preventDefault()
                    addToCart(product)
                }}>Adicionar</button>
            </div>
        </li>
    )
}
