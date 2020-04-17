import React, { Component } from 'react'

import axios from 'axios'

class Volunteer extends Component{

    state = {
        _id:'',
        name:'',
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

    componentDidMount(){
        axios.get('api/volunteer')
            .then((response => {
                this.setState({ volunteerList: response.data})
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
            </tr>
        ))

        return(
            <div>

                <div>
                    <table>
                        <thead>
                            <tr>
                                <th width={300} height={50}>Volunteer</th>
                            </tr>
                        </thead>
                        <tbody>
                            {VolunteerTable}
                        </tbody>
                    </table>
                </div>

                <div>
                    <form>
                        <input
                            name="name"
                            type="text"
                            placeholder="Volunteer"
                            value={this.state.volunteerList.name}
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

export default Volunteer