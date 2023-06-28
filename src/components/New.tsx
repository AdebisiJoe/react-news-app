import Link from 'next/link'
import { New } from '../interfaces'
import Grid from '@mui/material/Unstable_Grid2';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Unstable_Grid2';

type NewProps = {
    newItem: New
}

export default function NewComponent({ newItem }: NewProps) {

  return (
    <li>
      <Link href="/news/[id]" as={`/news/${newItem.title}`}>
        {newItem.title} 
      </Link>
    </li>

  )
}
