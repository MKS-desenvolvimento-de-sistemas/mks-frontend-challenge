import { render, waitFor } from "@testing-library/react";
import { mockProducts, withStore, withTheme } from "../../../test/utils";
import Home from "@/components/pages/Home/Home";
import mks from "@/integrations/mks";

it("should call api on mount", async () => {
  mks.fetchProducts = jest
    .fn()
    .mockReturnValueOnce(Promise.resolve(mockProducts));
  const { container } = render(withTheme(withStore(<Home />)));
  await waitFor(() => expect(mks.fetchProducts).toBeCalledTimes(1));
  expect(container).toMatchSnapshot();
});
