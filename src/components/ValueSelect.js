import PropTypes from 'prop-types';
import React, { Component } from 'react'
import { Dropdown } from 'semantic-ui-react'

export class ValueSelect extends Component {
    onChangeHandler(e, data) {
        this.props.onChange(data.value);
    }
    
    render() {
        const numbers = [
            {
                text: 'one',
                value: 1
            },
            {
                text: 'two',
                value: 2
            },
            {
                text: 'three',
                value: 3
            },
            {
                text: 'four',
                value: 4
            },
            {
                text: 'five',
                value: 5
            }
        ];
        
        return (
            <div>
              <Dropdown placeholder='Choose...' options={numbers} onChange={this.onChangeHandler.bind(this)}/>
            </div>
        );
    }
}

ValueSelect.propTypes = {
    onChange: PropTypes.func.isRequired
}
