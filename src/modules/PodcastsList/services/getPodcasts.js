import axios from 'axios'

import env from '../../../../env'

export const getPodcasts = () => {
  return axios.get(
    `${env.BASE_URL}/us/rss/toppodcasts/limit=100/genre=1310/json`
  )
}
