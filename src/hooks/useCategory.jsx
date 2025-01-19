import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "./useAxiosPublic";

const useCategory = () => {
    const axiosPublic = useAxiosPublic();
    const { data: categories=[], isPending,refetch } = useQuery({
      queryKey: "categories",
      queryFn: async () => {
        const res = await axiosPublic.get(`/category`);
        return res.data;
      },
    });
    return [categories, isPending,refetch];
}

export default useCategory