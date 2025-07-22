import React from 'react'
import { Outlet } from 'react-router-dom'
import { Header } from '../components'
import RouteChangeLoader from '../components/RouteChangeLoader'

const RootLayout = () => {
    return (
          
      <div className="h-screen overflow-y-auto">
         <RouteChangeLoader />
  <Header />
  
  {/* Main scrollable content */}
  <div className="mt-4 w-full flex flex-col flex-grow h-[calc(100vh-100px)] overflow-y-auto">
    <Outlet />
  </div>
</div>


    )
}

export default RootLayout