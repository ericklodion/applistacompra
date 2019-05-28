import React, {Component, Fragment} from 'react'
import ComboBox from '../../Components/ComboBox';
import Input from '../../Components/Input';
import Button from '../../Components/Button';

class Home extends Component{

    render(){
        return (
            <Fragment>
                <Input
                    label="Produto"
                />
                <ComboBox/>
                <Button>Adicionar</Button>
            </Fragment>
        )
    }

}

export default Home