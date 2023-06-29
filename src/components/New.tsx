
import Link from 'next/link'
import { New } from '../interfaces'
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import { formatDistanceToNow } from 'date-fns';

type NewProps = {
    newItem: New,
    gridSize?: number
}

export default function NewComponent({ newItem, gridSize }: NewProps) {
    // Format the date of the news item
    const publishedTime = formatDistanceToNow(new Date(newItem.publishedAt), { addSuffix: true });
    const limitedContent = newItem.content.substring(0, 100);

    return (
        <Grid item xs={gridSize}>
            <Link href="/news/[id]" as={`/news/${newItem.title}`}>
                <Grid container justifyContent="center">
                    <div
                        style={{
                            width: '100%',
                            height: 0,
                            paddingBottom: '100%',
                            position: 'relative'
                        }}
                    >
                        <img
                            src={newItem.urlToImage}
                            alt="newItem"
                            style={{
                                width: '100%',
                                height: '100%',
                                borderRadius: 12,
                                position: 'absolute',
                                objectFit: 'cover'
                            }}
                        />
                    </div>
                    <Grid container direction="row" alignItems="baseline" spacing={.5} >
                        <Grid item>
                            <Typography variant="caption">{newItem.source.name}</Typography>
                        </Grid>
                        <Grid item>
                            <Typography variant="caption">.{publishedTime}</Typography>
                        </Grid>
                    </Grid>
                    {/* <Typography variant="h6">{newItem.author}</Typography> */}
                    <Typography variant='h6' >{newItem.title}</Typography>
                    <Typography mt={2} variant='subtitle2' >{limitedContent}</Typography>
                </Grid>
            </Link>
        </Grid>

    )
}
