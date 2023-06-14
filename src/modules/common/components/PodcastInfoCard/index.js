import { useSelector } from 'react-redux'
import { Card, CardContent, CardMedia, Typography } from '@mui/material'

const PodcastInfoCard = ({ podcast }) => {
  const selectedPodcast = useSelector((state) => state.podcasts.selectedPodcast)

  return (
    <Card>
      <CardMedia
        height="250"
        component="img"
        alt={podcast?.collectionName}
        image={podcast?.artworkUrl600}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {podcast?.collectionName}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          By {podcast?.artistName}
        </Typography>
        <Typography variant="body2">Description:</Typography>
        <Typography variant="body2" color="text.secondary">
          {selectedPodcast?.summary.label}
        </Typography>
      </CardContent>
    </Card>
  )
}

export default PodcastInfoCard
