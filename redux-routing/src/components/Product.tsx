import { useEffect, useState } from "react"
import {fetchProducts} from "../api/fetchData"
import ProductCard from "./ProductCard"

export default function Product() {
  const [products, setProducts] = useState<any[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const loadProducts = async () => {
      try {
        const data = await fetchProducts()
        console.log(data);
        
        setProducts(data)
      } catch (error) {
        console.error(error)
      } finally {
        setLoading(false)
      }
    }

    loadProducts()
  }, [])

  if (loading) return <p>Loading...</p>

  return (
    <div style={{display:"flex",flexWrap:"wrap",justifyContent:"space-around"}}>
      {products && products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  )
}
