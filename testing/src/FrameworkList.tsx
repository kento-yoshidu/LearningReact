import React from 'react'

type Data = {
  id: number,
  item: string
}

type Props = {
  frameworks?: Data[]
}

const FrameworkList = ({ frameworks }: Props) => {
  if (!frameworks || ! frameworks.length) {
    return <h1>No data !</h1>
  }

  return (
    <div>
      <ul>
        {frameworks.map(({ id, item }) => (
          <li key={id}>{item}</li>
        ))}
      </ul>
    </div>
  )
}

export default FrameworkList
