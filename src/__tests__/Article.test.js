import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import React from "react";

import Article from "../components/Article";

const Article = () => {
  return (
    <div>
      please pass this test
    </div>
  );
}

export default Article;

  expect(screen.queryByText("please pass this test")).toBeInTheDocument();
