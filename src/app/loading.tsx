import * as React from 'react'
import Skeleton from '@mui/material/Skeleton'
import Stack from '@mui/material/Stack'

export default function RootLoading() {
  return (
    <Stack spacing={1}>
      <Skeleton
        variant="rectangular"
        animation="wave"
        sx={{
          fontSize: '5rem',
          minWidth: '2.5rem',
          borderRadius: '2rem',
          height: '18rem',
        }}
        style={{ margin: '3rem' }}
      />
    </Stack>
  )
}
