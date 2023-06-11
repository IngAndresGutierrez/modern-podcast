import { useEffect } from 'react'
import { Container } from '@mui/material'
import { useDispatch } from 'react-redux'

import { savePodcasts } from '../redux/reducers/podcasts'
import { getPodcasts } from '../modules/PodcastsList/services/getPodcasts'
import PodcastsList from '../modules/PodcastsList/components/PodcastsList'
import AppBar from '@/modules/common/components/AppBar'

const Home = ({ data }) => {
  const dispatch = useDispatch()

  useEffect(() => {
    savePodcastsonRedux()
  }, [])

  const savePodcastsonRedux = () => {
    if (data) {
      dispatch(savePodcasts(data?.feed?.entry))
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
    const data = response.data

    return {
      props: {
        data,
      },
    }
  } catch (error) {
    console.error('Error al llamar a la API:', error)

    return {
      props: {
        data: null,
      },
    }
  }
}

export default Home
