import React, { Component } from 'react'

import axios from 'axios'

class Volunteer extends Component{

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

        const FormTable = this.state.formList.map((form, i) => (
            <tr key={i}>
                <td width={300} height={50}>{form.name}</td>
                <td width={300} height={50}>{form.email}</td>
                <td width={300} height={50}>{form.phone}</td>
                <td width={300} height={50}>{form.address}</td>
              
            </tr>
        ))
        

        return(
            <div className="wrapper">

                <div className="ListOfPeople">
                    <table>
                        <thead>
                            <tr>
                                <th width={300} height={50}>Volunteer</th>
                                <th width={300} height={50}>E-mail</th>
                                <th width={300} height={50}>Phone Number</th>
                                <th width={300} height={50}>Location</th>
                            </tr>
                        </thead>
                        <tbody>
                            {FormTable}
                        </tbody>
                    </table>
                </div>

            </div>
        )
    }
}

export default Volunteer