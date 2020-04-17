import React, { Component } from 'react'

import axios from 'axios'

class Form extends Component {

    state = {
        name: '',
        email: '',
        phone: '',
        address: '',
        call: false,
        text: false,
        emailPref: false,
        paperMailer: false,
        age: '',
        job: '',
        medicalRelief: '',
        helpElderlyAndOrDisabled: false,
        deliverFood: false,
        mealPrep: false,
        sewing: false,
        deliverMailers: false,
        host: false,
        coverExpenses: false,
        searchForItems: false,
        updates: false,
        none: false,
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
        axios.get('api/form')
            .then((response => {
                this.setState({formList: response.data})
                console.log(response.data)
            }))
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
                    <form>
                        <p>Volunteer</p>

                        <input
                            name="name"
                            type="text"
                            placeholder="Volunteer Name"
                            value={this.state.formList.name}
                            onChange={this.changeHandler}
                        />

                        <p>E-mail</p>

                        <input
                            name="email"
                            type="text"
                            placeholder="E-mail"
                            value={this.state.formList.email}
                            onChange={this.changeHandler}
                        />


                        <p>Address</p>

                        <input
                            name="address"
                            type="text"
                            placeholder="Address"
                            value={this.state.formList.address}
                            onChange={this.changeHandler}
                        />

                        <p>Contact Preference</p>
                        <p>Call</p>
                        <input
                            name="call"
                            type="checkbox"
                            onChange={this.changeHandler}
                            value={this.state.formList.call ? this.state.call.value: !this.state.call.value}

                        />
                        <p>Text</p>
                        <input
                            name="text"
                            type="checkbox"
                            onChange={this.changeHandler}
                            value={this.state.formList.text}

                        />
                        <br></br>
                        <p>Email</p>
                        <input
                            name="email"
                            type="checkbox"
                            onChange={this.changeHandler}
                            value={this.state.formList.email}

                        />
                        <br></br>
                        <p>Paper Mailer</p>
                        <input
                            name="paperMailer"
                            type="checkbox"
                            onChange={this.changeHandler}
                            value={this.state.formList.paperMailer}

                        />
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
                            <option value="" disabled hidden>Medical Relief</option>
                            <option value="Yes">Yes</option>
                            <option value="No">No</option>
                            <option value="Maybe">Maybe</option>
                        </select>
                        <p>How can you, or how would you, best like to help?</p>
                        <p>"Adopting" an elderly or disabled home to check in on and keep updated</p>
                        <input
                            name="helpElderlyAndOrDisabled"
                            type="checkbox"
                            onChange={this.changeHandler}
                            value={this.state.formList.helpElderlyAndOrDisabled}

                        />
                        <p>Delivering food and necessity items to homes</p>
                        <input
                            name="deliverFood"
                            type="checkbox"
                            onChange={this.changeHandler}
                            value={this.state.formList.deliverFood}

                        />
                        <p>Meal Preperation (for those who cannot cook for themselves)</p>
                        <input
                            name="mealPrep"
                            type="checkbox"
                            onChange={this.changeHandler}
                            value={this.state.formList.mealPrep}

                        />
                        <p>Sewing necessity items</p>
                        <input
                            name="sewing"
                            type="checkbox"
                            onChange={this.changeHandler}
                            value={this.state.formList.sewing}

                        />
                        <p>Delivering paper information (mailers) to homes</p>
                        <input
                            name="deliverMailers"
                            type="checkbox"
                            onChange={this.changeHandler}
                            value={this.state.formList.deliverMailers}

                        />
                        <p>Hosting someone displaced by college or domestic violence shelters closing</p>
                        <input
                            name="host"
                            type="checkbox"
                            onChange={this.changeHandler}
                            value={this.state.formList.host}

                        />
                        <p>Covering small expense for specific needs of a person or family</p>
                        <input
                            name="coverExpenses"
                            type="checkbox"
                            onChange={this.changeHandler}
                            value={this.state.formList.coverExpenses}

                        />
                        <p>Searching online for resources and hard-to-find itmes (such as medical accessories)</p>
                        <input
                            name="searchForItems"
                            type="checkbox"
                            onChange={this.changeHandler}
                            value={this.state.formList.searchForItems}

                        />
                        <p>I just want to be kept updated with what's going on around me</p>
                        <input
                            name="updates"
                            type="checkbox"
                            onChange={this.changeHandler}
                            value={this.state.formList.updates}

                        />
                        <p>None of the above</p>
                        <input
                            name="none"
                            type="checkbox"
                            onChange={this.changeHandler}
                            value={this.state.formList.none}

                        />
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