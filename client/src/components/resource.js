import React, { Component } from 'react'

import axios from 'axios'

class Resource extends Component{

    state = {
        name:'',
        location:'',
        website:'',
        phoneNumber:'',
        email:'',
        description:'',
        resourceList:[]
    }

    componentDidMount(){
        axios.get('api/resource')
        .then((response => {
            this.setState({ resourceList: response.data})
            console.log(response.data)
        }))
        .catch((error) => {
            console.log(error)
        })
    }

    render(){

        console.log('From render()', this.state)
        return(
            <div>
                    <p>Hello, world</p>
            </div>
        )
    }
}

export default Resource