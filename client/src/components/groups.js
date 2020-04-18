import React, { Component } from 'react'

import axios from 'axios'

class Groups extends Component {

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

    componentDidMount() {
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



    render() {



        const x = this.state.formList

        const Volunteer = x.map((volunteer, i) => {
            if (volunteer.medicalRelief === "No") {
                return (
                    <div key={i}>
                        <p>{volunteer.name}</p>
                    </div>
                )
            }
            else {
                return ""
            }
        })


        return (
            <div className="wrapper">
              
                <div className="HelpTable">
                <table>
                    <thead>
                        <tr>
                            <th width={300} height={50}>Medical Relief</th>
                            <th width={300} height={50}>Elderly/Disabled</th>
                            <th width={300} height={50}>Deliver Food</th>
                            <th width={300} height={50}>Meal Prep</th>
                            <th width={300} height={50}>Sewing</th>
                            <th width={300} height={50}>Deliver Mailers</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td width={300} height={50}>{Volunteer}</td>
                        </tr>

                    </tbody>
                </table>
                </div>
            </div>
        )
    }
}

export default Groups