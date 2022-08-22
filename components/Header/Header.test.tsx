import { render } from "@testing-library/react";
import Home from "@/pages/index";
import { withTheme } from "../../test/utils";

it("Header should match snapshot", () => {
  const { container } = render(withTheme(<Home />));
  expect(container).toMatchSnapshot();
});
