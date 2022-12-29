import { ReactNode } from "react"

type Props = {
  children: ReactNode;
  onClick: (assignee: string) => void;
}

const Avatar = ({ children, onClick }: Props) => {

  return (
    <>
      <div style={{
        width: "30px",
        height: "30px",
        border: "1px solid gray",
        borderRadius: "50%",
        textAlign: "center",
        lineHeight: "30px",
        userSelect: "none"
      }} onClick={() => onClick(`${children}`)}>{children}</div>
    </>
  )
}

export default Avatar
