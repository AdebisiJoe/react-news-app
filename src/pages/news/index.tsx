import useSWR from 'swr'
import NewComponent from '../../components/New'
import { New } from '../../interfaces'
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';

const fetcher = (url: string) => fetch(url).then((res) => res.json())

export default function News() {
  const { data, error } = useSWR('/api/news', fetcher);

  if (error) return <div>Failed to load</div>
  if (!data) return <div>Loading...</div>

  return (
    <div>
      <h2>News</h2>
      <Box sx={{ flexGrow: 1 }}>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <NewComponent newItem={data[0]} gridSize={6} />
          </Grid>
          {data.slice(1).map((p: New, i: number) => (
           
              <NewComponent newItem={p} gridSize={3} />
           
          ))}
        </Grid>
      </Box>
    </div>
  )
}
