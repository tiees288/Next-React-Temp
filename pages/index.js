import Head from 'next/head'
import styles from '../styles/Home.module.css'
import React, { useState } from 'react'
import Home from './components/Home'
import Layouts from './components/layouts/layouts'

export default function Main() {

  const [modal, setModal] = useState(false)

  return (
    <>
      <Home />
    </>
  )
}
