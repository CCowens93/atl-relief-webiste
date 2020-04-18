import React, { Component } from 'react'

import axios from 'axios'

class Form extends Component {

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

    changeHandler = (event) => {
        const name = event.target.name;
        const value = event.target.value;

        const newState = { ...this.state }
        newState[name] = value;
        this.setState(newState)

    }

    handleSubmit = (event) => {
        event.preventDefault()
        axios.post('/api/form', this.state)
    }

    resetPage = () => {
        window.location.reload()
        const reset = this.state.resetOnSubmit ? false : true;
        this.setState({ resetOnSubmit: reset })
    }

    componentDidMount() {
        axios.get('/api/form')
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


        return (
            <div>

                <div className="VolunteerForm">
                    <form onSubmit={this.handleSubmit}>
                        <div className="section">
                            <label>Volunteer Name</label>

                            <input
                                name="name"
                                type="text"
                                value={this.state.formList.name}
                                onChange={this.changeHandler}
                            />

                            <label>E-mail</label>

                            <input
                                name="email"
                                type="email"
                                value={this.state.formList.email}
                                onChange={this.changeHandler}
                            />

                            <label>Phone Number</label>
                            <input
                                name="phone"
                                type="number"
                                value={this.state.formList.phone}
                                onChange={this.changeHandler}
                            />


                            <label>Address</label>

                            <input
                                name="address"
                                type="text"
                                value={this.state.formList.address}
                                onChange={this.changeHandler}
                            />

                            <label>Age Range</label>
                            <select
                                name="age"
                                onChange={this.changeHandler}
                                value={this.state.formList.age}>
                                <option value="" hidden>Select</option>
                                <option value="18oryounger">18 or Younger</option>
                                <option value="18-29">18-29</option>
                                <option value="30-45">30-45</option>
                                <option value="46-66">46-66</option>
                                <option value="67+">67+</option>
                            </select>
                            <label>Job Title</label>
                            <input
                                name="job"
                                type="text"
                                value={this.state.formList.job}
                                onChange={this.changeHandler}
                            />
                            

                        </div>

                        <div className="section">
                            <h2>Contact Preference</h2>
                            <label>Call</label>
                            <select
                                name="call"
                                onChange={this.changeHandler}
                                value={this.state.formList.call}>
                                <option value="" hidden>Select</option>
                                <option value="Yes">Yes</option>
                                <option value="No">No</option>

                            </select>
                            <label>Text</label>
                            <select
                                name="text"
                                onChange={this.changeHandler}
                                value={this.state.formList.text}>
                                <option value="" hidden>Select</option>
                                <option value="Yes">Yes</option>
                                <option value="No">No</option>

                            </select>
                            <br></br>
                            <label>Email</label>
                            <select
                                name="emailPref"
                                onChange={this.changeHandler}
                                value={this.state.formList.emailPref}>
                                <option value="" hidden>Select</option>
                                <option value="Yes">Yes</option>
                                <option value="No">No</option>

                            </select>
                            <br></br>
                            <label>Paper Mailer</label>
                            <select
                                name="paperMailer"
                                onChange={this.changeHandler}
                                value={this.state.formList.paperMailer}>
                                <option value="" hidden>Select</option>
                                <option value="Yes">Yes</option>
                                <option value="No">No</option>
                            </select>
                        </div>




                        <div className="section">
                            <h2>How can you, or how would you, best like to help?</h2>
                            <p>Would you be willing and able to volunteer in medical relief efforts?</p>
                            <select
                                name="medicalRelief"
                                onChange={this.changeHandler}
                                value={this.state.formList.medicalRelief}>

                                <option value="" hidden>Select</option>
                                <option value="Yes">Yes</option>
                                <option value="No">No</option>
                                <option value="Maybe">Maybe</option>
                            </select>

                            <p>"Adopting" an elderly or disabled home to check in on and keep updated</p>
                            <select
                                name="helpElderlyAndOrDisabled"
                                onChange={this.changeHandler}
                                value={this.state.formList.helpElderlyAndOrDisabled}>
                                <option value="" hidden>Select</option>
                                <option value="Yes">Yes</option>
                                <option value="No">No</option>
                            </select>

                            <p>Delivering food and necessity items to homes</p>
                            <select
                                name="deliverFood"
                                onChange={this.changeHandler}
                                value={this.state.formList.deliverFood}>
                                <option value="" hidden>Select</option>
                                <option value="Yes">Yes</option>
                                <option value="No">No</option>
                            </select>


                            <p>Meal Preperation (for those who cannot cook for themselves)</p>
                            <select
                                name="mealPrep"
                                onChange={this.changeHandler}
                                value={this.state.formList.mealPrep}>
                                <option value="" hidden>Select</option>
                                <option value="Yes">Yes</option>
                                <option value="No">No</option>
                            </select>


                            <p>Sewing necessity items</p>
                            <select
                                name="sewing"
                                onChange={this.changeHandler}
                                value={this.state.formList.sewing}>
                                <option value="" hidden>Select</option>
                                <option value="Yes">Yes</option>
                                <option value="No">No</option>
                            </select>


                            <p>Delivering paper information (mailers) to homes</p>
                            <select
                                name="deliverMailers"
                                onChange={this.changeHandler}
                                value={this.state.formList.deliverMailers}>
                                <option value="" hidden>Select</option>
                                <option value="Yes">Yes</option>
                                <option value="No">No</option>
                            </select>


                            <p>Hosting someone displaced by college or domestic violence shelters closing</p>
                            <select
                                name="host"
                                onChange={this.changeHandler}
                                value={this.state.formList.host}>
                                <option value="" hidden>Select</option>
                                <option value="Yes">Yes</option>
                                <option value="No">No</option>
                            </select>


                            <p>Covering small expense for specific needs of a person or family</p>
                            <select
                                name="coverExpenses"
                                onChange={this.changeHandler}
                                value={this.state.formList.coverExpenses}>
                                <option value="" hidden>Select</option>
                                <option value="Yes">Yes</option>
                                <option value="No">No</option>
                            </select>


                            <p>Searching online for resources and hard-to-find itmes (such as medical accessories)</p>
                            <select
                                name="searchForItems"
                                onChange={this.changeHandler}
                                value={this.state.formList.searchForItems}>
                                <option value="" hidden>Select</option>
                                <option value="Yes">Yes</option>
                                <option value="No">No</option>
                            </select>


                            <p>I just want to be kept updated with what's going on around me</p>
                            <select
                                name="updates"
                                onChange={this.changeHandler}
                                value={this.state.formList.updates}>
                                <option value="" hidden>Select</option>
                                <option value="Yes">Yes</option>
                                <option value="No">No</option>
                            </select>


                            <p>None of the above</p>
                            <select
                                name="none"
                                onChange={this.changeHandler}
                                value={this.state.formList.none}>
                                <option value="" hidden>Select</option>
                                <option value="Yes">Yes</option>
                                <option value="No">No</option>
                            </select>


                            <p>Other</p>
                            <input
                                name="other"
                                type="text"
                                placeholder="Other"
                                value={this.state.formList.other}
                                onChange={this.changeHandler}
                            />
                        </div>

                        <div className="button">
                            <br></br>
                            <input
                                type="submit"
                                value="Submit"
                                onClick={this.resetPage}
                            />

                        </div>

                    </form>


                </div>
            </div>
        )
    }
}

export default Form




  
                    