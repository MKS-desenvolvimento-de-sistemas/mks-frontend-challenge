import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import Footer from "../";
import renderer from "react-test-renderer";

describe("Footer Component", () => {
  it("should render the footer correctly", () => {
    render(<Footer />);

    const footer = screen.getByTestId("footer");

    expect(footer).toHaveTextContent(
      "MKS Sistemas © Todos os direitos reservados"
    );
  });

  it("should match the snapshot", () => {
    const tree = renderer.create(<Footer />).toJSON();

    expect(tree).toMatchSnapshot();
  });
});
