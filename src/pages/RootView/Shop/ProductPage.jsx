import { useParams } from "react-router-dom"

const ProductPage = () => {
    const { name } = useParams()
    console.log(name);
  return (
    <div>ProductPage</div>
  )
}

export default ProductPage