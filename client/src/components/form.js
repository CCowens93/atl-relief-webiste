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

    componentDidMount() {
        axios.get('/api/form')
            .then((response) => {
                this.setState({ formList: response.data })
                console.log(response.data)
            })
            .catch((error) => {
                console.log(error)
            })
    }


    render() {

        console.log('From render()', this.state)

        // const FormTable = this.state.formList.map((form, i) => (
        //     <tr key={i}>
        //         <td width={300} height={50}>{form.name}</td>
        //         <td width={300} height={50}>{form.email}</td>
        //         <td width={300} height={50}>{form.phone}</td>
        //         <td width={300} height={50}>{form.address}</td>
        //         <td width={300} height={50}>{form.contact}</td>
        //         <td width={300} height={50}>{form.age}</td>
        //         <td width={300} height={50}>{form.job}</td>
        //         <td width={300} height={50}>{form.medicalRelief}</td>
        //         <td width={300} height={50}>{form.typeOfHelp}</td>
        //     </tr>
        // ))



        return (
            <div>
                <div className="VolunteerForm">
                    <form onSubmit={this.handleSubmit}>
                        <p>Volunteer Name</p>

                        <input
                            name="name"
                            type="text"
                            value={this.state.formList.name}
                            onChange={this.changeHandler}
                        />

                        <p>E-mail</p>

                        <input
                            name="email"
                            type="text"
                            value={this.state.formList.email}
                            onChange={this.changeHandler}
                        />

                        <p>Phone Number</p>
                        <input
                            name="phone"
                            type="number"
                            value={this.state.formList.phone}
                            onChange={this.changeHandler}
                        />


                        <p>Address</p>

                        <input
                            name="address"
                            type="text"
                            value={this.state.formList.address}
                            onChange={this.changeHandler}
                        />

                        <p>Contact Preference</p>
                        <p>Call</p>
                        <select
                            name="call"
                            onChange={this.changeHandler}
                            value={this.state.formList.call}>
                            <option value="" hidden>Select</option>
                            <option value="Yes">Yes</option>
                            <option value="No">No</option>

                        </select>
                        <p>Text</p>
                        <select
                            name="text"
                            onChange={this.changeHandler}
                            value={this.state.formList.text}>
                            <option value="" hidden>Select</option>
                            <option value="Yes">Yes</option>
                            <option value="No">No</option>

                        </select>
                        <br></br>
                        <p>Email</p>
                        <select
                            name="email"
                            onChange={this.changeHandler}
                            value={this.state.formList.emailPref}>
                            <option value="" hidden>Select</option>
                            <option value="Yes">Yes</option>
                            <option value="No">No</option>

                        </select>
                        <br></br>
                        <p>Paper Mailer</p>
                        <select
                            name="paperMailer"
                            type="checkbox"
                            onChange={this.changeHandler}
                            value={this.state.formList.paperMailer}>
                            <option value="" disabled hidden></option>
                            <option value="Yes">Yes</option>
                            <option value="No">No</option>
                            </select>

                        <br></br>
                        <p>Age Range</p>
                        <select
                            name="age"
                            value={this.state.formList.age}
                            onChange={this.changeHandler}>
                            <option value="" disabled hidden>Age Range</option>
                            <option value="18oryounger">18 or Younger</option>
                            <option value="18-29">18-29</option>
                            <option value="30-45">30-45</option>
                            <option value="46-66">46-66</option>
                            <option value="67+">67+</option>
                        </select>
                        <p>Would you be willing and able to volunteer in medical relief efforts?</p>
                        <select
                            name="medicalRelief"
                            value={this.state.formList.medicalRelief}
                            onChange={this.changeHandler}>
                            <option value="" hidden>Select</option>
                            <option value="Yes">Yes</option>
                            <option value="No">No</option>
                            <option value="Maybe">Maybe</option>
                        </select>
                        <p>How can you, or how would you, best like to help?</p>
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

                        <br></br>
                        <input
                            type="submit"
                            value="Submit"
                        />

                    </form>

                </div>
            </div>
        )
    }
}

export default Form