import React from 'react'
import Sidebar from '../sidebar/Sidebar'
import Fun from '../Fun'
import { Route, BrowserRouter } from 'react-router-dom'
import Dashboard from '../../pages/Dashboard'
import Customers from '../../pages/Customers'
import './layout.css'
import TopNav from '../topnav/TopNav'

const Layout = () => {

    return (
        <BrowserRouter>
            <Route render={(props) => (
                <div className={`layout`}>
                    <Sidebar {...props}/>
                    <div className="layout__content">
                        {/* <TopNav/>  */}
                        <div className="layout__content-main">
                            <Fun/>
                        </div>
                    </div>
                </div>
            )}/>
        </BrowserRouter>
    )
    }

export default Layout

