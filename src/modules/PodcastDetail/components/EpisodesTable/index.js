import {
  Table,
  Paper,
  TableRow,
  TableBody,
  TableCell,
  TableHead,
  TableContainer,
} from '@mui/material'
import Link from 'next/link'
import { Fragment } from 'react'
import { useRouter } from 'next/router'
import { useDispatch } from 'react-redux'

import { saveSelectedEpisode } from '@/redux/reducers/podcasts'
import { formatDate, millisecondsToMinutes } from '../../utils/time'

const EpisodesTable = ({ selectedPodcast }) => {
  const router = useRouter()
  const dispatch = useDispatch()
  const { podcastId } = router.query

  const goToEpisode = (episode) => {
    dispatch(saveSelectedEpisode(episode))
  }

  return (
    <TableContainer component={Paper} sx={{ marginTop: 5 }}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Title</TableCell>
            <TableCell align="right">Date</TableCell>
            <TableCell align="right">Duration</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {selectedPodcast.map((row, key) => {
            return (
              <Fragment key={key}>
                {key > 0 && (
                  <TableRow
                    sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                  >
                    <TableCell
                      scope="row"
                      component="th"
                      onClick={() => goToEpisode(row)}
                    >
                      <Link
                        href={`/podcast/${podcastId}/episode/${row?.trackId}`}
                      >
                        {row.trackName}
                      </Link>
                    </TableCell>
                    <TableCell align="right">
                      {formatDate(row.releaseDate)}
                    </TableCell>
                    <TableCell align="right">
                      {millisecondsToMinutes(row.trackTimeMillis)}
                    </TableCell>
                  </TableRow>
                )}
              </Fragment>
            )
          })}
        </TableBody>
      </Table>
    </TableContainer>
  )
}

export default EpisodesTable
