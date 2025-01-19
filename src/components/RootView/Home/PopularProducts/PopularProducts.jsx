import Container from "@/components/common/Container";
import useProduct from "@/hooks/useProduct";
import ShopItem from "../../common/ShopItem";

const PopularProducts = () => {
  const [products] = useProduct();
  const popularProduct = products.filter(
    (product) => product.isPopular === true
  );
  return (
    <Container className="">
      <h2 className="text-2xl font-bold text-center mb-6">Popular Services</h2>
      <div className="">
        <ShopItem item={popularProduct} />
      </div>
    </Container>
  );
};

export default PopularProducts;
