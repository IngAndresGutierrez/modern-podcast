import { useSelector } from 'react-redux'
import { Card, CardContent, Grid, Typography } from '@mui/material'

import PodcastInfoCard from '@/modules/common/components/PodcastInfoCard'

const EpisodeDetail = () => {
  const { selectedEpisode } = useSelector((state) => state.podcasts)
  const { selectedPodcastDetail } = useSelector((state) => state.podcasts)

  return (
    <Grid container sx={{ marginTop: 10 }}>
      <Grid item xs={3}>
        <PodcastInfoCard podcast={selectedPodcastDetail} />
      </Grid>
      <Grid item xs={9} sx={{ padding: 5 }}>
        <Card>
          <CardContent>
            <Typography variant="body2" color="text.secondary">
              {selectedEpisode.description}
            </Typography>
            <Grid sx={{ marginTop: 5 }}>
              <audio controls style={{ width: '-webkit-fill-available' }}>
                <source src={selectedEpisode.episodeUrl} type="audio/mpeg" />
                Tu navegador no soporta la reproducción de audio.
              </audio>
            </Grid>
          </CardContent>
        </Card>
      </Grid>
    </Grid>
  )
}

export default EpisodeDetail
