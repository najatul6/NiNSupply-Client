import Container from "@/components/common/Container"
import ShopItem from "@/components/RootView/common/ShopItem"
import useProduct from "@/hooks/useProduct";

const Subscription = () => {
  const [products] = useProduct();
  const subscriptionProduct = products.filter(
    (product) => product.category === "subscription"
  );
  return (
    <Container>
      <h2 className="text-2xl font-bold text-center mb-8">Subscriptions</h2>
      <ShopItem item={subscriptionProduct}/>
    </Container>
  )
}

export default Subscription