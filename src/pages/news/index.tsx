import useSWR from 'swr'
import NewComponent from '../../components/New'
import { New } from '../../interfaces'
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Link from 'next/link';
import Typography from '@mui/material/Typography';
import { formatDistanceToNow } from 'date-fns';

const fetcher = (url: string) => fetch(url).then((res) => res.json())

export default function News() {
    const { data, error } = useSWR('/api/news', fetcher);

    if (error) return <div>Failed to load</div>
    if (!data) return <div>Loading...</div>
    
    let firstNews = data[0];
    let publishedTime = formatDistanceToNow(new Date(firstNews.publishedAt), { addSuffix: true });
    let limitedContent = firstNews.content.substring(0, 200);

    return (
        <div>
            

            <Grid container xs={12} direction="row" spacing={2} mt={3} mb={3} ml={0.5}>
                <Link href="/news/[id]" as={`/news/${data[0].title}`} style={{ display: 'flex', justifyContent: 'space-evenly' }}>
                    <Grid item xs={3} mr={3}>
                        <div
                            style={{
                                width: '100%',
                                height: 0,
                                paddingBottom: '100%',
                                position: 'relative',
                            }}
                        >
                            <img
                                src={data[0].urlToImage}
                                alt="newItem"
                                style={{
                                    width: '100%',
                                    height: '100%',
                                    borderRadius: 12,
                                    position: 'absolute',
                                    objectFit: 'cover',
                                }}
                            />
                        </div>
                    </Grid>
                    <Grid item xs={9}>
                        <Grid container direction="column" alignItems="baseline" spacing={0.5}>
                            <Grid container direction="row" alignItems="baseline" spacing={0.5}>
                                <Grid item>
                                    <Typography variant="caption">{data[0].source.name}</Typography>
                                </Grid>
                                <Grid item>
                                    <Typography variant="caption">.{publishedTime}</Typography>
                                </Grid>
                            </Grid>
                            <Typography variant="h6">{data[0].title}</Typography>
                            <Typography mt={2} variant="subtitle2">{limitedContent}</Typography>
                        </Grid>
                    </Grid>

                </Link>
            </Grid>


            <Box sx={{ flexGrow: 1 }} mt={2}>
            <h2>Latest news</h2>
                <Grid container spacing={2} mt={2}>
                    {data.slice(1).map((p: New, i: number) => (
                        <NewComponent newItem={p} gridSize={3} />
                    ))}
                </Grid>
            </Box>
        </div>
    )
}
