import React, { ReactNode } from "react";
import { Provider } from "react-redux";
import store from "../../store";
import { render } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";

const renderWithMockedProvider = (children: ReactNode) => {
  return render(
    <Provider store={store}>
      <BrowserRouter>{children}</BrowserRouter>
    </Provider>
  );
};

export default renderWithMockedProvider;
