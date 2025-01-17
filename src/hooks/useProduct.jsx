import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "./useAxiosPublic";

const useProduct = () => {
  const axiosPublic = useAxiosPublic();
  const { data: product, isPending } = useQuery({
    queryKey: [product, "products"],
    queryFn: async () => {
      const res = await axiosPublic.get(`/products`);
      return res.data;
    },
  });
  return [product, isPending];
};

export default useProduct;
