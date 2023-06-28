import useSWR from 'swr'
import NewComponent from '../../components/New'
import { New } from '../../interfaces'

const fetcher = (url: string) => fetch(url).then((res) => res.json())

export default function News() {
  const { data, error } = useSWR('/api/news', fetcher);

  if (error) return <div>Failed to load</div>
  if (!data) return <div>Loading...</div>

  return (
    <div>
      <h2>News</h2>
      <ul>
        {data.map((p: New, i:number) => (
          <NewComponent key={i} newItem={p} />
        ))}
      </ul>
    </div>
  )
}
