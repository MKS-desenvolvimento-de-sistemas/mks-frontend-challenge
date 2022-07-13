import { allProd } from "./actions";
import { api } from "../../../services/Api";

export const allProdThunk =
  (setIsLoading: (arg0: boolean) => void) => (dispatch: any) => {
    setIsLoading(true);
    api
      .get("/products?page=1&rows=10&sortBy=id&orderBy=ASC")
      .then((response) => {
        dispatch(allProd(response.data.products));
        setIsLoading(false);
      })
      .catch((error) => {
        setIsLoading(false);
      });
  };
