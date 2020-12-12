import Link from 'next/link'
import Head from 'next/head'
import React from 'react'


export default function Nav(props) {
  return (
    <React.Fragment>
      <Head>
        <title>{props.pageName} | Krittawat Web</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <nav>
        <ul >
          <div style={{ display: "inline" }}>
            <li className="brand">Brand</li>
          </div>
          <div style={{ display: "inline" }}>
            <li className="link">
              <Link href="/"  >Home</Link>
            </li>
            <li className="link">
              <Link href="/about" >About</Link>
            </li>
          </div>
        </ul>
      </nav >
    </React.Fragment>
  )
}
