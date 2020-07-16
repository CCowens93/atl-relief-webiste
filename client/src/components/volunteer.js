import React, { Component } from 'react'

import axios from 'axios'

class Volunteer extends Component {

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

        const FormTable = this.state.formList.map((form, i) => (
            <tr key={i}>
                <td width={300} height={50}>{form.name}</td>
                <td width={300} height={50}>{form.email}</td>
                <td width={300} height={50}>{form.phone}</td>
                <td width={300} height={50}>{form.address}</td>

            </tr>
        ))


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





        return (
            <div className="VolList">
                <div >

                    <div className="ListOfPeople">
                        <table cellpadding="5px" cellspacing="2px" className="PerformanceTable">
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

                    <div className="t">

                        <div className="ListOfPeople">
                            <table cellpadding="5px" cellspacing="2px" className="PerformanceTable">
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
                            <br></br>
                            <table>
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
                                    <tr>
                                        <td>{MailersVolunteer}</td>
                                        <td>{HostVolunteer}</td>
                                        <td>{CoverExpensesVolunteer}</td>
                                        <td>{SearchForItemsVolunteer}</td>
                                        <td>{UpdatesVolunteer}</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                        {/* <br></br>
                        <div className="ListOfPeople">
                            <table cellpadding="5px" cellspacing="2px" className="PerformanceTable">
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
                        </div> */}

                    </div>


                </div>
            </div>
        )
    }
}

export default Volunteer