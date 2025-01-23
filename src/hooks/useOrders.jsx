import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "./useAxiosSecure";

const useOrders = () => {
  const axiosSecure = useAxiosSecure();
  const { data: allOrders = [], refetch } = useQuery({
    queryKey: ["allOrders"],
    queryFn: async () => {
      const res = await axiosSecure.get("/allOrders");
      return res.data;
    },
  });
  return [allOrders, refetch];
};

export default useOrders;
