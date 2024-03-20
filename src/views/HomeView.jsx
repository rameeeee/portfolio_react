import React from 'react'

import Contact from '../components/Contact'
import Content from '../components/Content'
import Footer from '../components/Footer'
import Intro from '../components/Intro'
import Nav from '../components/Nav'
import Spot from '../components/Spot'
import Work from '../components/Work'




const HomeView = () => {
    


    

    return (
        <div className="wrap">
            <Spot />
            <Content>
                <Nav />
                <Intro />
                <Work />
                <Contact />
                <Footer />
            </Content>
        </div>
    )
}

export default HomeView
