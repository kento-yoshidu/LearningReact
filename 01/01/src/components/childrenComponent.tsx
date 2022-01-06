import * as React from "react"

interface Props {
  children: React.ReactElement
}

export const CC: React.VFC<Props> = ({ children }) => (
  <p>{children}</p>
)
