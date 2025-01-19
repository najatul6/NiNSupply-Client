import Container from "@/components/common/Container";
import useProduct from "@/hooks/useProduct";
import ShopItem from "../../Shop/ShopItem";

const PopularProducts = () => {
  const [products] = useProduct();
  const popularProduct = products.filter(
    (product) => product.isPopular === true
  );
  return (
    <Container>
      <div className="space-y-6 my-10">
        <h2 className="text-2xl font-bold text-center mb-6">
          Popular Products
        </h2>
        <ShopItem item={popularProduct} />
      </div>
    </Container>
  );
};

export default PopularProducts;
