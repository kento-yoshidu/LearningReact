import * as React from "react"

interface Props {
  children: React.ReactElement
}

const CC: React.VFC<Props> = ({ children }) => (
  <p>{children}</p>
)

export default CC

// https://maku.blog/p/xenv4bh/