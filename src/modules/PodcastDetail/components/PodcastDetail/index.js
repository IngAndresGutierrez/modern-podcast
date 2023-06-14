import { Grid } from '@mui/material'

import EpisodesTable from '../EpisodesTable'
import NumEpisodesCard from '../NumEpisodesCard'
import PodcastInfoCard from '@/modules/common/components/PodcastInfoCard'

const PodcastDetail = ({ selectedPodcast }) => {
  return (
    <Grid container sx={{ marginTop: 10 }}>
      <Grid item xs={3}>
        <PodcastInfoCard podcast={selectedPodcast[0]} />
      </Grid>
      <Grid item xs={9} sx={{ padding: 5 }}>
        <NumEpisodesCard numEpisodes={selectedPodcast?.length} />
        <EpisodesTable selectedPodcast={selectedPodcast} />
      </Grid>
    </Grid>
  )
}

export default PodcastDetail
