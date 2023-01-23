import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import Link from "../";
import renderer from "react-test-renderer";

describe("Link Component", () => {
  it("should render the link correctly, with target _self by default", () => {
    render(
      <Link href="/" title="TESTE">
        TESTE
      </Link>
    );

    const link = screen.getByTestId("link");

    expect(link).toHaveTextContent("TESTE");
    expect(link.getAttribute("href")).toEqual("/");
    expect(link.getAttribute("title")).toEqual("TESTE");
    expect(link.getAttribute("target")).toEqual("_self");
  });

  it("should render the link correctly, with target set by props", () => {
    render(
      <Link href="/" title="BLANK-TESTE" target="blank">
        BLANK-TESTE
      </Link>
    );

    const link = screen.getByTestId("link");

    expect(link).toHaveTextContent("BLANK-TESTE");
    expect(link.getAttribute("href")).toEqual("/");
    expect(link.getAttribute("title")).toEqual("BLANK-TESTE");
    expect(link.getAttribute("target")).toEqual("_blank");
  });

  it("should match the snapshot - target default", () => {
    const tree = renderer
      .create(
        <Link href="/" title="TESTE">
          TESTE
        </Link>
      )
      .toJSON();

    expect(tree).toMatchSnapshot();
  });

  it("should match the snapshot - set target", () => {
    const tree = renderer
      .create(
        <Link href="/" title="BLANK-TESTE" target="blank">
          BLANK-TESTE
        </Link>
      )
      .toJSON();

    expect(tree).toMatchSnapshot();
  });
});
