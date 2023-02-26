import { cleanup, render, screen } from "@testing-library/react"
import userEvent from "@testing-library/user-event"

import { rest } from "msw"
import { setupServer } from "msw/node"

import MockServer from "./MockServer" 

import '@testing-library/jest-dom/extend-expect'

const server = setupServer(
  rest.get('https://jsonplaceholder.typicode.com/users/1', (req, res, ctx) => {
    return res(ctx.status(200), ctx.json({ username: "Bred dummy" }))
  })
)

beforeAll(() => server.listen())
afterEach(() => {
  server.resetHandlers()
  cleanup()
})
afterAll(() => server.close())

describe('Mocking API', () => {
  it("[Fetch success]Should display fetched data correctly and button disable", async () => {
    render(<MockServer />)
    userEvent.click(screen.getByRole("button"))
    expect(await screen.findByRole("heading")).toHaveTextContent("Bred dummy")

    expect(screen.getByRole("button")).toHaveAttribute("disabled")
  })
})
