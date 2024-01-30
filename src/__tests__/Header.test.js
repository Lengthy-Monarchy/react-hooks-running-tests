import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import React from "react";

import Header from "../components/Header";

function Header() {
  return (
    <div>
      hello from the Header!
    </div>
  );
}
export default Header;

  expect(screen.queryByText("hello from the Header!")).toBeInTheDocument();

