import Container from "@/components/common/Container";
import useProduct from "@/hooks/useProduct";
import ShopItem from "../../common/ShopItem";
import ProductCardSkeleton from "../../common/ProductCardSkeleton";

const PopularProducts = () => {
  const [products, isLoading] = useProduct();
  const popularProduct = products.filter(
    (product) => product.isPopular === true
  );
  return (
    <Container className="">
      <h2 className="text-2xl font-bold text-center mb-6">🔥 Best Deals 🚀💰</h2>
      {isLoading ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {Array.from({ length: 8 }).map((_, index) => (
            <ProductCardSkeleton key={index} />
          ))}
        </div>
      ) : (
        <ShopItem item={popularProduct} />
      )}
    </Container>
  );
};

export default PopularProducts;
