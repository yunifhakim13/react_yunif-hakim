import { render, screen, fireEvent } from "@testing-library/react";
import CreateProduct from "./CreateProduct";
import { BrowserRouter } from "react-router-dom";

describe("CreateProduct", () => {
  it("test Product Name", () => {
    render(
      <BrowserRouter>
        <CreateProduct />
      </BrowserRouter>
    );

    const inputElement = screen.getByLabelText("Product Name");

    fireEvent.change(inputElement, { target: { value: "Test Product" } });

    expect(inputElement.value).toBe("Test Product");

    const displayedText = screen.getByLabelText("Product Name");

    expect(displayedText).toBeInTheDocument();
  });

  it("test Product Category", () => {
    render(
      <BrowserRouter>
        <CreateProduct />
      </BrowserRouter>
    );

    const categoryDropdown = screen.getByTestId("productSelect");

    fireEvent.change(categoryDropdown, { target: { value: "Bantal" } });

    expect(categoryDropdown).toBeInTheDocument();
  });
});

it("test validation", () => {
  render(
    <BrowserRouter>
      <CreateProduct />
    </BrowserRouter>
  );

  const productNameInput = screen.getByLabelText("Product Name");

  fireEvent.change(productNameInput, {
    target: { value: "This is a very long product name" },
  });

  expect(
    screen.getByText("Product Name must not exceed 25 characters.")
  ).toBeInTheDocument();
});

test("testing display error message for product name exceeding 10 characters", () => {
  render(
    <BrowserRouter>
      <CreateProduct />
    </BrowserRouter>
  );

  const productNameInput = screen.getByLabelText("Product Name");

  fireEvent.change(productNameInput, { target: { value: "LongName123" } });

  expect(
    screen.getByText("Product Name must not exceed 10 characters.")
  ).toBeInTheDocument();
});

test("testing should display error message for empty product name", () => {
  render(
    <BrowserRouter>
      <CreateProduct />
    </BrowserRouter>
  );

  const productNameInput = screen.getByLabelText("Product Name");

  fireEvent.change(productNameInput, { target: { value: "" } });

  expect(
    screen.getByText("Please enter a valid product name.")
  ).toBeInTheDocument();
});

test("should display error message for product name with symbols", () => {
  render(
    <BrowserRouter>
      <CreateProduct />
    </BrowserRouter>
  );

  const productNameInput = screen.getByLabelText("Product Name");

  fireEvent.change(productNameInput, { target: { value: "@Test#" } });

  expect(
    screen.getByText("Do not enter symbols or special characters.")
  ).toBeInTheDocument();
});

test("should not display any error message for valid product name", () => {
  render(
    <BrowserRouter>
      <CreateProduct />
    </BrowserRouter>
  );

  const productNameInput = screen.getByLabelText("Product Name");
  fireEvent.change(productNameInput, { target: { value: "Valid Product" } });

  expect(
    screen.queryByText("Product Name must not exceed 25 characters.")
  ).toBeNull();
  expect(
    screen.queryByText("Product Name must not exceed 10 characters.")
  ).toBeNull();
  expect(screen.queryByText("Please enter a valid product name.")).toBeNull();
  expect(
    screen.queryByText("Do not enter symbols or special characters.")
  ).toBeNull();
});
