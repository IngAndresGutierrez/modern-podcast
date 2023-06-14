import { useRouter } from 'next/navigation'
import { Box, Toolbar, Typography, AppBar as MuiAppBar } from '@mui/material'

import styles from './styles'

const AppBar = () => {
  const router = useRouter()

  const goToHome = () => {
    router.push('/')
  }

  return (
    <Box>
      <MuiAppBar color="transparent">
        <Toolbar>
          <Typography color="blue" sx={styles.title} onClick={goToHome}>
            Podcaster
          </Typography>
        </Toolbar>
      </MuiAppBar>
    </Box>
  )
}

export default AppBar
