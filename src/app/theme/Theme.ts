"use client"

import { createTheme } from "@mui/material/styles"
import { Colors } from "./colors"
import { shadows } from "./Shadows"
import typography from "./Typography"

const Theme = createTheme({
    palette: {
        mode: 'light',
        primary: {
            main: Colors.primary,
            light: Colors.primary,
            dark: Colors.primary,
        },
        secondary: {
            main: Colors.secondary,
            light: Colors.secondary,
            dark: Colors.secondary,
        },
    },
    typography: typography,
    shadows: shadows
})

export default Theme