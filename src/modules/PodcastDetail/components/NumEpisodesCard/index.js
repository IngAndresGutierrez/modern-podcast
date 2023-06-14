import { Card, CardContent, Typography } from '@mui/material'

const NumEpisodesCard = ({ numEpisodes }) => {
  return (
    <Card>
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          Episodes: {numEpisodes}
        </Typography>
      </CardContent>
    </Card>
  )
}

export default NumEpisodesCard
