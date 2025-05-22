'use client'

import { AppBar, Box, Button, IconButton, Container, Theme, Toolbar, styled, useMediaQuery } from "@mui/material"
import { MenuOutlined as MenuIcon } from "@mui/icons-material"
import Image from "next/image"
import Link from "next/link"

export default function Header() {

  // AppBar styling
  const AppBarStyled = styled(AppBar)(({ theme }) => ({
    justifyContent: 'center',
    [theme.breakpoints.up('lg')]: {
      minHeight: '80px',
    },
    backgroundColor: theme.palette.background.default,
  }))

  // Toolbar styling
  const ToolbarStyled = styled(Toolbar)(({ theme }) => ({
    width: "100%",
    paddingLeft: "0 !important",
    paddingRight: "0 !important",
    color: theme.palette.text.secondary
  }))

  // Button styling
  const ButtonStyled = styled(Button)(({ theme }) => ({
    fontSize: '16px',
    color: theme.palette.text.secondary
  }))

  // Breakpoints
  const lgUp = useMediaQuery((theme: Theme) => theme.breakpoints.up('lg'))
  const lgDown = useMediaQuery((theme: Theme) => theme.breakpoints.down('lg'))

  return (
    <AppBarStyled position='sticky' elevation={8}>
      <Container maxWidth='lg'>
        <ToolbarStyled>
          <Link href="/">
            <Image 
              src={"/images/logos/NextStoreLogo.svg"}
              alt="logo"
              height={40}
              width={174}
              priority
            />
          </Link>
          <Box flexGrow={1} />
          {
            lgDown ? (
              <IconButton
                edge='start'
                color='inherit'
                aria-label='menu'
              >
                <MenuIcon />
              </IconButton>
            ) : null
          }
          {
            lgUp ? (
              <>
                <ButtonStyled
                  color='inherit'
                  href="/"
                  variant="text"
                  LinkComponent={Link}
                >
                  Home
                </ButtonStyled>
                <ButtonStyled
                  color="inherit"
                  variant="text"
                  href='/about'
                  LinkComponent={Link}
                >
                  About
                </ButtonStyled>
                <ButtonStyled
                  color="inherit"
                  variant="text"
                  href='/blog'
                  LinkComponent={Link}
                >
                  Blog
                </ButtonStyled>
                <ButtonStyled
                  color="inherit"
                  variant="text"
                  href='/contact'
                  LinkComponent={Link}
                >
                  Contact
                </ButtonStyled>
                <Button
                  color="primary"
                  variant="contained"
                  href='/login'
                  LinkComponent={Link}
                >
                  Login
                </Button>
              </>
            ) : null
          }
        </ToolbarStyled>
      </Container>
    </AppBarStyled>
  )
}