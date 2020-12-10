import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Nav from './components/nav'
import React, { useState } from 'react'

export default function Main() {

  const [modal, setModal] = useState(false)

  return (
    <Nav />
  )
}
