import {
  Card,
  Grid,
  Avatar,
  Typography,
  CardContent,
  CardActionArea,
} from '@mui/material'

import styles from './styles'

const PodcastCard = ({ podcast }) => {
  const name = podcast['im:name']?.label
  const author = podcast['im:artist']?.label
  const image = podcast['im:image'][2]?.label

  return (
    <Card>
      <CardActionArea>
        <Grid
          container
          direction="column"
          alignItems="center"
          justifyContent="center"
        >
          <Avatar alt={name} src={image} sx={styles.avatar} />
        </Grid>
        <CardContent>
          <Grid
            container
            direction="column"
            alignItems="center"
            justifyContent="center"
          >
            <Typography gutterBottom variant="h6">
              {name}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Author: {author}
            </Typography>
          </Grid>
        </CardContent>
      </CardActionArea>
    </Card>
  )
}

export default PodcastCard
