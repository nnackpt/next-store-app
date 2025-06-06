import React from 'react'
import { styled } from '@mui/material/styles'
import { TextField } from '@mui/material'

const CustomTextField = styled(
    React.forwardRef((props: any, ref: any) => <TextField ref={ref} {...props} />)
)(({ theme }) => ({
    '& .MuiOutlinedInput-input::-webkit-input-placeholder': {
        color: theme.palette.text.secondary,
        opacity: '0.8',
    },
    '& .MuiOutlinedInput-input.Mui-disabled::-webkit-input-placeholder': {
        color: theme.palette.text.secondary,
        opacity: '1',
    },
    '& .Mui-disabled .MuiOutlinedInput-notchedOutline': {
        BorderColor: theme.palette.grey[200],
    },
}))

export default CustomTextField