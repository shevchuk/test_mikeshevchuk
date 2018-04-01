import PropTypes from 'prop-types';
import React, { Component } from 'react'
import { Input } from 'semantic-ui-react'

export class ValueInput extends Component {
    onChangeHandler(e) {
        this.setState({
            inputValue: e.target.value
        }, () => {
            this.props.onChange(this.state.inputValue);
        });
    }
value="Kilimanjaro"
    render() {
        return (
            <div>
              <Input
                placeholder="Enter value..."
                onChange={this.onChangeHandler.bind(this)}
              />
            </div>
        );
  }
}

ValueInput.propTypes = {
    onChange: PropTypes.func.isRequired
}
