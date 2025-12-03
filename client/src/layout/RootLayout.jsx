import React from 'react'
import { Outlet } from 'react-router-dom'
import { Header} from '../components'

import RouteChangeLoader from '../components/RouteChangeLoader'

const RootLayout = () => {
  return (
    <div className="">
      {/* <Greeting/> */}
      <RouteChangeLoader />
      {/* Navbar */}
      <Header />

      <div className="">
        <Outlet />
      </div>
    </div>
  )
}

export default RootLayout
