import { render } from "@testing-library/react";
import Products from "@/components/Products/Products";
import { mockProducts, withStore, withTheme } from "../../test/utils";

it("should render skeletons", () => {
  const { container } = render(withStore(<Products products={[]} loading />));
  expect(container).toMatchSnapshot();
});

it("should render given products", () => {
  const { container } = render(
    withTheme(withStore(<Products products={mockProducts} loading={false} />))
  );
  expect(container).toMatchSnapshot();
});
