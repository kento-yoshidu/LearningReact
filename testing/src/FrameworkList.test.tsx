import React from "react";
import { render, screen } from "@testing-library/react"

import FrameworkList from "./FrameworkList"

describe('Rendering the list with props', () => {
  it("Should render No data ! when no data props", () => {
    render(<FrameworkList />)
    expect(screen.getByText("No data !")).toBeInTheDocument()
  }) 

  it("Should render list item correctly", () => {
    const dummyData = [
      { id: 1, item: "React dummy" },
      { id: 2, item: "Rust dummy" },
      { id: 3, item: "AWS dummy"}
    ]

    render(<FrameworkList frameworks={dummyData} />)

    const frameworkItems = screen
      .getAllByRole("listitem")
      .map((ele) => ele.textContent)

    const dummyItems = dummyData.map((data) => data.item)

    expect(frameworkItems).toEqual(dummyItems);
    expect(screen.queryByText("No data !")).toBeNull()
  })

})

