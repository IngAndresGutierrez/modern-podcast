import { Grid } from '@mui/material'
import { useSelector } from 'react-redux'

import SearchPodcasts from '../Search'
import PodcastCard from '../PodcastCard'

const PodcastsList = () => {
  const { podcasts } = useSelector((state) => state.podcasts)

  const renderPodcastsList = podcasts?.map((podcast) => {
    const id = podcast?.id?.attributes['im:id']

    return (
      <Grid item xs={4} sm={3} md={3} key={id}>
        <PodcastCard podcast={podcast} />
      </Grid>
    )
  })

  return (
    <>
      <SearchPodcasts />
      <Grid
        container
        spacing={{ xs: 2, md: 3 }}
        columns={{ xs: 4, sm: 8, md: 12 }}
      >
        {renderPodcastsList}
      </Grid>
    </>
  )
}

export default PodcastsList
