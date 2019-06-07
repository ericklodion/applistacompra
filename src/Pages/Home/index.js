import React, {Component, Fragment} from 'react'
import ComboBox from '../../Components/ComboBox';
import Input from '../../Components/Input';
import Button from '../../Components/Button';
import Form from '../../Components/Form';
import List from '../../Components/List';
import ListItem from '../../Components/ListItem';
import { getCategories } from '../../Services/category'

class Home extends Component{

    state = {
        item: '',
        list: [],
        options: null,
        selectedOption: null,
      }

    render(){
        const { item, list, options, selectedOption } = this.state

        return (
            <Fragment>
                <Form onSubmit={this.handleSubmit}>
                    <Input
                        label="Produto"
                        value={item} 
                        onChange={this.handleItemChange}
                    />
                    <ComboBox 
                    value={selectedOption}
                    onChange={this.handleChange}
                    options={options}
                    />
                    <Button>Adicionar</Button>
                </Form>
                <List>
                    {
                    list.map((listItem, index) => {
                    return (
                        <ListItem onClick={() => this.deleteItem(index)} key={index}>
                        {listItem}
                        </ListItem>
                    )
                    })
                    }
                </List>
            </Fragment>
        )
    }

    componentDidMount = async event =>{

        try {
          const response = await getCategories()
          this.setState({
            options: response.data.map( category => ({value: category.id, label: category.name}))
          })
        } catch (error) {
          console.log(error);
        }
    
    }

    handleChange = selectedOption => {
        this.setState({ selectedOption });
      };
    
      handleItemChange = event => {
        this.setState({
          item: event.target.value
        })
      }
    
      handleSubmit = event => {
        event.preventDefault()
        const { list, item, selectedOption } = this.state
        const newItem = `${selectedOption.label}: ${item}`
        const newList = this.orderList([...list, newItem])
        if (!this.state.selectedOption) return
        if (!this.state.item) return
        this.setState({
          list: newList,
          item: ''
        })
      }
    
      deleteItem = index => {
        this.setState({
          list: this.state.list.filter((_, i) => i !== index)
        })
      }
    
      orderList = list => {
        return list.reverse()
      }


}

export default Home