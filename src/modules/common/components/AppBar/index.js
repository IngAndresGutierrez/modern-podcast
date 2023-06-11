import Link from 'next/link'
import { Box, Toolbar, Typography, AppBar as MuiAppBar } from '@mui/material'

import './styles.css'
import styles from './styles'

const AppBar = () => {
  return (
    <Box>
      <MuiAppBar color="transparent">
        <Toolbar>
          <Link href="/" sx={styles.link}>
            <Typography color="blue" sx={styles.title}>
              Podcaster
            </Typography>
          </Link>
        </Toolbar>
      </MuiAppBar>
    </Box>
  )
}

export default AppBar
