import React, { Component } from 'react'

import axios from 'axios'

class Resource extends Component {

    state = {
        _id:'',
        name: '',
        location: '',
        website: '',
        phoneNumber: '',
        email: '',
        description: '',
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

    componentDidMount() {
        axios.get('api/resource')
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
                        <input
                            name="name"
                            type="text"
                            placeholder="Resource"
                            value={this.state.resourceList.name}
                            onChange={this.changeHandler}
                        />
                        <br></br>
                        <input
                            name="location"
                            type="text"
                            placeholder="Location"
                            value={this.state.resourceList.location}
                            onChange={this.changeHandler}
                        />
                        <br></br>
                        <input
                            name="website"
                            type="text"
                            placeholder="Website"
                            value={this.state.resourceList.website}
                            onChange={this.changeHandler}
                        />
                        <br></br>
                        <input
                            name="phoneNumber"
                            type="number"
                            placeholder="Phone Number"
                            value={this.state.resourceList.phoneNumber}
                            onChange={this.changeHandler}
                        />
                        <br></br>
                        <input
                            name="email"
                            type="text"
                            placeholder="Email"
                            value={this.state.resourceList.email}
                            onChange={this.changeHandler}
                        />
                        <br></br>
                        <input
                            name="description"
                            type="text"
                            placeholder="Description"
                            value={this.state.resourceList.description}
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

export default Resource