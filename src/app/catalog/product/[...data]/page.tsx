import * as React from 'react'
// import Box from '@mui/material/Box'
// import TextField from '@mui/material/TextField'
import { AddToCartButton } from './add-to-cart-button'
import Test from './test'

interface ProductProps {
  params: {
    data: string[]
  }
}

export default async function Product({ params }: ProductProps) {
  const response = await fetch('https://github.com/users/AlanFerreiraDev')
  const user = response.json()

  const [productId, size, color] = params.data

  return (
    <div>
      <h1>Product Id: {productId}</h1>
      <h1>Product Size: {size}</h1>
      <h1>Product Color: {color}</h1>

      {/* <Box
        component="form"
        sx={{
          '& > :not(style)': { m: 1, width: '25ch' },
        }}
        display={'flex'}
        alignItems={'center'}
        justifyContent={'center'}
        flexDirection={'column'}
        noValidate
        autoComplete="off"
      >
        <TextField id="outlined-basic" label="Outlined" variant="outlined" />
        <TextField id="filled-basic" label="Filled" variant="filled" />
        <TextField id="standard-basic" label="Standard" variant="standard" />

      {/* </Box> */}
      <pre>{JSON.stringify(user)}</pre>

      <AddToCartButton>
        <Test />
      </AddToCartButton>
    </div>
  )
}
