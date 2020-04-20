import React, { Component } from 'react'

import Atlanta from '../skyline.jpg'
class Home extends Component {
    render() {
        return (
            <div className="HomeHeader">
                <img src={Atlanta} style={StyleSheet.absolutefill} alt="Atlanta Skyline"></img>
      
            </div>
        )
    }
}

export default Home