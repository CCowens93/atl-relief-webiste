import React, { Component } from 'react'

import axios from 'axios'

class Volunteer extends Component{

    state = {
        name:'',
        phone:'',
        email:'',
        resetOnSubmit: false,
        volunteerList:[]
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
        axios.post('/api/volunteer', this.state)
    }

    resetPage = () => {
        window.location.reload()
        const reset = this.state.resetOnSubmit ? false: true;
        this.setState({resetOnSubmit: reset})
    }

    componentDidMount(){
        axios.get('api/volunteer')
            .then((response => {
                this.setState({ 
                    volunteerList: response.data
                })
                console.log(response.data)
            }))
            .catch((error) => {
                console.log(error)
            })
    }


    render(){

        console.log('From render()', this.state)


        const VolunteerTable = this.state.volunteerList.map((volunteer, i) => (
            <tr key={i}>
                <td width={300} height={50}>{volunteer.name}</td>
                <td width={300} height={50}>{volunteer.phone}</td>
                <td width={300} height={50}>{volunteer.email}</td>
            </tr>
        ))

        return(
            <div>

                <div>
                    <table>
                        <thead>
                            <tr>
                                <th width={300} height={50}>Volunteer</th>
                                <th width={300} height={50}>Phone Number</th>
                                <th width={300} height={50}>E-mail</th>
                            </tr>
                        </thead>
                        <tbody>
                            {VolunteerTable}
                        </tbody>
                    </table>
                </div>

                <div>
                    <form onSubmit={this.handleSubmit}>
                        <p>Volunteer Name</p>
                        <input
                            name="name"
                            type="text"
                            value={this.state.volunteerList.name}
                            onChange={this.changeHandler}
                        />
                        <br></br>
                        <p>Phone Number</p>
                        <input
                            name="phone"
                            type="text"
                            value={this.state.volunteerList.phone}
                            onChange={this.changeHandler}
                        />
                        <br></br>
                        <p>E-mail</p>
                        <input
                            name="email"
                            type="text"
                            value={this.state.volunteerList.email}
                            onChange={this.changeHandler}
                        />
                        <br></br>
                      
                        <input
                            type="submit"
                            value="Submit"
                            onClick={this.resetPage}
                            
                        />
                        
                    </form>
                </div>

            </div>
        )
    }
}

export default Volunteer