import React, { Component } from 'react'

import axios from 'axios'

class Resource extends Component {

    state = {
        name: '',
        location: '',
        website: '',
        phoneNumber: '',
        email: '',
        description: '',
        resetOnSubmit: false,
        resourceList: []
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
        axios.post('/api/resource', this.state)
    }

    resetPage = () => {
        window.location.reload()
        const reset = this.state.resetOnSubmit ? false: true;
        this.setState({resetOnSubmit: reset})
    }

    componentDidMount() {
        axios.get('/api/resource')
            .then((response => {
                this.setState({ resourceList: response.data })
                console.log(response.data)
            }))
            .catch((error) => {
                console.log(error)
            })
    }

    render() {

        console.log('From render()', this.state)

        const ResourceTable = this.state.resourceList.map((resource, i) => (
            <tr key={i}>
                <td width={300} height={50}>{resource.name}</td>
                <td width={300} height={50}>{resource.location}</td>
                <td width={300} height={50}>{resource.website}</td>
                <td width={300} height={50}>{resource.phoneNumber}</td>
                <td width={300} height={50}>{resource.email}</td>
                <td width={300} height={50}>{resource.description}</td>
            </tr>
        ))

        return (

            <div>
                <div>
                    <table>
                        <thead>
                            <tr>
                                <th width={300} height={50}>Resource</th>
                                <th width={300} height={50}>Location</th>
                                <th width={300} height={50}>Website</th>
                                <th width={300} height={50}>Phone Number</th>
                                <th width={300} height={50}>E-mail</th>
                                <th width={300} height={50}>Description</th>
                            </tr>
                        </thead>
                        <tbody>
                            {ResourceTable}
                        </tbody>
                    </table>


                </div>
                <div className="ResourceForm">
                    <form onSubmit={this.handleSubmit}>
                        <ul>
                            <li>
                        <div className="ResourceInputs">
                        <label>Resource</label>
                        <input
                            name="name"
                            type="text"
                            class="field-long"
                            value={this.state.resourceList.name}
                            onChange={this.changeHandler}
                        />
                        </div>
                        </li>
                        <br></br>
                        <li>
                        <div className="ResourceInputs">
                        <label>Location</label>
                        <input
                            name="location"
                            type="text"
                            class="field-long"
                            value={this.state.resourceList.location}
                            onChange={this.changeHandler}
                        />
                        </div>
                        </li>
                        <br></br>
                        <li>
                        <div className="ResourceInputs">
                        <label>Website</label>
                        <input
                            name="website"
                            type="text"
                            class="field-long"
                            value={this.state.resourceList.website}
                            onChange={this.changeHandler}
                        />
                        </div>
                        </li>
                        <br></br>
                        <li>
                        <div className="ResourceInputs">
                        <label>Phone Number</label>
                        <input
                            name="phoneNumber"
                            type="number"
                            class="field-long"
                            value={this.state.resourceList.phoneNumber}
                            onChange={this.changeHandler}
                        />
                        </div>
                        </li>
                        <br></br>
                        <li>
                        <div className="ResourceInputs">
                        <label>Email</label>
                        <input
                            name="email"
                            type="text"
                            class="field-long"
                            value={this.state.resourceList.email}
                            onChange={this.changeHandler}
                        />
                        </div>
                        </li>
                        <br></br>
                        <li>
                        <div className="ResourceInputs">
                        <label>Description</label>
                        <input
                            name="description"
                            type="text"
                            class="field-long"
                            value={this.state.resourceList.description}
                            onChange={this.changeHandler}
                        />
                        </div>
                        </li>
                        <br></br>
                        <li>
                        <div className="ResourceInputs">

                        <input
                            type="submit"
                            value="Submit"
                            onClick={this.resetPage}
                        />
                        </div>
                        </li>
                        </ul>
                    </form>
                </div>
            </div>
        )
    }
}

export default Resource