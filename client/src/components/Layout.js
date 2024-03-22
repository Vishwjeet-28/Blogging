import React from 'react'
import Navbar from './Navbar'
import Footer from './Footer'
function Layout({ children }) {
    return (
        <div>
            <Navbar />
            
            {/* main Content  */}
            <div style={{minHeight: "100vh"}}>
                {children}
            </div>

            <Footer />
        </div>
    )
}

export default Layout;