import React from "react";
import { render, screen } from '@testing-library/react';

import { Component } from "./component";

describe("<Component />", () => {
  test("rendered text", () => {
    render(<Component />);
    expect(screen.getByText("sample component")).toBeDefined();
  });
});