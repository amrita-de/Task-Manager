import { render, screen, fireEvent } from "@testing-library/react";
import AddExpenseForm from "./AddExpenseForm";

test("submits the form with entered values", () => {
  render(<AddExpenseForm onSubmit={jest.fn()} />);

  const inputElement = screen.getByPlaceholderText("Enter expense name");
  fireEvent.change(inputElement, { target: { value: "Groceries" } });

  const buttonElement = screen.getByText("Add Expense");
  fireEvent.click(buttonElement);

  expect(inputElement.value).toBe("Groceries");
});
