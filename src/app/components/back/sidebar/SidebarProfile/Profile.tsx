import Avatar from '@mui/material/Avatar'
import Box from '@mui/material/Box'
import IconButton from '@mui/material/IconButton'
import Tooltip from '@mui/material/Tooltip'
import Typography from '@mui/material/Typography'
import useMediaQuery from '@mui/material/useMediaQuery'
import { IconPower } from '@tabler/icons-react'
import { useRouter } from 'next/navigation'

import { logout } from '@/app/services/actions/authAction'

export const Profile = () => {
  const router = useRouter()
  
  const lgUp = useMediaQuery((theme: any) => theme.breakpoints.up('lg'))
  const hideMenu = lgUp ? false : true

  async function handleLogout() {
    const response = await logout()
    if (response.success) {
      // console.log(response)
      router.push("/login")
    } else {
      console.log(response.error)
    }
  }

  return (
    <Box
      display={'flex'}
      alignItems="center"
      gap={2}
      sx={{ m: 3, p: 2, bgcolor: `${'primary.light'}` }}
    >
      {!hideMenu ? (
        <>
          <Avatar alt="Remy Sharp" src={"/images/profile/user-1.jpg"} sx={{ height: 40, width: 40 }} />

          <Box>
            <Typography variant="h6">Mathew</Typography>
            <Typography variant="caption">Designer</Typography>
          </Box>
          <Box sx={{ ml: 'auto' }}>
            <Tooltip title="Logout" placement="top">
              <IconButton
                color="error"
                aria-label="logout"
                size="small"
                onClick={handleLogout}
              >
                <IconPower size="20" />
              </IconButton>
            </Tooltip>
          </Box>
        </>
      ) : (
        ''
      )}
    </Box>
  )
}
