import useAxiosSecure from '@/hooks/useAxiosSecure'
import { Wallet } from 'lucide-react'
import { useEffect, useState } from 'react';

const TotalRevenue = () => {
    const [totalRevenue, setTotalRevenue] = useState(0);
  const axiosSecure = useAxiosSecure();

  useEffect(() => {
    const fetchTotalRevenue = async () => {
      try {
        const response = await axiosSecure.get('/totalRevenue');
        setTotalRevenue(response.data.totalRevenue);
      } catch (error) {
        console.error("Error fetching total revenue", error);
      }
    };

    fetchTotalRevenue();
  }, [axiosSecure]);
  console.log(totalRevenue);

  return (
    <div className="bg-gradient-to-b from-green-300 to-green-200 border-b-4 border-green-600 rounded-lg shadow-xl p-5">
    <div className="flex flex-row items-center">
      <div className="flex-shrink pr-4">
        <div className="rounded-full p-5 bg-green-600">
          <Wallet />
        </div>
      </div>
      <div className="flex-1 text-right md:text-center">
        <h2 className="font-bold uppercase text-gray-600">
          Total Revenue
        </h2>
        <p className="font-bold text-3xl text-green-500">${totalRevenue.toLocaleString()} </p>
      </div>
    </div>
  </div>
  )
}

export default TotalRevenue