import Container from "@/components/common/Container";
import ProductCardSkeleton from "@/components/RootView/common/ProductCardSkeleton";
import ShopItem from "@/components/RootView/common/ShopItem";
import useProduct from "@/hooks/useProduct";

const Subscription = () => {
  const [products, isLoading] = useProduct();
  const subscriptionProduct = products.filter(
    (product) => product.category === "subscription"
  );
  return (
    <Container>
      <h2 className="text-2xl font-bold text-center mb-8">Subscriptions</h2>
      {isLoading ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {Array.from({ length: 8 }).map((_, index) => (
            <ProductCardSkeleton key={index} />
          ))}
        </div>
      ) : (
        <ShopItem item={subscriptionProduct} />
      )}
    </Container>
  );
};

export default Subscription;
