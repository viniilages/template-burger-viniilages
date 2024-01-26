import { useEffect, useState } from "react"
import { CartModal } from "../../components/CartModal"
import { Header } from "../../components/Header"
import { ProductList } from "../../components/ProductList"
import { api } from "../../services/api"
import "./style.module.scss"

export const HomePage = () => {
   const [productList, setProductList] = useState([])
   const [cartList, setCartList] = useState([])
   const [loading, setLoading] = useState(false)
   const [cartModal, setCartModal] = useState(false)

   useEffect(() => {
      {localStorage.getItem("@cartList") ? setCartList(JSON.parse(localStorage.getItem("@cartList"))) : null}
      const getProductsList = async () => {
         try {
            setLoading(true)
            const { data } = await api.get("")
            setProductList(data)
         } catch (error) {
            console.log(error)
         }finally{
            setLoading(false)
         }
      }
      getProductsList()
   }, [])

   return (
      <>
         <Header setCartModal={setCartModal} cartList={cartList}/>
         <main>
            {loading ? <h1>Carregando...</h1> : <ProductList productList={productList} setCartList={setCartList}/>}
            {cartModal ? <CartModal cartList={cartList} setCartList={setCartList} setCartModal={setCartModal}/> : null}
         </main>
      </>
   )
}
