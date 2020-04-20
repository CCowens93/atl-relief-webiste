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

        const MedicalReliefVolunteer = x.map((volunteer, i) => {
            if (volunteer.medicalRelief === "Yes") {
                return (
                    <div className="names" key={i}>
                        <p>{volunteer.name}</p>
                    </div>
                )
            }
            else {
                return ""
            }
        })

        const EldDisVolunteer = x.map((volunteer, i) => {
            if (volunteer.helpElderlyAndOrDisabled === "Yes") {
                return (
                    <div className="names" key={i}>
                        <p>{volunteer.name}</p>
                    </div>
                )
            }
            else {
                return ""
            }
        })

        const FoodDeliveryVolunteer = x.map((volunteer, i) => {
            if (volunteer.deliverFood === "Yes") {
                return (
                    <div className="names" key={i}>
                        <p>{volunteer.name}</p>
                    </div>
                )
            }
            else {
                return ""
            }
        })

        const MealPrepVolunteer = x.map((volunteer, i) => {
            if (volunteer.deliverFood === "Yes") {
                return (
                    <div className="names" key={i}>
                        <p>{volunteer.name}</p>
                    </div>
                )
            }
            else {
                return ""
            }
        })

        const SewingVolunteer = x.map((volunteer, i) => {
            if (volunteer.sewing === "Yes") {
                return (
                    <div className="names" key={i}>
                        <p>{volunteer.name}</p>
                    </div>
                )
            }
            else {
                return ""
            }
        })

        const MailersVolunteer = x.map((volunteer, i) => {
            if (volunteer.deliverMailers === "Yes") {
                return (
                    <div className="names" key={i}>
                        <p>{volunteer.name}</p>
                    </div>
                )
            }
            else {
                return ""
            }
        })
        const HostVolunteer = x.map((volunteer, i) => {
            if (volunteer.host === "Yes") {
                return (
                    <div className="names" key={i}>
                        <p>{volunteer.name}</p>
                    </div>
                )
            }
            else {
                return ""
            }
        })
        const CoverExpensesVolunteer = x.map((volunteer, i) => {
            if (volunteer.coverExpenses === "Yes") {
                return (
                    <div className="names" key={i}>
                        <p>{volunteer.name}</p>
                    </div>
                )
            }
            else {
                return ""
            }
        })
        const SearchForItemsVolunteer = x.map((volunteer, i) => {
            if (volunteer.searchForItems === "Yes") {
                return (
                    <div className="names" key={i}>
                        <p>{volunteer.name}</p>
                    </div>
                )
            }
            else {
                return ""
            }
        })
        const UpdatesVolunteer = x.map((volunteer, i) => {
            if (volunteer.updates === "Yes") {
                return (
                    <div className="names" key={i}>
                        <p>{volunteer.name}</p>
                    </div>
                )
            }
            else {
                return ""
            }
        })

        const List = 
        <tr>
            <td>{MailersVolunteer}</td>
            <td>{HostVolunteer}</td>
            <td>{CoverExpensesVolunteer}</td>
            <td>{SearchForItemsVolunteer}</td>
            <td>{UpdatesVolunteer}</td>
        </tr>


        return (
            <div className="tableWrapper">

                <div className="HelpTable">
                    <table cellpadding="2px" cellspacing="2px" class="PerformanceTable">
                        <thead>
                            <tr>
                                <th>Medical Relief</th>
                                <th>Elderly/
                                    Disabled</th>
                                <th>Deliver Food</th>
                                <th>Meal Prep</th>
                                <th>Sewing</th>


                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>{MedicalReliefVolunteer}</td>
                                <td>{EldDisVolunteer}</td>
                                <td>{FoodDeliveryVolunteer}</td>
                                <td>{MealPrepVolunteer}</td>
                                <td>{SewingVolunteer}</td>

                            </tr>

                        </tbody>
                    </table>
                </div>
                <br></br>
                <div className="HelpTable">
                    <table cellpadding="2px" cellspacing="2px" class="PerformanceTable">
                        <thead>
                            <tr>
                                <th>Deliver Mailers</th>
                                <th>Host</th>
                                <th>Cover Expenses</th>
                                <th>Search of Items</th>
                                <th>Updates</th>
                            </tr>
                        </thead>
                        <tbody>
                           {List}
                        </tbody>
                    </table>
                </div>

            </div>

        )
    }
}

export default Groups