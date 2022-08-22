import { render } from "@testing-library/react";
import { withTheme } from "../../test/utils";
import Header from "@/components/Header/Header";

it("Header should match snapshot", () => {
  const { container } = render(withTheme(<Header />));
  expect(container).toMatchSnapshot();
});
