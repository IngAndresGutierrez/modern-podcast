import { useEffect } from 'react'
import { useDispatch } from 'react-redux'

import AppBar from '@/modules/common/components/AppBar'
import { savePodcastDetail } from '@/redux/reducers/podcasts'
import PodcastDetail from '@/modules/PodcastDetail/components/PodcastDetail'
import { getPodcastDetail } from '@/modules/PodcastDetail/services/getPodcastDetail'

const PodscastDetailPage = ({ selectedPodcast }) => {
  const dispatch = useDispatch()

  useEffect(() => {
    savePodcastDetailonRedux()
  }, [])

  const savePodcastDetailonRedux = () => {
    if (selectedPodcast) {
      dispatch(savePodcastDetail(selectedPodcast[0]))
    }
  }

  return (
    <>
      <AppBar />
      <PodcastDetail selectedPodcast={selectedPodcast} />
    </>
  )
}

export async function getServerSideProps(context) {
  const { params } = context
  const { podcastId } = params

  try {
    const response = await getPodcastDetail(podcastId)
    const selectedPodcast = response?.data?.results

    return {
      props: {
        selectedPodcast,
      },
    }
  } catch (error) {
    console.error('Error al llamar a la API:', error)

    return {
      props: {
        selectedPodcast: null,
      },
    }
  }
}

export default PodscastDetailPage
