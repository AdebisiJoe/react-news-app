import { NextApiResponse, NextApiRequest } from 'next';
import { news } from '../../../data';
import { New } from '../../../interfaces';

export default function handler(
  _req: NextApiRequest,
  res: NextApiResponse<New[]>
) {
  return res.status(200).json(news)
}
