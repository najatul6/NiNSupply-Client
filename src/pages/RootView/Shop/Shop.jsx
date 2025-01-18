import Container from "@/components/common/Container"
import ShopSidebar from "@/components/RootView/common/ShopSidebar"

const Shop = () => {
  return (
    <Container>
      <div className="flex min-h-screen w-full">
        {/* Sidebar */}
        <ShopSidebar/>
        <div className="flex flex-1 flex-col"></div>
      </div>
    </Container>
  )
}

export default Shop