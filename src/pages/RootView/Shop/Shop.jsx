import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const Shop = () => {
  return (
    <div>
      <SidebarProvider>
      <AppSidebar />
      <main>
        <SidebarTrigger />
        {children}
      </main>
    </SidebarProvider>
      <Tabs defaultValue="account" className="">
        <TabsList className="">
          <TabsTrigger value="password">Password</TabsTrigger>
        </TabsList>
        <TabsContent value="account"></TabsContent>
      </Tabs>
    </div>
  );
};

export default Shop;
