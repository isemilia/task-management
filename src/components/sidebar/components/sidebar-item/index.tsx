import { Box, IconButton, Typography } from "@mui/material"
import { FC } from "react"
import { useCustomTheme } from "@/shared/model/hooks/use-custom-theme"
import { ISidebarItemProps } from "@/components/sidebar/components/sidebar-item/sidebar-item.type";

const SidebarItem: FC<ISidebarItemProps> = ({
  onClick = () => ({}),
  icon,
  label,
  sx = {},
  isOpen,
  isActive
}) => {
  const theme = useCustomTheme();

  return (
    <Box
      component={'li'}
      onClick={() => onClick()}
      sx={{
        display: 'flex',
        alignItems: 'center',
        columnGap: ({ spacing }) => `${spacing(3)}`,
        padding: ({ spacing }) => `${spacing(1)} 0px`,
        cursor: 'pointer',
        textDecoration: 'none',
        color: 'inherit',
        '& path': {
          fill: 'inherit'
        },
        ...(isActive ? {
          color: theme.palette.primary.main,
          '& path': {
            fill: theme.palette.primary.main
          },
        } : {}),
        ...(isOpen ? {
          borderRadius: theme.radius(),
          '&:hover': {
            background: theme.palette.grey[200],
            '& *:hover': {
              background: 'transparent'
            }
          }
        } : {}),
        ...sx
      }}>
      <IconButton>
        {icon}
      </IconButton>
      <Typography>{label}</Typography>
    </Box>
  )
}

export default SidebarItem