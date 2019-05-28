import React, {Component} from 'react'
import { getCategories } from '../../Services/category'
import './combobox.css'

class ComboBox extends Component{

    state = {
        data: []
    }
    
    async componentDidMount () {
        try {
            const response = await getCategories()
            this.setState({
                data: response.data
            })
        } catch (error) {
        }
    }

    render(){
        const {data} = this.state

        return (
            <select>{
                 data.map(item => {
                    return (
                        <option value={item.id} key={item.id}>
                            {item.name}
                        </option>
                    )
                  })}
            </select>
        )
    }
}

export default ComboBox