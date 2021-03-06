import React, { Component } from 'react'
import { login } from './functions.js';

export default class LoginPage extends Component {

    state = {
        email: '',
        password: ''
    }

    handleSubmit = async e => {
        e.preventDefault();

        const token = await login(this.state.email, this.state.password)

        this.props.login(token)
        this.props.history.push("/todo")
    }

    handleEmail = e => {
        this.setState({ email: e.target.value })
    }

    handlePassword = e => {
        this.setState({ password: e.target.value })
    }
    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <label>
                        Email
                        <input type="email" onChange={this.handleEmail}/>
                    </label>
                    <label>
                        Password
                        <input type="password" onChange={this.handlePassword} />
                    </label>
                    <button>Login</button>
                </form>
            </div>
        )
    }
}
