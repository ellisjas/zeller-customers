import { useQuery } from "@apollo/client";
import { ListZellerCustomers } from "../queries";

const useListZellerCustomers = (role: string) => {
  return useQuery(ListZellerCustomers, {
    variables: {
      filter: {
        role: {
          eq: role,
        },
      },
    },
  })
}

export default useListZellerCustomers;