import { useEffect } from 'react'
import { Container } from '@mui/material'
import { useDispatch } from 'react-redux'

import AppBar from '../modules/common/components/AppBar'
import { getPodcasts } from '../modules/PodcastsList/services/getPodcasts'
import PodcastsList from '../modules/PodcastsList/components/PodcastsList'
import { savePodcasts, savePodcastsCopy } from '../redux/reducers/podcasts'

const Home = ({ podcastsList }) => {
  const dispatch = useDispatch()

  useEffect(() => {
    savePodcastsonRedux()
  }, [])

  const savePodcastsonRedux = () => {
    if (podcastsList) {
      dispatch(savePodcasts(podcastsList))
      dispatch(savePodcastsCopy(podcastsList))
    }
  }

  return (
    <>
      <AppBar />
      <Container sx={{ marginTop: 10 }}>
        <PodcastsList />
      </Container>
    </>
  )
}

export async function getServerSideProps() {
  try {
    const response = await getPodcasts()
    const podcastsList = response?.data?.feed?.entry

    return {
      props: {
        podcastsList,
      },
    }
  } catch (error) {
    console.error('Error al llamar a la API:', error)

    return {
      props: {
        podcastsList: null,
      },
    }
  }
}

export default Home
