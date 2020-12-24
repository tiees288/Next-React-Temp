import Link from 'next/link'
import Head from 'next/head'
import React, { useState } from 'react'
import { Grid } from "@material-ui/core"
import LoginModal from '../Modal/login'

export default function Nav(props) {

  const [openLogin, setopenLogin] = useState(false)
  const handleOpen = (setState) => {
    setState(true);
  };

  // const handleClose = (setState) => {
  //   setopenLogin(false);
  // };

  return (
    <React.Fragment>
      <Head>
        <title>{props.pageName} | Krittawat Web</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <nav>
        <ul >
          <Grid container>
            <Grid item xs={10}>
              <div style={{ display: "inline" }}>
                <li className="brand">
                  <Link href="/" >Shopping Cart</Link>
                </li>
              </div>
              <div className="nav-button">
                <li className="link">
                  <Link href="/"  >Home</Link>
                </li>
              </div>
              <li className="link">
                <div className="nav-button">
                  <Link href="/about" >About</Link>
                </div>
              </li>
            </Grid>
            <Grid item xs={2}>
              <div className="nav-button">
                <li className="link">
                  <a style={{
                    cursor: "pointer"
                  }} onClick={() => {
                    if (openLogin === false) {
                      handleOpen(setopenLogin)
                    }
                  }}>Login</a>
                </li>
              </div>
              <div className="nav-button" style={{ width: "5rem" }}>
                <li className="link">
                  <Link href="/"  >Register</Link>
                </li>
              </div>
            </Grid>
          </Grid>
        </ul>
      </nav >
      <LoginModal openLogin={openLogin} setopenLogin={setopenLogin} />
    </React.Fragment>
  )
}
