import { render } from "@testing-library/react";
import Products from "@/components/Products/Products";
import { mockProducts, withTheme } from "../../test/utils";

it("should render skeletons", () => {
  const { container } = render(<Products products={[]} loading />);
  expect(container).toMatchSnapshot();
});

it("should render given products", () => {
  const { container } = render(
    withTheme(<Products products={mockProducts} loading={false} />)
  );
  expect(container).toMatchSnapshot();
});
