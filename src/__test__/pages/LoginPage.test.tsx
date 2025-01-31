import renderWithMockedProvider from "../utils/renderWithMockedProvider";
import { screen } from "@testing-library/react";
import LoginPage from "../../pages/LoginPage";
import userEvent from "@testing-library/user-event";
import * as router from "react-router";

describe("Login page", () => {
  it("should render the login component correctly", () => {
    renderWithMockedProvider(<LoginPage />);
    expect(screen.queryByPlaceholderText(/Email/i)).toBeInTheDocument();
    expect(screen.queryByPlaceholderText(/Password/i)).toBeInTheDocument();
    expect(screen.getByRole("button", { name: "Login" })).toBeInTheDocument();
    expect(screen.getByText(/Forgot your password?/i)).toBeInTheDocument();
  });

  it("should render top text correctly", () => {
    renderWithMockedProvider(<LoginPage />);
    expect(screen.getByText(/Already a Pawshake member?/i)).toBeInTheDocument();
    expect(screen.getByText(/Log in below!/i)).toBeInTheDocument();
  });

  it("should render strategy login button correctly", async () => {
    renderWithMockedProvider(<LoginPage />);
    const strategyItems = await screen.getAllByText(/Continue with/i);
    expect(strategyItems).toHaveLength(3);
  });

  it("should render bottom text correctly", () => {
    renderWithMockedProvider(<LoginPage />);
    expect(screen.getByText(/Not signed up on Pawshake yet?/i)).toBeInTheDocument();
    expect(screen.getByText(/Sign up/i)).toBeInTheDocument();
  });

  it("should link to sign up page correctly when click", async () => {
    const navigate = jest.fn();
    jest.spyOn(router, "useNavigate").mockImplementation(() => navigate);

    renderWithMockedProvider(<LoginPage />);

    const signUpLink = screen.getByText("Sign up");
    expect(signUpLink).toBeVisible();
    await userEvent.click(signUpLink);
    expect(navigate).toHaveBeenCalledWith("/register");
  });
});
