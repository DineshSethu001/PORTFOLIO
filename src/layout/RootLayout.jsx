import React from 'react'
import { Outlet } from 'react-router-dom'
import { Header,Greeting } from '../components'

import RouteChangeLoader from '../components/RouteChangeLoader'

const RootLayout = () => {
  return (
    <div className="h-screen overflow-y-auto overflow-x-hidden">
      <Greeting/>
      <RouteChangeLoader />
      <Header />

      {/* Main scrollable content */}
      <div className="mt-4 w-full h-auto flex flex-col flex-grow overflow-y-auto">
        <Outlet />
      </div>
    </div>
  )
}

export default RootLayout
