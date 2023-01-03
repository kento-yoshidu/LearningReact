import { useQuery } from "@tanstack/react-query"
import axios from "axios"
import { createExportDefault } from "typescript"

type Album = {
  userId: number
  id: number
  title: string
}

const fetchAlbums = async () => {
  const result = await axios.get<Album[]>('https://jsonplaceholder.typicode.com/albums')

  return result.data
}

const ReactQuery = () => {
  const { data } = useQuery<Album[]>(['albums'], fetchAlbums)

  return (
    <>
      <h1>hoge</h1>

      {data?.map((album) => (
        <p key={album.id}>{album.title}</p>
      ))}
    </>
  )
}

export default ReactQuery
