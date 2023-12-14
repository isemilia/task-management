import { useTheme } from "@mui/material"
import customTheme from "../../theme/theme"

export const useCustomTheme = () => {
    return useTheme<typeof customTheme>()
}