import { ProductCard } from "./ProductCard"
import styles from "./style.module.scss"

export const ProductList = ({ productList, setCartList }) => {
   return (
      <ul>
         {productList.map((product) => (
            <ProductCard key={product.id} product={product} setCartList={setCartList}/>
         ))}
      </ul>
   )
}
