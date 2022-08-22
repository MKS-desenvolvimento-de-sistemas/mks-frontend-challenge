import { render } from "@testing-library/react";
import CartButton from "@/components/CartButton/CartButton";

it("CartButton should match snapshot", () => {
  const { container } = render(<CartButton />);
  expect(container).toMatchSnapshot();
});
