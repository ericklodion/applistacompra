import React, { Component } from 'react'
import Input from '../../Components/Input';
import Button from '../../Components/Button';
import { createaccount } from '../../Services/authentication'

class CreateAccount extends Component{

    state = {
        name: '',
        email: '',
        password: '',
        password2: '',
        isLoading: false
    }

    handleClickConfirm = async event =>{
        event.preventDefault()

        const {name, email, password, password2} = this.state
    
        if(!name)
            return

        if(!email)
            return
        
        if(!password)
            return

        if(!password2)
            return

        if(password !== password2)
            return

        try {
            const response = await createaccount({
              name,
              email,
              password,
              role_id: '979028c2-96f2-4fdc-846b-cb0155b9c0c6'
            })
  
            this.setState({
              isLoading: false
            })
  
            this.props.history.push('/home')
  
          } catch (error) {
            console.log(error)
            this.setState({
              isLoading: false,
              hasError: true
            })
          }

    }

    handleChange = event => {
        this.setState({
          [event.target.name]: event.target.value
        })
    }

    render(){
        const {name, email, password, password2} = this.state
        return (
            <div>
                <Input
                    name="name"
                    type="name"
                    value={name}
                    onChange={this.handleChange}
                />
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
                <Input
                    name="password2"
                    type="password"
                    value={password2}
                    onChange={this.handleChange}
                />
                <Button onClick={this.handleClickConfirm}>Confirmar</Button>
            </div>
        )
    }

}

export default CreateAccount