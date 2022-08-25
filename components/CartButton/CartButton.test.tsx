import { render } from "@testing-library/react";
import CartButton from "@/components/CartButton/CartButton";
import { withStore } from "../../test/utils";

it("CartButton should match snapshot", () => {
  const { container } = render(withStore(<CartButton />));
  expect(container).toMatchSnapshot();
});
