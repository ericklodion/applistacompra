import React, { Component } from 'react'
import Input from '../../Components/Input';
import Button from '../../Components/Button';
import { login } from '../../Services/authentication'
import { setToken } from '../../Helpers/authentication'

class Login extends Component{

    state = {
        email: '',
        password: '',
        isLoading: false,
        hasError: false
    }

    handleChange = event => {
        this.setState({
          [event.target.name]: event.target.value
        })
    }

    handleClickLogin = async event => {
        event.preventDefault()

        const { email, password } = this.state

        this.setState({
          isLoading: true
        })
        
        try {
          const response = await login({
            email,
            password
          })

          this.setState({
            isLoading: false
          })

          setToken(response.data.token)
          this.props.history.replace('/home')

        } catch (error) {
          console.log(error)
          this.setState({
            isLoading: false,
            hasError: true
          })
        }

    }

    handleClickCreateAccount = async event =>{
        event.preventDefault()
        this.props.history.push('/createaccount')
    }

    render(){
        const { email, password, isLoading, hasError } = this.state

        return (
            <div>
                <form>
                    <Input
                        name="email"
                        type="email"
                        value={email}
                        onChange={this.handleChange}
                    />
                    <Input
                        name="password"
                        type="password"
                        value={password}
                        onChange={this.handleChange}
                    />
                    <Button onClick={this.handleClickLogin}>Acessar</Button>
                    <Button onClick={this.handleClickCreateAccount}>Cadastrar-se</Button>
                </form>
            </div>
        )
    }

}

export default Login