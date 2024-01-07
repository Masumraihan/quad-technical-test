import axios from "axios";
import { toast } from "sonner";

export const getProductsData = async () => {
  try {
    const res = await axios.get(
      "http://www.api.technicaltest.quadtheoryltd.com/api/Item?page=1&pageSize=10",
    );
    //const result = await res.json();
    return await res.data;
  } catch (error) {
    toast.error("Failed to fetch products");
  }
};
