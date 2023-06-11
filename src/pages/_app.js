import { Provider } from 'react-redux'
import { CircularProgress } from '@mui/material'
import { PersistGate } from 'redux-persist/integration/react'

import { persistor, store } from '../../src/redux/store'

function MyApp({ Component, pageProps }) {
  return (
    <Provider store={store}>
      <PersistGate
        loading={<CircularProgress color="secondary" />}
        persistor={persistor}
      >
        <Component {...pageProps} />
      </PersistGate>
    </Provider>
  )
}

export default MyApp
