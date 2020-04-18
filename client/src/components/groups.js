import React, { Component } from 'react'

import axios from 'axios'

class Groups extends Component{

    state = {
        name: '',
        email: '',
        phone: '',
        address: '',
        call: '',
        text: '',
        emailPref: '',
        paperMailer: '',
        age: '',
        job: '',
        medicalRelief: '',
        helpElderlyAndOrDisabled: '',
        deliverFood: '',
        mealPrep: '',
        sewing: '',
        deliverMailers: '',
        host: '',
        coverExpenses: '',
        searchForItems: '',
        updates: '',
        none: '',
        other: '',
        resetOnSubmit: false,
        formList: []
    }

    componentDidMount(){
        axios.get('api/form')
            .then((response => {
                this.setState({ 
                    formList: response.data
                })
                console.log(response.data)
            }))
            .catch((error) => {
                console.log(error)
            })
    }

   
    
    render(){
      
        return(
            <div>
                    
               
                   
            </div>
        )
    }
}

export default Groups