import { render } from "@testing-library/react";
import { withStore, withTheme } from "../../test/utils";
import Header from "@/components/Header/Header";

it("Header should match snapshot", () => {
  const { container } = render(
    withTheme(withStore(<Header onOpenCart={jest.fn} />))
  );
  expect(container).toMatchSnapshot();
});
