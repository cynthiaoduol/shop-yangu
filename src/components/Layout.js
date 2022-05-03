import Head from 'next/head'
import React from 'react'
import { AppBar, Toolbar, Typography, Container, makeStyles } from '@material-ui/core'
import Link from 'next/link'

const Layout = ({ children }) => {
  const classes = useStyles()
  return (
    <div>
      <Head>
        <title>Shop Yangu</title>
      </Head>
      <AppBar position="static" className={classes.navbar}>
        <Toolbar>
          <Typography>
            <Link href={'/'}>ShopYangu</Link>
          </Typography>
          <Typography>
            <Link href={'/product/addproduct'}>Add Product</Link>
          </Typography>
          <Typography>
            <Link href={'/accounts/register'}>Create Account</Link>
          </Typography>
          <Typography>
            <Link href={'/accounts/login'}>Log In</Link>
          </Typography>
        </Toolbar>
      </AppBar>
      <Container className={classes.main}>
        {children}
      </Container>
      <footer className={classes.footer}>
        <Typography>
          All rights reserved. &copy; Shop Yangu
        </Typography>
      </footer>
    </div>
  )
}

export default Layout

const useStyles = makeStyles((theme) => ({
  navbar: {
    backgroundColor: 'grey',
    '& a': {
      color: '#ffffff',
      marginLeft: 10,
    },
  },

  main: {
    minHeight: '85vh',
  },
  footer: {
    textAlign: 'center',
    backgroundColor: 'grey',
    color: '#ffffff',
    bottom:0,
    right:0,
    left:0,
    position:'fixed',
    height:40,
    paddingTop:6
  }
  // footer: {
  //   // marginTop: 10,
  //   textAlign: 'center',
  // },
}))