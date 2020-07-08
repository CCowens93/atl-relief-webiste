import React, { Component } from 'react'

import Atlanta from '../skyline.jpg'
import SD from '../sd.jpg'
import Insp from '../inspo.jpg'
import CVP from '../cvp.jpg'


const pics = [
    {
        src:Atlanta,
        width:1,
        height:1
    },
    {
        src: SD,
        width:1,
        height:1
    },
    {
        src:CVP,
        width:1,
        height:1
    },
    {
        src: Insp,
        width:1,
        height:1
    }
   
]
class Home extends Component {
    
    render() {

        const images = pics.map((image) =>
        <img src={image.src} width={360} height={300} alt="first array of images"></img>

    )
        return (
            <div className="HomeHeader">
                    {images}
                    <div>
                        <header>
                            "There Is Always Hope"
                        </header>
                        <h3>
                            We are living un unprecedented times. Covid-19 has torn through our nation but I am 
                            proud to say that my community has stuck together through it. This webside it designed to recieve information 
                            for local volunteers and put them to work helping each other. There is opportunity 
                            to deliver food and other various supplies to those who are immunocompromised or can not 
                            leave the house, cover expenses for those who are hurting financially, and any other need our 
                            fellow neighbors might need. We are grateful for all willing to take time out of their lives
                            to help one another. We are in this together.
                        </h3>
                    </div>

            </div>
        )
    }
}

export default Home