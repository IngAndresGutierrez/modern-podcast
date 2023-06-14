import {
  Card,
  Grid,
  Avatar,
  Typography,
  CardContent,
  CardActionArea,
} from '@mui/material'
import { useDispatch } from 'react-redux'
import { useRouter } from 'next/navigation'

import styles from './styles'
import { saveSelectedPodcast } from '@/redux/reducers/podcasts'

const PodcastCard = ({ podcast }) => {
  const router = useRouter()
  const dispatch = useDispatch()
  const name = podcast['im:name']?.label
  const author = podcast['im:artist']?.label
  const image = podcast['im:image'][2]?.label
  const id = podcast?.id?.attributes['im:id']

  const goToDeatil = () => {
    savePodcastDetailonRedux()
    router.push(`/podcast/${id}`)
  }

  const savePodcastDetailonRedux = () => {
    dispatch(saveSelectedPodcast(podcast))
  }

  return (
    <Card onClick={goToDeatil} sx={{ height: 250 }}>
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
