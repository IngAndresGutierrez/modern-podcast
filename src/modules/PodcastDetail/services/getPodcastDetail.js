import axios from 'axios'

import env from '../../../../env'

export const getPodcastDetail = (id) => {
  return axios.get(
    `${env.BASE_URL}/lookup?id=${id}&country=US&media=podcast&entity=podcastEpisode&limit=1000`
  )
}
