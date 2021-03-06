import * as React from "react"

interface Props {
  color: string;
  message: string;
}

export const ColoredMessage: React.VFC<Props> = ({ color, message }) => {
  const contentStyle = {
    color: color,
    fontSize: "20px",
  }

  return <p style={contentStyle}>{message}</p>
}
