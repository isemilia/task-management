import { useTheme } from "@mui/material"
import customTheme from "@/app/theme/theme"

export const useCustomTheme = () => {
    return useTheme<typeof customTheme>()
}