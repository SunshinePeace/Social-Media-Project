import Head from 'next/head'
import Image from 'next/image'
import React from 'react'
import styles from '../styles/Home.module.css'
import Feed from './Components/Feed'
import Header from './Components/Header'
import Login from './Components/Login'
import SideBar from './Components/SideBar'
import Widgets from './Components/Widgets'

export default function Home() {

    const user = "ll";

    return (
      <div className={styles.app}>
      <Head>
        <title>Facebook 2.0</title>
            </Head>
            {!user ? <Login />
            : (
            <>
            <Header />

            <div className={styles.app__body}>
           <SideBar/>
            <Feed />
            <Widgets />
                </div>
             </>
            )}
    </div>
  )
}
